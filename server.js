const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const path = require("path");
const data = require("./src/data/seasonalFromHtml.json");
const { climateData } = require("./src/data/foodClimate.js");
const fs = require("fs");
const port = process.env.PORT || 5000;
var stringSimilarity = require("string-similarity");
let dude = "fuck";
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
  const a = Object.entries(
    climateData["Öppna listan – ett utdrag från RISE klimatdatabas för livsmedel v 1.5"]
  );
  allData.map(item =>
    a.map(i =>
      Object.keys(i[1]).map(name => {
        const seasonalName = Object.keys(item)[0]
          .toLowerCase()
          .replace("sallat", "sallad");
        const climateName = name.toLowerCase();
        const climateCategory = i[0].toLowerCase();
        const seasonalCategory = item[Object.keys(item)[0]].category.toLowerCase();
        const similarity = stringSimilarity.compareTwoStrings(climateName, seasonalName);
        const similarityLength =
          seasonalName.length > climateName.length * 2.4 ||
          climateName.length > seasonalName.length * 2.4;
        const includingName =
          climateName.includes(seasonalName) || seasonalName.includes(climateName);
        const similarityCategory = stringSimilarity.compareTwoStrings(
          seasonalCategory,
          climateCategory
        );
        if (similarityLength && includingName && similarity > 0.4) {
          realData[seasonalName] = { ...item[seasonalName], ...i[1][climateName] };
        } else if (!item[climateName] && !realData[climateName]) {
          realData[climateName] = { ...i[1][climateName], category: climateCategory };
        }
      })
    )
  );
  return realData;
};
const similarCategories = [
  ["potatis", "rotsaker", "rovor"],
  "fisk",
  "frukt",
  "kryddväxter",
  "frukt och grönt",
  "bladgrönsaker"
];
// const allOfTheData = {test: 'transformData()'};
// const allOfTheData = transformData();
const readLargeFile = async currentData => {
  const currentDataInEntries = Object.entries(currentData);
  var dataToReturn = currentData;
  if (!currentData || currentData.length === 0) return;
  const data = await fs.readFileSync("./src/data/foodNutrition.json", "utf8");
  var obj = JSON.parse(data);
  await obj.Livsmedel.forEach(item => {
    const newNaringsVarde = item.Naringsvarden.Naringsvarde.filter(item => item.Varde !== "0")
      .filter(item => item.Varde !== "0,0")
      .filter(item => item.Varde !== "0,00")
      .filter(item => item.Varde !== "0,000");
    currentDataInEntries.forEach(existingName => {
      const currentName = existingName[0];
      const newName = item.Namn.toLowerCase();
      const similar = stringSimilarity.compareTwoStrings(newName, currentName);
      if (similar > 0.6) {
        dataToReturn[currentName] = {
          ...currentData[currentName],
          livsmedelsdata: item
        };
        if (dataToReturn[currentName].Naringsvarden)
          dataToReturn[currentName].Naringsvarden.Naringsvarde = newNaringsVarde;
      } else return null;
    });
  });
  return dataToReturn;
};
const scraper = async currentData => {
  // innan var det transformData() i entries
  const fullData = Object.entries(currentData);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let newObj = currentData;
  try {
    for (let e = 0; e < fullData.length; e++) {
      const name = await fullData[e][0];
      console.log(name);
      await page.goto(`http://xn--ssongsmat-v2a.nu/ssm/${name}`);
      // const bodyHandle = await page.$("body");
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
      // .replace(/<\/?[^>]+(>|$)/g, ""));
      // Object.values(wrapper.getElementsByTagName("p"))
      //   .map(text => text.textContent.replace("\n", ""))
      //   .join("<br />");
      // const bild = wrapper.getElementsByTagName("img");
      // const beskrivning = document.querySelector(".aside").innerHTML.nextElementSibling;
      // await bodyHandle.dispose();
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
  const updatedData = await readLargeFile(dataFromSet);
  const finalizedData = await scraper(updatedData);
  fs.writeFile("newData.json", JSON.stringify(finalizedData), err => console.log(err));
};
writeData();
// const everything = hehehe();
// hehehe();
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
