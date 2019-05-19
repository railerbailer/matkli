//+ förpackningar
// + ekologisk eller ej värt?
// + miljömärkningar
// + säsongsdata V
// + mijöpåverkan generellt V
// next level: nutrional data
// kolla på kategori och hitta lista vilka som tillhör vilken kategori
//bilder till varje
const climateData = {
  "Öppna listan – ett utdrag från RISE klimatdatabas för livsmedel v 1.5": {
    protein: {
      "nöt kött rå": {
        generell: {
          sverige: {
            footprint: 27,
            räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
          },
          brasilien: {
            footprint: 41,
            räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
          }
        }
      },
      lamm: {
        generell: {
          sverige: {
            footprint: 21,
            räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
          }
        }
      },
      fläsk: {
        generell: {
          sverige: {
            footprint: 21,
            räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
          }
        }
      },
      höna: {
        generell: {
          sverige: {
            footprint: "2,4",
            räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
          }
        }
      },
      köttfärs: {
        generell: {
          sverige: {
            description: "50% nöt, 50% fläsk",
            footprint: 21,
            räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
          }
        }
      },
      ägg: {
        generell: {
          sverige: {
            footprint: "1,4",
            räknebas: "Per kg ägg med skal. (kg CO2-ekv./kg)"
          }
        }
      },
      lax: {
        generell: {
          norge: {
            footprint: "2,3",
            räknebas: "Per kg filé. (kg CO2-ekv./kg)"
          }
        }
      },
      sej: {
        generell: {
          norge: {
            footprint: "2,4",
            räknebas: "Per kg filé. (kg CO2-ekv./kg)"
          }
        }
      },
      sill: {
        generell: {
          norge: {
            footprint: "0,6",
            räknebas: "Per kg filé. (kg CO2-ekv./kg)"
          }
        }
      },
      blåmusslor: {
        generell: {
          norge: {
            description: "Odlade, utan skal",
            footprint: "1,5",
            räknebas: "Per kg filé. Odlade. (kg CO2-ekv./kg)"
          }
        }
      },
      räkor: {
        generell: {
          grönland: {
            description: "Utan skal",
            footprint: "7",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      "bruna bönor": {
        generell: {
          sverige: {
            description: "Torkade",
            footprint: "0,5",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      kikärter: {
        generell: {
          kanada: {
            description: "Torkade",
            footprint: "0,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      linser: {
        generell: {
          kanada: {
            description: "Torkade",
            footprint: "0,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      quorn: {
        generell: {
          storbritannien: {
            footprint: "1,7",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      }
    },
    kolhydrat: {
      potatis: {
        generell: {
          sverige: {
            description: "oskalad",
            footprint: "0,1",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      spagetti: {
        generell: {
          sverige: {
            description: "okokt",
            footprint: "0,8",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      matvete: {
        generell: {
          sverige: {
            description: "okokt",
            footprint: "0,5",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      ris: {
        generell: {
          thailand: {
            description: "jasmin, okokt",
            footprint: "3,0",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      "vitt bröd": {
        generell: {
          sverige: {
            description: "vete",
            footprint: "0,5",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      "knäcke bröd": {
        generell: {
          sverige: {
            footprint: "0,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      }
    },
    mejeri: {
      mellanmjölk: {
        generell: {
          sverige: {
            footprint: "0,9",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      "creme fraiche": {
        generell: {
          sverige: {
            description: "lätt, 17% fett",
            footprint: "2,6",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      vispgrädde: {
        generell: {
          sverige: {
            description: "40% fett",
            footprint: "5",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      smör: {
        generell: {
          sverige: {
            footprint: "7",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      ost: {
        generell: {
          sverige: {
            description: "31 % fett",
            footprint: "9",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      }
    },
    "frukt och grönt": {
      äpple: {
        generell: {
          sverige: {
            description: "med skal",
            footprint: "0,2",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      apelsin: {
        generell: {
          sydeurope: {
            description: "genomsnitt, med skal",
            footprint: "0,4",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      bananer: {
        generell: {
          "costa rica": {
            description: "med skal",
            footprint: "0,5",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      jordgubbar: {
        generell: {
          sverige: {
            footprint: "0,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      "gul lök": {
        generell: {
          sverige: {
            description: "med skal",
            footprint: "0,1",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      spenat: {
        generell: {
          sverige: {
            description: "färsk",
            footprint: "0,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      "gröna ärter": {
        generell: {
          sverige: {
            footprint: "0,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      tomat: {
        generell: {
          sverige: {
            description: "växthus uppvärmt med hög andel förnybar energi",
            footprint: "0,2",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      isbergssallad: {
        generell: {
          sverige: {
            footprint: "0,2",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      }
    },
    "övriga vegetabiliska livsmedel": {
      vetemjöl: {
        generell: {
          sverige: {
            footprint: "0,4",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      socker: {
        generell: {
          sverige: {
            footprint: "0,6",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      bordsmargarin: {
        generell: {
          sverige: {
            description: "40% fett",
            footprint: "1,1",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      sötmandel: {
        generell: {
          usa: {
            description: "utan skal",
            footprint: "2,3",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      rapsolja: {
        generell: {
          sverige: {
            footprint: "1,4",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      },
      choklad: {
        generell: {
          "Sverige/Ghana": {
            description: "mörk",
            footprint: "0,8",
            räknebas: "Per kg. (kg CO2-ekv./kg)"
          }
        }
      }
    },
    dryck: {
      bryggkaffe: {
        generell: {
          "Brasilien/Sverige": {
            footprint: "2,3",
            räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)"
          }
        }
      },
      apelsinjuice: {
        generell: {
          "Brasilien/Sverige": {
            footprint: "0,6",
            räknebas: "Per liter juice. (kg CO2-ekv./kg)"
          }
        }
      },
      läsk: {
        generell: {
          sverige: {
            footprint: "0,1",
            räknebas: "Per liter läsk. (kg CO2-ekv./kg)"
          }
        }
      },
      öl: {
        generell: {
          "europa genomsnitt": {
            description: "flera länder",
            footprint: "0,7",
            räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)"
          }
        }
      }
    }
  }
};
module.exports = {
  climateData
};
