const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const path = require("path");
const data = require("./src/data/seasonalFromHtml.json");
const { climateData } = require("./src/data/foodClimate.js");
const fs = require("fs");
const port = process.env.PORT || 5000;
var stringSimilarity = require("string-similarity");
console.log("MÄT", stringSimilarity.compareTwoStrings("havskräfta", "havskräftor"));
console.log("MÄTVINN", stringSimilarity.compareTwoStrings("havskräfta", "apelsinjuice konc"));
const transformData = () => {
  let allData = [];
  let realData = {};
  data.tr.map(first => {
    let data = {};
    let name;
    if (first.td[0]["_data-title"] === "Råvara") {
      name = first.td[0].a["_title"].toLowerCase();
      data[name] = {};
    }
    if (first.td[1]["_data-title"] === "Kategori") {
      data[name].category = first.td[1].a["_title"].split(":")[1];
    }
    if (first.td[2]["_data-title"] === "Säsong") {
      data[name].season = [];
      first.td[2].div.div.map(month => {
        if (month.span) {
          if (month.span[0]._style === "color:#D2FABE;") {
            data[name].season.push({ [month._title]: "weak" });
          }
          if (month.span[0]._style === "color:#A9D56A;") {
            data[name].season.push({ [month._title]: "medium" });
          }
          if (month.span[0]._style === "color:#8CC639;") {
            data[name].season.push({ [month._title]: "strong" });
          }
          return null;
        }
      });
    }
    realData[name] = data[name];
    allData.push(data);
  });
  // console.log("climateData", climateData);
  const climateDataEntries = Object.entries(
    climateData["Öppna listan – ett utdrag från RISE klimatdatabas för livsmedel v 1.5"]
  );
  allData.map(seasonItem =>
    climateDataEntries.map(climateEntry =>
      Object.keys(climateEntry[1]).map(name => {
        const seasonalName = Object.keys(seasonItem)[0]
          .toLowerCase()
          .replace("sallat", "sallad");
        const climateName = name.toLowerCase();
        const climateCategory = climateEntry[0].toLowerCase();
        const similarity = stringSimilarity.compareTwoStrings(climateName, seasonalName);
        const similarityLength =
          seasonalName.length > climateName.length * 2.4 ||
          climateName.length > seasonalName.length * 2.4;
        const includingName =
          climateName.includes(seasonalName) || seasonalName.includes(climateName);
        if (similarityLength && includingName && similarity > 0.4) {
          realData[seasonalName] = { ...seasonItem[seasonalName], ...climateEntry[1][climateName] };
        } else if (!seasonItem[climateName] && !realData[climateName]) {
          realData[climateName] = { ...climateEntry[1][climateName], category: climateCategory };
        }
      })
    )
  );
  return realData;
};

const readLargeFile = async currentData => {
  const currentDataInEntries = Object.entries(currentData);
  var dataToReturn = currentData;
  if (!currentData || currentData.length === 0) return;
  const data = await fs.readFileSync("./src/data/foodNutrition.json", "utf8");
  var obj = JSON.parse(data);
  let alreadySet = [];
  await obj.Livsmedel.forEach(item => {
    const newNaringsVarde = item.Naringsvarden.Naringsvarde.filter(item => {
      const stringToInt = parseInt(item.Varde.replace(",", ""));
      return stringToInt > 0;
    });

    newNaringsVarde.map(item => item.Varde);
    currentDataInEntries.forEach(currentEntryData => {
      const currentName = currentEntryData[0];
      const newName = item.Namn.toLowerCase();
      const similar = stringSimilarity.compareTwoStrings(newName, currentName);
      const gotNaringsvardeArray =
        dataToReturn[currentName].livsmedelsdata &&
        dataToReturn[currentName].livsmedelsdata.Naringsvarden &&
        dataToReturn[currentName].livsmedelsdata.Naringsvarden.Naringsvarde;
      const firstName = newName.split(" ")[0];
      const oldDataOrEmptyString = dataToReturn[currentName].livsmedelsdata
        ? dataToReturn[currentName].livsmedelsdata.Namn.toLowerCase()
        : " ";
      const lastComparison = stringSimilarity.compareTwoStrings(oldDataOrEmptyString, currentName);
      const currentComparison = stringSimilarity.compareTwoStrings(newName, currentName);
      const firstNameComparison = stringSimilarity.compareTwoStrings(firstName, currentName);
      const nameEquals = newName === currentName.toLowerCase();
      const firstNameEquals = firstName === currentName.toLowerCase();
      if (nameEquals) {
        alreadySet.push(currentName);
        dataToReturn[currentName] = {
          ...currentData[currentName],
          livsmedelsdata: item
        };
        if (gotNaringsvardeArray)
          dataToReturn[currentName].livsmedelsdata.Naringsvarden.Naringsvarde = newNaringsVarde;
      } else if (!nameEquals && firstNameEquals) {
        dataToReturn[currentName] = {
          ...currentData[currentName],
          livsmedelsdata: item
        };
        if (gotNaringsvardeArray)
          dataToReturn[currentName].livsmedelsdata.Naringsvarden.Naringsvarde = newNaringsVarde;
      } else if (
        currentComparison >= firstNameComparison &&
        currentComparison > lastComparison &&
        similar > 0.5
      ) {
        dataToReturn[currentName] = {
          ...currentData[currentName],
          livsmedelsdata: item
        };
        if (gotNaringsvardeArray)
          dataToReturn[currentName].livsmedelsdata.Naringsvarden.Naringsvarde = newNaringsVarde;
      } else return null;
    });
  });
  return dataToReturn;
};
const scraper = async currentData => {
  const fullData = Object.entries(currentData);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let newObj = currentData;
  try {
    for (let e = 0; e < fullData.length; e++) {
      const name = await fullData[e][0];
      console.log(name);
      await page.goto(`http://xn--ssongsmat-v2a.nu/ssm/${name}`);
      const miljöpåverkan = await page.evaluate(name => {
        const wrapper = document.querySelector(".mw-content-ltr");
        const miljöpåverkan = Object.values(wrapper.getElementsByTagName("h2")).map(
          e => e.textContent === "Miljöpåverkan" && e
        )[0];
        return (
          miljöpåverkan &&
          miljöpåverkan.nextElementSibling.textContent.replace(/<\/?[^>]+(>|$)/g, "")
        );
      }, name);

      const bild = await page.evaluate(() => {
        const wrapper = document && document.querySelector(".mw-content-ltr");
        const image = wrapper && wrapper.querySelector(".image");
        return image && image.innerHTML;
      });
      const beskrivning = await page.evaluate(name => {
        const wrapper = document.querySelector(".mw-content-ltr");
        const sibling = wrapper && wrapper.querySelectorAll("p");
        const description = Object.values(sibling)
          .map(item => {
            const text = item.textContent.replace("\n", "");
            const includes =
              text.toLowerCase().includes(name) || text.toLowerCase().includes("miljö");
            return includes && text.replace(/<\/?[^>]+(>|$)/g, "");
          })
          .filter(item => item);
        return description.join("");
      }, name);
      const referenser = await page.evaluate(() => {
        const wrapper = document.querySelector(".mw-content-ltr");
        const listOfReferences = wrapper.querySelector(".references");

        return listOfReferences && listOfReferences.innerHTML;
      });
      const content = { bild, miljöpåverkan, beskrivning, referenser };
      newObj[name] = { ...newObj[name], content };
    }
    await browser.close();
  } catch (error) {
    console.log(error);
    return;
  }
  return newObj;
};

const writeData = async () => {
  const dataFromSet = await transformData();
  console.log(dataFromSet);
  const updatedData = await readLargeFile(dataFromSet);
  const finalizedData = await scraper(updatedData);
  // fs.writeFile("newData.json", JSON.stringify(finalizedData), err => console.log(err));
};
writeData();

app.use(express.static(path.join(__dirname, "/build")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "/build/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
