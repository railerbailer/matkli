//+ förpackningar
// + ekologisk eller ej värt?
// + miljömärkningar
// + säsongsdata V
// + mijöpåverkan generellt V
// next level: nutrional data
// kolla på kategori och hitta lista vilka som tillhör vilken kategori
//bilder till varje
const climateData = {
  baljväxter: {
    category: "baljväxter",
    generell: {
      ospecificerat: {
        footprint: 0.7,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },

  nötter: {
    category: "Nötter frön",
    generell: {
      ospecificerat: {
        footprint: 1.5,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  "nöt kött rå": {
    category: "kött",
    generell: {
      footprint: 26,
      sverige: {
        footprint: 26,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      },
      brasilien: {
        footprint: 41,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  vilt: {
    category: "vilt",
    generell: {
      sverige: {
        footprint: 0.5,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  lamm: {
    category: "kött",
    generell: {
      sverige: {
        footprint: 21,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  fläsk: {
    category: "fläsk",
    generell: {
      sverige: {
        footprint: 6,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  höna: {
    category: "fågel",
    generell: {
      sverige: {
        footprint: 3,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  köttfärs: {
    category: "kött fläsk",
    generell: {
      sverige: {
        description: "50% nöt, 50% fläsk",
        footprint: 16,
        räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)"
      }
    }
  },
  ägg: {
    category: "ägg",
    generell: {
      sverige: {
        footprint: 2,
        räknebas: "Per kg ägg med skal. (kg CO2-ekv./kg)"
      }
    }
  },
  lax: {
    category: "fisk",
    generell: {
      norge: {
        footprint: "2,3",
        räknebas: "Per kg filé. (kg CO2-ekv./kg)"
      }
    }
  },
  "fisk och skaldjur": {
    category: "fisk och skaldjur",
    generell: {
      ospecificerat: {
        footprint: 3,
        räknebas: "Per kg filé. (kg CO2-ekv./kg)"
      }
    }
  },
  sej: {
    category: "fisk",
    generell: {
      norge: {
        footprint: 2.4,
        räknebas: "Per kg filé. (kg CO2-ekv./kg)"
      }
    }
  },
  sill: {
    category: "fisk",
    generell: {
      norge: {
        footprint: 0.6,
        räknebas: "Per kg filé. (kg CO2-ekv./kg)"
      }
    }
  },
  blåmusslor: {
    category: "skaldjur",
    generell: {
      norge: {
        description: "Odlade, utan skal",
        footprint: 1.5,
        räknebas: "Per kg filé. Odlade. (kg CO2-ekv./kg)"
      }
    }
  },
  räkor: {
    category: "skaldjur",
    generell: {
      grönland: {
        description: "Utan skal",
        footprint: 7,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "bruna bönor": {
    category: "baljväxter",
    generell: {
      sverige: {
        description: "Torkade",
        footprint: 0.5,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  kikärter: {
    category: "baljväxter",
    generell: {
      kanada: {
        description: "Torkade",
        footprint: 0.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  linser: {
    category: "baljväxter",
    generell: {
      kanada: {
        description: "Torkade",
        footprint: 0.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  quorn: {
    category: "soja-  veteprotein o quorn",
    generell: {
      ospecificerat: {
        footprint: 4,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  köttsubstitut: {
    category: "baljväxter soja-  veteprotein o quorn",
    generell: {
      ospecificerat: {
        description:
          "Köttsubstitutsprodukter är halv- eller helfabrikat som i textur och funktion liknar köttprodukter såsom olika korvar, grytbitar eller biffar gjorda på soja och andra baljväxter och vegetabilier men utan kött. Samt tofu och andra förädlade sojaprodukter",
        footprint: 3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },

  potatis: {
    category: "rotfrukt",
    generell: {
      sverige: {
        description: "oskalad",
        footprint: 0.1,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  pasta: {
    category: "pasta",
    generell: {
      ospecificerat: {
        description: "torr pasta",
        footprint: 0.8,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  gryn: {
    category: "Mjöl stärkelse kli",
    generell: {
      ospecificerat: {
        footprint: 0.6,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  mjöl: {
    category: "Mjöl stärkelse kli vete",
    generell: {
      ospecificerat: {
        footprint: 0.6,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  bröd: {
    category: "bröd",
    generell: {
      ospecificerat: {
        footprint: 0.8,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  spagetti: {
    category: "pasta",
    generell: {
      sverige: {
        description: "okokt",
        footprint: 0.8,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  matvete: {
    category: "vete",
    generell: {
      sverige: {
        description: "okokt",
        footprint: 0.5,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  ris: {
    category: "ris risnudlar",
    generell: {
      ospecificerat: {
        description: "torrt",
        footprint: 2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "vitt bröd": {
    category: "bröd",
    generell: {
      sverige: {
        description: "vete",
        footprint: 0.5,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "knäcke bröd": {
    category: "bröd",
    generell: {
      sverige: {
        footprint: 0.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },

  "rätt med kött": {
    category: "pizza paj pirog färdig smörgås kötträtter",
    generell: {
      ospecificerat: {
        footprint: 2,
        räknebas: "Per 320g. (kg CO2-ekv./kg)"
      }
    }
  },
  "rätt med fisk": {
    category: "fisk fiskrätter färdig ",
    generell: {
      ospecificerat: {
        footprint: 1,
        räknebas: "Per 320g. (kg CO2-ekv./kg)"
      }
    }
  },
  "rätt vegetarisk": {
    category: "vegetarisk färdigrätt",
    generell: {
      ospecificerat: {
        footprint: 2,
        räknebas: "Per 320g. (kg CO2-ekv./kg)"
      }
    }
  },

  godis: {
    category: "godis ej choklad",
    generell: {
      ospecificerat: {
        footprint: 2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  chips: {
    category: "chips popcorn",
    generell: {
      ospecificerat: {
        footprint: 2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  glass: {
    category: "glass",
    generell: {
      ospecificerat: {
        footprint: 2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  kaffe: {
    category: "kaffe",
    generell: {
      ospecificerat: {
        footprint: 3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  te: {
    category: "te",
    generell: {
      ospecificerat: {
        footprint: 4,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  margarin: {
    category: "smör",
    generell: {
      ospecificerat: {
        footprint: 1.5,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  olja: {
    category: "olja",
    generell: {
      ospecificerat: {
        footprint: 1.5,
        räknebas: "Per kg/liter. (kg CO2-ekv./kg)"
      }
    }
  },
  "sås kryddor": {
    category: "fetter såser och kryddor",
    generell: {
      ospecificerat: {
        footprint: 1,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  övrigt: {
    category: "mjölk smör ost",
    generell: {
      ospecificerat: {
        footprint: 2
      }
    }
  },
  "mjölk fil yoghurt": {
    category: "mjölk fil yoghurt",
    generell: {
      ospecificerat: {
        footprint: 1
      }
    }
  },
  grädde: {
    category: "grädde",
    generell: {
      ospecificerat: {
        footprint: 1
      }
    }
  },
  mellanmjölk: {
    category: "mjölk",
    generell: {
      sverige: {
        footprint: 0.9,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "creme fraiche": {
    category: "creme fraiche",
    generell: {
      sverige: {
        description: "lätt, 17% fett",
        footprint: 2.6,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  vispgrädde: {
    category: "grädde",
    generell: {
      sverige: {
        description: "40% fett",
        footprint: 5,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  smör: {
    category: "smör",
    generell: {
      sverige: {
        footprint: 8,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  ost: {
    category: "ost",
    generell: {
      sverige: {
        description: "31 % fett",
        footprint: 9,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "grönt och frukt": {
    category: "flygtransport frukt grönt",
    generell: {
      flygtransport: {
        footprint: 1,
        räknebas: "Per kg. med skal (kg CO2-ekv./kg)"
      }
    }
  },
  "rotfrukter lök och kål": {
    category: "Grönsaks- rotfrukts- baljväxträtter o produkter",
    generell: {
      ospecificerat: {
        footprint: 0.2,
        räknebas: "Per kg. med skal (kg CO2-ekv./kg)"
      }
    }
  },
  "salladsgrönsaker import": {
    category: "sallad import flygtransport",
    generell: {
      ospecificerat: {
        footprint: 1.4,
        räknebas: "Per kg. med skal (kg CO2-ekv./kg)"
      }
    }
  },
  "salladsgrönsaker norden": {
    category: "sallad norden",
    generell: {
      ospecificerat: {
        footprint: 1,
        räknebas: "Per kg. med skal (kg CO2-ekv./kg)"
      }
    }
  },
  "frukt import": {
    category: "frukt och bär import flygtransport",
    generell: {
      ospecificerat: {
        footprint: 0.6,
        räknebas: "Per kg. med skal (kg CO2-ekv./kg)"
      }
    }
  },
  "frukt norden": {
    category: "frukt och bär norden",
    generell: {
      ospecificerat: {
        footprint: 0.2,
        räknebas: "Per kg. med skal (kg CO2-ekv./kg)"
      }
    }
  },
  äpple: {
    category: "frukt och bär",
    generell: {
      sverige: {
        description: "med skal",
        footprint: 0.2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  apelsin: {
    category: "frukt och bär",
    generell: {
      sydeurope: {
        description: "genomsnitt, med skal",
        footprint: 0.4,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  bananer: {
    category: "frukt och bär",
    generell: {
      "costa rica": {
        description: "med skal",
        footprint: 0.5,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  jordgubbar: {
    category: "frukt och bär",
    generell: {
      sverige: {
        footprint: 0.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "gul lök": {
    category: "grönsaker",
    generell: {
      sverige: {
        description: "med skal",
        footprint: 0.1,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  spenat: {
    category: "grönsak",
    generell: {
      sverige: {
        description: "färsk",
        footprint: 0.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  "gröna ärter": {
    category: "grönsak",
    generell: {
      sverige: {
        footprint: 0.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  tomat: {
    category: "grönsak",
    generell: {
      sverige: {
        description: "växthus uppvärmt med hög andel förnybar energi",
        footprint: 0.2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  isbergssallad: {
    category: "grönsak sallad",
    generell: {
      sverige: {
        footprint: 0.2,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  vetemjöl: {
    category: "mjöl stärkelse kli",
    generell: {
      sverige: {
        footprint: 0.4,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  socker: {
    category: "socker sirap honung",
    generell: {
      sverige: {
        footprint: 0.6,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  bordsmargarin: {
    category: "smör",
    generell: {
      sverige: {
        description: "40% fett",
        footprint: 1.1,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  sötmandel: {
    category: "nötter frön",
    generell: {
      usa: {
        description: "utan skal",
        footprint: 2.3,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  rapsolja: {
    category: "olja",
    generell: {
      sverige: {
        footprint: 1.4,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  choklad: {
    category: "Godis som innehåller choklad",
    generell: {
      "Sverige/Ghana": {
        description: "mörk",
        footprint: 0.8,
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  dryck: {
    category: "kaffe te",
    bryggkaffe: {
      generell: {
        "Brasilien/Sverige": {
          footprint: 2.3,
          räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)"
        }
      }
    },
    "juice och sylt": {
      category: "fruktjuice",
      generell: {
        ospecificerat: {
          footprint: 3,
          räknebas: "Per liter oblandad juice (kg CO2-ekv./kg)"
        }
      }
    },
    apelsinjuice: {
      category: "fruktjuice",
      generell: {
        "Brasilien/Sverige": {
          footprint: 0.6,
          räknebas: "Per liter juice. (kg CO2-ekv./kg)"
        }
      }
    },
    läsk: {
      category: "Saft läsk cider u alkohol",
      generell: {
        sverige: {
          footprint: 0.1,
          räknebas: "Per liter läsk. (kg CO2-ekv./kg)"
        }
      }
    },
    öl: {
      category: "Saft läsk cider u alkohol",
      generell: {
        "europa genomsnitt": {
          description: "flera länder",
          footprint: 0.7,
          räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)"
        }
      }
    }
  }
};
module.exports = {
  climateData
};
