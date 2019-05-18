const orignal = {
    "amerikanska blåbär": { category: "Bär", season: [] },
    ananas: { category: "Frukt", season: [] },
    avokado: { category: "Grönsaker", season: [] },
    bananer: {
      category: "Frukt",
      season: [],
      generell: { "costa rica": { description: "med skal", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    dadlar: { category: "Frukt", season: [] },
    fasan: { category: "Fågel", season: [] },
    ingefära: { category: "Kryddväxter", season: [] },
    kapkrusbär: { category: "Bär", season: [] },
    kiwi: { category: "Frukt", season: [] },
    korogi: { category: "Rotsaker", season: [] },
    lagerblad: { category: "Kryddväxter", season: [] },
    lubb: { category: "Lakefiskar", season: [] },
    mango: { category: "Frukt", season: [] },
    muskotblomma: { category: "Kryddväxter", season: [] },
    muskotnöt: { category: "Kryddväxter", season: [] },
    okra: { category: "Grönsaker", season: [] },
    oliver: { category: "Frukt och grönsaker", season: [] },
    sötpotatis: {
      category: "Rotsaker",
      season: [],
      generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    valnöt: { category: "Nötter", season: [] },
    vindruvor: { category: "Frukt", season: [] },
    hummer: {
      category: "Skaldjur",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { september: "weak" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    pumpa: {
      category: "Pumpor",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "weak" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    kastanj: { category: "Nötter", season: [{ oktober: "medium" }] },
    krusbär: { category: "Bär", season: [{ juli: "medium" }, { augusti: "weak" }] },
    gös: {
      category: "Abborrfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { augusti: "medium" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    haverrot: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "weak" },
        { augusti: "weak" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    rödkål: {
      category: "Kål",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "medium" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    äpple: {
      category: "Frukt",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "med skal", footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    savojkål: {
      category: "Kål",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    slätvar: {
      category: "Plattfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    blomkål: {
      category: "Kål",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "medium" }
      ]
    },
    kålrabbi: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "weak" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    "dansk sparrispotatis": {
      category: "Potatis",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "medium" },
        { augusti: "medium" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    sik: {
      category: "Laxfiskar",
      season: [
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" }
      ]
    },
    svartrot: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { augusti: "weak" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    jordärtskocka: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    ostron: {
      category: "Musslor",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "medium" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "31 % fett", footprint: "9", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    abborre: {
      category: "Abborrfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "weak" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    vinterpotatis: {
      category: "Potatis",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "weak" },
        { september: "weak" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    gädda: {
      category: "Fisk och skaldjur",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    pärllök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    vitbeta: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    mandelpotatis: {
      category: "Potatis",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { augusti: "medium" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    polkabeta: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { augusti: "medium" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    "röd steklök": {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    salladskål: {
      category: "Kål",
      season: [
        { januari: "strong" },
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    silverlök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { juni: "weak" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    schalottenlök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    vitkål: {
      category: "Kål",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    kålrot: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    vildsvin: {
      category: "Vilt",
      season: [
        { januari: "strong" },
        { februari: "medium" },
        { april: "medium" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    purjolök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "weak" },
        { april: "medium" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    lindblommor: { category: "Vilda växter", season: [{ juni: "medium" }, { juli: "medium" }] },
    "gul lök": {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "med skal", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    rödlök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    vitlök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "weak" },
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    blåmusslor: {
      category: "Musslor",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: {
        norge: { description: "Odlade, utan skal", footprint: "1,5", räknebas: "Per kg filé. Odlade. (kg CO2-ekv./kg)" }
      }
    },
    groddar: {
      category: "Grönsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    havskräfta: {
      category: "Skaldjur",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    lax: {
      category: "Laxfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { norge: { footprint: "2,3", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
    },
    morot: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    ostronskivling: {
      category: "Svamp",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    palsternacka: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    pilgrimsmusslor: {
      category: "Musslor",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    potatis: {
      category: "Potatis",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    potatislök: {
      category: "Lökar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    regnbågsöring: {
      category: "Laxfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    rotselleri: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    rödbeta: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    röding: {
      category: "Laxfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    sej: {
      category: "Torskfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { norge: { footprint: "2,4", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
    },
    sill: {
      category: "Sillfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { norge: { footprint: "0,6", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
    },
    sjötunga: {
      category: "Plattfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    smörgåskrasse: {
      category: "Kryddväxter",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    torsk: {
      category: "Torskfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    ägg: {
      category: "Ägg",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { footprint: "1,4", räknebas: "Per kg ägg med skal. (kg CO2-ekv./kg)" } }
    },
    "åttaarmad bläckfisk": {
      category: "Bläckfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    krondill: { category: "Kryddväxter", season: [{ augusti: "medium" }, { september: "medium" }] },
    blåbär: { category: "Bär", season: [{ juli: "weak" }, { augusti: "medium" }] },
    skärbönor: { category: "Bönor", season: [{ juli: "medium" }, { augusti: "weak" }] },
    aubergine: { category: "Grönsaker", season: [{ augusti: "weak" }, { september: "strong" }] },
    paprika: { category: "Grönsaker", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "weak" }] },
    bigarråer: { category: "Bär", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "weak" }] },
    trattkantareller: { category: "Svamp", season: [{ september: "medium" }, { oktober: "medium" }] },
    "färsk vitlök": { category: "Lökar", season: [{ maj: "weak" }, { juni: "strong" }, { juli: "weak" }] },
    lingon: { category: "Bär", season: [{ augusti: "medium" }, { september: "medium" }] },
    rönnbär: { category: "Bär", season: [{ september: "medium" }, { oktober: "strong" }, { november: "weak" }] },
    bärhäggmispel: { category: "Bär", season: [{ juli: "medium" }, { augusti: "medium" }] },
    krikon: { category: "Bär", season: [{ augusti: "medium" }, { september: "medium" }] },
    kvitten: { category: "Frukt", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "weak" }] },
    "svart mullbär": { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }] },
    krusvinbär: { category: "Bär", season: [{ juli: "medium" }, { augusti: "medium" }] },
    fläderblom: { category: "Kryddväxter", season: [{ juni: "strong" }, { juli: "medium" }] },
    aroniabär: { category: "Bär", season: [{ september: "weak" }, { oktober: "strong" }, { november: "medium" }] },
    sockerärt: {
      category: "Grönsaker",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "weak" }],
      generell: { sverige: { footprint: "0,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    blåhallon: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "weak" }] },
    krabbtaska: { category: "Skaldjur", season: [{ september: "medium" }, { oktober: "strong" }, { november: "weak" }] },
    hasselnöt: { category: "Nötter", season: [{ september: "strong" }, { oktober: "strong" }] },
    plommon: { category: "Frukt", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "medium" }] },
    daggkål: { category: "Grönsaker", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "medium" }] },
    harsyra: { category: "Vilda växter", season: [{ april: "weak" }, { maj: "strong" }, { juni: "medium" }] },
    havtorn: { category: "Bär", season: [{ september: "medium" }, { oktober: "strong" }, { november: "weak" }] },
    löktrav: { category: "Vilda växter", season: [{ april: "weak" }, { maj: "strong" }, { juni: "medium" }] },
    mangold: { category: "Bladgrönsaker", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "medium" }] },
    tryffel: { category: "Svamp", season: [{ oktober: "medium" }, { november: "strong" }, { december: "medium" }] },
    vildapel: { category: "Frukt", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "medium" }] },
    åkerbär: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "weak" }] },
    hallon: { category: "Bär", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "weak" }] },
    hjortron: { category: "Bär", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
    murklor: { category: "Svamp", season: [{ april: "weak" }, { maj: "strong" }, { juni: "medium" }] },
    nektarin: { category: "Frukt", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
    persikor: { category: "Frukt", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
    surkörsbär: { category: "Bär", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
    gurka: { category: "Grönsaker", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "weak" }] },
    björnbär: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "medium" }] },
    rosenkvitten: { category: "Frukt", season: [{ augusti: "strong" }, { september: "strong" }, { oktober: "weak" }] },
    smultron: { category: "Bär", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "weak" }] },
    jordgubbar: {
      category: "Bär",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "weak" }],
      generell: { sverige: { footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    sparris: {
      category: "Grönsaker",
      season: [{ april: "weak" }, { maj: "strong" }, { juni: "strong" }],
      generell: { thailand: { description: "jasmin, okokt", footprint: "3,0", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    chili: { category: "Kryddväxter", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "medium" }] },
    habanero: { category: "Kryddväxter", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "medium" }] },
    jalapeño: { category: "Grönsaker", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "medium" }] },
    märgärt: { category: "Bönor", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
    tranbär: { category: "Bär", season: [{ oktober: "strong" }, { november: "strong" }, { december: "weak" }] },
    bocktörne: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "medium" }] },
    fläderbär: { category: "Bär", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "strong" }] },
    rödbetsblad: { category: "Bladgrönsaker", season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "medium" }] },
    bondbönor: { category: "Bönor", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }] },
    "röda vinbär": {
      category: "Bär",
      season: [{ juni: "weak" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    åkerbönor: { category: "Bönor", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }] },
    sommargyllen: { category: "Vilda växter", season: [{ april: "strong" }, { maj: "strong" }, { juni: "medium" }] },
    "färsk gul lök": {
      category: "Lökar",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }],
      generell: { sverige: { description: "med skal", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    komatsuna: { category: "Bladgrönsaker", season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }] },
    "pak choi": {
      category: "Kål",
      season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "weak" }]
    },
    kirskål: { category: "Vilda växter", season: [{ april: "strong" }, { maj: "strong" }, { juni: "medium" }] },
    slånbär: { category: "Bär", season: [{ oktober: "strong" }, { november: "strong" }, { december: "medium" }] },
    fänkål: { category: "Grönsaker", season: [{ juli: "strong" }, { augusti: "strong" }, { september: "medium" }] },
    körsbärsplommon: {
      category: "Frukt",
      season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    mejram: { category: "Kryddväxter", season: [{ juli: "strong" }, { augusti: "strong" }, { september: "medium" }] },
    ramslök: { category: "Lökar", season: [{ april: "medium" }, { maj: "strong" }, { juni: "strong" }] },
    järpe: {
      category: "Fågel",
      season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "strong" }, { november: "medium" }]
    },
    karljohanssvamp: {
      category: "Svamp",
      season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "weak" }]
    },
    timjan: {
      category: "Kryddväxter",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "medium" }]
    },
    portlak: {
      category: "Bladgrönsaker",
      season: [{ juni: "weak" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    lake: {
      category: "Lakefiskar",
      season: [{ januari: "strong" }, { februari: "strong" }, { mars: "medium" }, { december: "strong" }]
    },
    berberisbär: {
      category: "Bär",
      season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    bifftomat: {
      category: "Grönsaker",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }],
      generell: {
        sverige: {
          description: "växthus uppvärmt med hög andel förnybar energi",
          footprint: "0,2",
          räknebas: "Per kg. (kg CO2-ekv./kg)"
        }
      }
    },
    majs: {
      category: "Grönsaker",
      season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    tomat: {
      category: "Grönsaker",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }],
      generell: {
        sverige: {
          description: "växthus uppvärmt med hög andel förnybar energi",
          footprint: "0,2",
          räknebas: "Per kg. (kg CO2-ekv./kg)"
        }
      }
    },
    nässlor: { category: "Vilda växter", season: [{ april: "strong" }, { maj: "strong" }, { juni: "strong" }] },
    braxen: { category: "Karpfiskar", season: [{ september: "strong" }, { oktober: "strong" }, { november: "strong" }] },
    bataviasallat: {
      category: "Sallat",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    champinjon: {
      category: "Svamp",
      season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    huvudsallat: {
      category: "Sallat",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    luftlök: {
      category: "Lökar",
      season: [{ juli: "strong" }, { augusti: "strong" }, { september: "strong" }, { oktober: "weak" }]
    },
    mizuna: {
      category: "Bladgrönsaker",
      season: [{ juni: "weak" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    plocksallat: {
      category: "Sallat",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    tatsoi: {
      category: "Bladgrönsaker",
      season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    gurkört: {
      category: "Grönsaker",
      season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    basilika: {
      category: "Kryddväxter",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    kantareller: {
      category: "Svamp",
      season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    citronmeliss: {
      category: "Kryddväxter",
      season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    "haricots verts": {
      category: "Bönor",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    nypon: {
      category: "Bär",
      season: [
        { augusti: "weak" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "weak" }
      ]
    },
    piplök: {
      category: "Lökar",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
    },
    päron: {
      category: "Frukt",
      season: [
        { augusti: "weak" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "weak" }
      ]
    },
    sallat: {
      category: "Sallat",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
    },
    sareptasenap: {
      category: "Kål",
      season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    sockerrot: {
      category: "Rotsaker",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }],
      generell: { sverige: { footprint: "0,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    sparrissallat: {
      category: "Sallat",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    spenat: {
      category: "Bladgrönsaker",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }],
      generell: { sverige: { description: "färsk", footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    endive: {
      category: "Sallat",
      season: [
        { januari: "strong" },
        { februari: "weak" },
        { oktober: "weak" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    kungskrabba: {
      category: "Skaldjur",
      season: [{ september: "medium" }, { oktober: "strong" }, { november: "strong" }, { december: "medium" }]
    },
    salvia: {
      category: "Kryddväxter",
      season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    kalixlöjrom: {
      category: "Fisk och skaldjur",
      season: [{ september: "medium" }, { oktober: "strong" }, { november: "strong" }, { december: "strong" }]
    },
    lamm: {
      category: "Kött",
      season: [{ september: "medium" }, { oktober: "strong" }, { november: "strong" }, { december: "strong" }],
      generell: { sverige: { footprint: 21, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" } }
    },
    skarpsill: {
      category: "Sillfiskar",
      season: [
        { januari: "strong" },
        { februari: "weak" },
        { oktober: "medium" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { norge: { footprint: "0,6", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
    },
    frisésallat: {
      category: "Sallat",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "weak" }
      ]
    },
    kronärtskocka: {
      category: "Grönsaker",
      season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
    },
    "svarta vinbär": {
      category: "Bär",
      season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    sydcikoria: {
      category: "Sallat",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "weak" }
      ]
    },
    machésallat: {
      category: "Frukt och grönsaker",
      season: [
        { juli: "medium" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "weak" }
      ]
    },
    ängssyra: {
      category: "Bladgrönsaker",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
    },
    körvel: {
      category: "Kryddväxter",
      season: [{ maj: "medium" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
    },
    romansallat: {
      category: "Sallat",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    mynta: {
      category: "Kryddväxter",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    rucola: {
      category: "Sallat",
      season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "strong" }]
    },
    brytbönor: {
      category: "Bönor",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    druvgurka: {
      category: "Grönsaker",
      season: [{ juli: "strong" }, { augusti: "strong" }, { september: "strong" }, { oktober: "strong" }]
    },
    isbergssallat: {
      category: "Sallat",
      season: [
        { juni: "weak" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    rosmarin: {
      category: "Kryddväxter",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "weak" }
      ]
    },
    vaxbönor: {
      category: "Bönor",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    svartkål: {
      category: "Kål",
      season: [
        { januari: "medium" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    ekbladssallat: {
      category: "Sallat",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    maskrosblad: {
      category: "Vilda växter",
      season: [{ mars: "weak" }, { april: "strong" }, { maj: "strong" }, { juni: "strong" }, { juli: "medium" }]
    },
    rosésallat: {
      category: "Sallat",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    selleri: {
      category: "Grönsaker",
      season: [
        { juli: "weak" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "medium" }
      ]
    },
    vattenkrasse: {
      category: "Bladgrönsaker",
      season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
    },
    svedjerova: {
      category: "Rovor",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "weak" },
        { oktober: "medium" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    dill: {
      category: "Kryddväxter",
      season: [
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "weak" }
      ]
    },
    dragon: {
      category: "Kryddväxter",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    and: {
      category: "Fågel",
      season: [
        { augusti: "weak" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    salladslök: {
      category: "Lökar",
      season: [{ april: "weak" }, { maj: "strong" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
    },
    grönkål: {
      category: "Kål",
      season: [
        { januari: "strong" },
        { februari: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    siklöja: {
      category: "Laxfiskar",
      season: [
        { mars: "strong" },
        { april: "strong" },
        { maj: "medium" },
        { oktober: "medium" },
        { november: "strong" },
        { december: "medium" }
      ]
    },
    gulbeta: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    färskpotatis: {
      category: "Potatis",
      season: [{ maj: "medium" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "strong" }],
      generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    oregano: {
      category: "Kryddväxter",
      season: [
        { maj: "weak" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "weak" }
      ]
    },
    rädisor: {
      category: "Rotsaker",
      season: [
        { april: "weak" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "weak" }
      ]
    },
    älg: {
      category: "Vilt",
      season: [
        { januari: "strong" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    ren: {
      category: "Kött",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "medium" },
        { november: "medium" },
        { december: "strong" }
      ]
    },
    flundra: {
      category: "Plattfiskar",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "weak" }
      ]
    },
    koriander: {
      category: "Kryddväxter",
      season: [
        { april: "medium" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "medium" }
      ]
    },
    rabarber: {
      category: "Frukt",
      season: [
        { april: "weak" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "medium" }
      ]
    },
    butternut: {
      category: "Pumpor",
      season: [
        { januari: "strong" },
        { februari: "medium" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    "svarta vinbärsblad": {
      category: "Kryddväxter",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    granatäpple: {
      category: "Frukt",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "weak" },
        { september: "weak" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "med skal", footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    brysselkål: {
      category: "Kål",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "weak" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    libbsticka: {
      category: "Kryddväxter",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    kolja: {
      category: "Torskfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "weak" },
        { oktober: "medium" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    hare: {
      category: "Vilt",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    broccoli: {
      category: "Kål",
      season: [
        { juni: "medium" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "medium" }
      ]
    },
    squash: {
      category: "Grönsaker",
      season: [
        { maj: "weak" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "weak" }
      ]
    },
    romanesco: {
      category: "Kål",
      season: [
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "medium" }
      ]
    },
    spagettipumpa: {
      category: "Pumpor",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "medium" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { sverige: { description: "okokt", footprint: "0,8", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    "tioarmad bläckfisk": {
      category: "Bläckfiskar",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "medium" },
        { oktober: "medium" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    makrill: {
      category: "Makrillfiskar",
      season: [
        { april: "weak" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "medium" }
      ]
    },
    hälleflundra: {
      category: "Plattfiskar",
      season: [
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" }
      ]
    },
    "vild lax": {
      category: "Laxfiskar",
      season: [
        { april: "strong" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" }
      ]
    },
    majrova: {
      category: "Rovor",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "weak" }
      ]
    },
    persilja: {
      category: "Bladgrönsaker",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "weak" }
      ]
    },
    rådjur: {
      category: "Vilt",
      season: [
        { januari: "strong" },
        { maj: "strong" },
        { juni: "medium" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    persiljerot: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "medium" },
        { september: "medium" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    räkor: {
      category: "Skaldjur",
      season: [
        { januari: "strong" },
        { februari: "strong" },
        { mars: "strong" },
        { april: "strong" },
        { maj: "medium" },
        { oktober: "medium" },
        { november: "strong" },
        { december: "strong" }
      ],
      generell: { grönland: { description: "Utan skal", footprint: "7", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
    },
    gräslök: {
      category: "Kryddväxter",
      season: [
        { april: "weak" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" }
      ]
    },
    "kinesisk gräslök": {
      category: "Lökar",
      season: [
        { april: "weak" },
        { maj: "strong" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" }
      ]
    },
    spetskål: {
      category: "Kål",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "medium" }
      ]
    },
    rödspätta: {
      category: "Plattfiskar",
      season: [
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "medium" }
      ]
    },
    rättika: {
      category: "Rotsaker",
      season: [
        { januari: "strong" },
        { februari: "medium" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "strong" },
        { december: "strong" }
      ]
    },
    pepparrot: {
      category: "Rotsaker",
      season: [
        { maj: "medium" },
        { juni: "strong" },
        { juli: "strong" },
        { augusti: "strong" },
        { september: "strong" },
        { oktober: "strong" },
        { november: "medium" }
      ]
    },
    nötkött: {
      generell: {
        sverige: { footprint: 27, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" },
        brasilien: { footprint: 41, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" }
      },
      category: "protein"
    },
    fläsk: {
      generell: { sverige: { footprint: 21, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" } },
      category: "protein"
    },
    kyckling: {
      generell: { sverige: { footprint: "2,4", räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" } },
      category: "protein"
    },
    köttfärs: {
      generell: {
        sverige: { description: "50% nöt, 50% fläsk", footprint: 21, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" }
      },
      category: "protein"
    },
    "bruna bönor": {
      generell: { sverige: { description: "Torkade", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "protein"
    },
    kikärter: {
      generell: { kanada: { description: "Torkade", footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "protein"
    },
    linser: {
      generell: { kanada: { description: "Torkade", footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "protein"
    },
    quorn: {
      generell: { storbritannien: { footprint: "1,7", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "protein"
    },
    spagetti: {
      generell: { sverige: { description: "okokt", footprint: "0,8", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "kolhydrat"
    },
    matvete: {
      generell: { sverige: { description: "okokt", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "kolhydrat"
    },
    ris: {
      generell: { thailand: { description: "jasmin, okokt", footprint: "3,0", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "kolhydrat"
    },
    "mjukt bröd": {
      generell: { sverige: { description: "vete", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "kolhydrat"
    },
    rågknäckebröd: {
      generell: { sverige: { footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "kolhydrat"
    },
    mellanmjölk: {
      generell: { sverige: { footprint: "0,9", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "mejeri"
    },
    "creme fraiche": {
      generell: { sverige: { description: "lätt, 17% fett", footprint: "2,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "mejeri"
    },
    grädde: {
      generell: { sverige: { description: "40% fett", footprint: "5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "mejeri"
    },
    smör: { generell: { sverige: { footprint: "7", räknebas: "Per kg. (kg CO2-ekv./kg)" } }, category: "mejeri" },
    ost: {
      generell: { sverige: { description: "31 % fett", footprint: "9", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "mejeri"
    },
    apelsin: {
      generell: {
        sydeurope: { description: "genomsnitt, med skal", footprint: "0,4", räknebas: "Per kg. (kg CO2-ekv./kg)" }
      },
      category: "frukt och grönt"
    },
    banan: {
      generell: { "costa rica": { description: "med skal", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "frukt och grönt"
    },
    "gröna ärtor": {
      generell: { sverige: { footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "frukt och grönt"
    },
    isbergssallad: { generell: { sverige: { footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } } },
    vetemjöl: {
      generell: { sverige: { footprint: "0,4", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "övriga vegetabiliska livsmedel"
    },
    socker: {
      generell: { sverige: { footprint: "0,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "övriga vegetabiliska livsmedel"
    },
    bordsmargarin: {
      generell: { sverige: { description: "40% fett", footprint: "1,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "övriga vegetabiliska livsmedel"
    },
    sötmandel: {
      generell: { usa: { description: "utan skal", footprint: "2,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "övriga vegetabiliska livsmedel"
    },
    rapsolja: {
      generell: { sverige: { footprint: "1,4", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "övriga vegetabiliska livsmedel"
    },
    chocklad: {
      generell: { "Sverige/Ghana": { description: "mörk", footprint: "0,8", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
      category: "övriga vegetabiliska livsmedel"
    },
    bryggkaffe: {
      generell: { "Brasilien/Sverige": { footprint: "2,3", räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)" } },
      category: "dryck"
    },
    apelsinjuice: {
      generell: { "Brasilien/Sverige": { footprint: "0,6", räknebas: "Per liter juice. (kg CO2-ekv./kg)" } },
      category: "dryck"
    },
    läsk: {
      generell: { sverige: { footprint: "0,1", räknebas: "Per liter läsk. (kg CO2-ekv./kg)" } },
      category: "dryck"
    },
    öl: {
      generell: {
        "europa genomsnitt": {
          description: "flera länder",
          footprint: "0,7",
          räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)"
        }
      },
      category: "dryck"
    },
    sallad: { generell: { sverige: { footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } } }
  };
  
const merged = {
  ananas: { category: "Frukt", season: [] },
  avokado: { category: "Grönsaker", season: [] },
  bananer: {
    category: "Frukt",
    season: [],
    generell: { "costa rica": { description: "med skal", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  dadlar: { category: "Frukt", season: [] },
  ingefära: { category: "Kryddväxter", season: [] },
  kiwi: { category: "Frukt", season: [] },
  mango: { category: "Frukt", season: [] },
  oliver: { category: "Frukt och grönsaker", season: [] },
  sötpotatis: {
    category: "Rotsaker",
    season: [],
    generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  valnöt: { category: "Nötter", season: [] },
  vindruvor: { category: "Frukt", season: [] },
  hummer: {
    category: "Skaldjur",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { september: "weak" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  pumpa: {
    category: "Pumpor",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "weak" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  kastanj: { category: "Nötter", season: [{ oktober: "medium" }] },
  krusbär: { category: "Bär", season: [{ juli: "medium" }, { augusti: "weak" }] },
  gös: {
    category: "Abborrfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { augusti: "medium" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  haverrot: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "weak" },
      { augusti: "weak" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  rödkål: {
    category: "Kål",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "medium" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  äpple: {
    category: "Frukt",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "med skal", footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  savojkål: {
    category: "Kål",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  blomkål: {
    category: "Kål",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "medium" }
    ]
  },
  kålrabbi: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "weak" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  "dansk sparrispotatis": {
    category: "Potatis",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "medium" },
      { augusti: "medium" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  sik: {
    category: "Laxfiskar",
    season: [
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" }
    ]
  },

  jordärtskocka: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  ostron: {
    category: "Musslor",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "medium" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "31 % fett", footprint: "9", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  vinterpotatis: {
    category: "Potatis",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "weak" },
      { september: "weak" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  pärllök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  vitbeta: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  mandelpotatis: {
    category: "Potatis",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { augusti: "medium" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  "röd steklök": {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  salladskål: {
    category: "Kål",
    season: [
      { januari: "strong" },
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  silverlök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { juni: "weak" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  schalottenlök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  vitkål: {
    category: "Kål",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  kålrot: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  vildsvin: {
    category: "Vilt",
    season: [
      { januari: "strong" },
      { februari: "medium" },
      { april: "medium" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  purjolök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "weak" },
      { april: "medium" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  lindblommor: { category: "Vilda växter", season: [{ juni: "medium" }, { juli: "medium" }] },
  "gul lök": {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "med skal", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  rödlök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  vitlök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "weak" },
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  blåmusslor: {
    category: "Musslor",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: {
      norge: { description: "Odlade, utan skal", footprint: "1,5", räknebas: "Per kg filé. Odlade. (kg CO2-ekv./kg)" }
    }
  },
  groddar: {
    category: "Grönsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  havskräfta: {
    category: "Skaldjur",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  lax: {
    category: "Laxfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { norge: { footprint: "2,3", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
  },
  morot: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  palsternacka: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  pilgrimsmusslor: {
    category: "Musslor",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  potatis: {
    category: "Potatis",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  potatislök: {
    category: "Lökar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  rotselleri: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  rödbeta: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  röding: {
    category: "Laxfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  sej: {
    category: "Torskfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { norge: { footprint: "2,4", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
  },
  sill: {
    category: "Sillfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { norge: { footprint: "0,6", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
  },
  sjötunga: {
    category: "Plattfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  smörgåskrasse: {
    category: "Kryddväxter",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  torsk: {
    category: "Torskfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  ägg: {
    category: "Ägg",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { footprint: "1,4", räknebas: "Per kg ägg med skal. (kg CO2-ekv./kg)" } }
  },
  "åttaarmad bläckfisk": {
    category: "Bläckfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  krondill: { category: "Kryddväxter", season: [{ augusti: "medium" }, { september: "medium" }] },
  blåbär: { category: "Bär", season: [{ juli: "weak" }, { augusti: "medium" }] },
  skärbönor: { category: "Bönor", season: [{ juli: "medium" }, { augusti: "weak" }] },
  aubergine: { category: "Grönsaker", season: [{ augusti: "weak" }, { september: "strong" }] },
  paprika: { category: "Grönsaker", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "weak" }] },
  bigarråer: { category: "Bär", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "weak" }] },
  trattkantareller: { category: "Svamp", season: [{ september: "medium" }, { oktober: "medium" }] },
  "färsk vitlök": { category: "Lökar", season: [{ maj: "weak" }, { juni: "strong" }, { juli: "weak" }] },
  lingon: { category: "Bär", season: [{ augusti: "medium" }, { september: "medium" }] },
  rönnbär: { category: "Bär", season: [{ september: "medium" }, { oktober: "strong" }, { november: "weak" }] },
  bärhäggmispel: { category: "Bär", season: [{ juli: "medium" }, { augusti: "medium" }] },
  krikon: { category: "Bär", season: [{ augusti: "medium" }, { september: "medium" }] },
  kvitten: { category: "Frukt", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "weak" }] },
  "svart mullbär": { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }] },
  krusvinbär: { category: "Bär", season: [{ juli: "medium" }, { augusti: "medium" }] },
  fläderblom: { category: "Kryddväxter", season: [{ juni: "strong" }, { juli: "medium" }] },
  aroniabär: { category: "Bär", season: [{ september: "weak" }, { oktober: "strong" }, { november: "medium" }] },
  sockerärt: {
    category: "Grönsaker",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "weak" }],
    generell: { sverige: { footprint: "0,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  blåhallon: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "weak" }] },
  krabbtaska: { category: "Skaldjur", season: [{ september: "medium" }, { oktober: "strong" }, { november: "weak" }] },
  hasselnöt: { category: "Nötter", season: [{ september: "strong" }, { oktober: "strong" }] },
  plommon: { category: "Frukt", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "medium" }] },
  daggkål: { category: "Grönsaker", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "medium" }] },
  harsyra: { category: "Vilda växter", season: [{ april: "weak" }, { maj: "strong" }, { juni: "medium" }] },
  havtorn: { category: "Bär", season: [{ september: "medium" }, { oktober: "strong" }, { november: "weak" }] },
  löktrav: { category: "Vilda växter", season: [{ april: "weak" }, { maj: "strong" }, { juni: "medium" }] },
  mangold: { category: "Bladgrönsaker", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "medium" }] },
  tryffel: { category: "Svamp", season: [{ oktober: "medium" }, { november: "strong" }, { december: "medium" }] },
  vildapel: { category: "Frukt", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "medium" }] },
  åkerbär: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "weak" }] },
  hallon: { category: "Bär", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "weak" }] },
  hjortron: { category: "Bär", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
  murklor: { category: "Svamp", season: [{ april: "weak" }, { maj: "strong" }, { juni: "medium" }] },
  nektarin: { category: "Frukt", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
  persikor: { category: "Frukt", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
  surkörsbär: { category: "Bär", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
  gurka: { category: "Grönsaker", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "weak" }] },
  björnbär: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "medium" }] },
  rosenkvitten: { category: "Frukt", season: [{ augusti: "strong" }, { september: "strong" }, { oktober: "weak" }] },
  smultron: { category: "Bär", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "weak" }] },
  jordgubbar: {
    category: "Bär",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "weak" }],
    generell: { sverige: { footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  sparris: {
    category: "Grönsaker",
    season: [{ april: "weak" }, { maj: "strong" }, { juni: "strong" }],
    generell: { thailand: { description: "jasmin, okokt", footprint: "3,0", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  chili: { category: "Kryddväxter", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "medium" }] },
  habanero: { category: "Kryddväxter", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "medium" }] },
  jalapeño: { category: "Grönsaker", season: [{ juli: "medium" }, { augusti: "strong" }, { september: "medium" }] },
  märgärt: { category: "Bönor", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "medium" }] },
  tranbär: { category: "Bär", season: [{ oktober: "strong" }, { november: "strong" }, { december: "weak" }] },
  bocktörne: { category: "Bär", season: [{ augusti: "medium" }, { september: "strong" }, { oktober: "medium" }] },
  fläderbär: { category: "Bär", season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "strong" }] },
  rödbetsblad: { category: "Bladgrönsaker", season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "medium" }] },
  bondbönor: { category: "Bönor", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }] },
  "röda vinbär": {
    category: "Bär",
    season: [{ juni: "weak" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  åkerbönor: { category: "Bönor", season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }] },
  sommargyllen: { category: "Vilda växter", season: [{ april: "strong" }, { maj: "strong" }, { juni: "medium" }] },
  "färsk gul lök": {
    category: "Lökar",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }],
    generell: { sverige: { description: "med skal", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  komatsuna: { category: "Bladgrönsaker", season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }] },
  "pak choi": {
    category: "Kål",
    season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "weak" }]
  },
  kirskål: { category: "Vilda växter", season: [{ april: "strong" }, { maj: "strong" }, { juni: "medium" }] },
  slånbär: { category: "Bär", season: [{ oktober: "strong" }, { november: "strong" }, { december: "medium" }] },
  fänkål: { category: "Grönsaker", season: [{ juli: "strong" }, { augusti: "strong" }, { september: "medium" }] },
  körsbärsplommon: {
    category: "Frukt",
    season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  mejram: { category: "Kryddväxter", season: [{ juli: "strong" }, { augusti: "strong" }, { september: "medium" }] },
  ramslök: { category: "Lökar", season: [{ april: "medium" }, { maj: "strong" }, { juni: "strong" }] },
  järpe: {
    category: "Fågel",
    season: [{ augusti: "weak" }, { september: "strong" }, { oktober: "strong" }, { november: "medium" }]
  },
  karljohanssvamp: {
    category: "Svamp",
    season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "weak" }]
  },
  timjan: {
    category: "Kryddväxter",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "medium" }]
  },
  portlak: {
    category: "Bladgrönsaker",
    season: [{ juni: "weak" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  lake: {
    category: "Lakefiskar",
    season: [{ januari: "strong" }, { februari: "strong" }, { mars: "medium" }, { december: "strong" }]
  },
  berberisbär: {
    category: "Bär",
    season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  bifftomat: {
    category: "Grönsaker",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }],
    generell: {
      sverige: {
        description: "växthus uppvärmt med hög andel förnybar energi",
        footprint: "0,2",
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  majs: {
    category: "Grönsaker",
    season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  tomat: {
    category: "Grönsaker",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }],
    generell: {
      sverige: {
        description: "växthus uppvärmt med hög andel förnybar energi",
        footprint: "0,2",
        räknebas: "Per kg. (kg CO2-ekv./kg)"
      }
    }
  },
  nässlor: { category: "Vilda växter", season: [{ april: "strong" }, { maj: "strong" }, { juni: "strong" }] },
  braxen: { category: "Karpfiskar", season: [{ september: "strong" }, { oktober: "strong" }, { november: "strong" }] },
  bataviasallat: {
    category: "Sallat",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  champinjon: {
    category: "Svamp",
    season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  huvudsallat: {
    category: "Sallat",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  luftlök: {
    category: "Lökar",
    season: [{ juli: "strong" }, { augusti: "strong" }, { september: "strong" }, { oktober: "weak" }]
  },
  mizuna: {
    category: "Bladgrönsaker",
    season: [{ juni: "weak" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  plocksallat: {
    category: "Sallat",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  tatsoi: {
    category: "Bladgrönsaker",
    season: [{ juli: "weak" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  gurkört: {
    category: "Grönsaker",
    season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  basilika: {
    category: "Kryddväxter",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  kantareller: {
    category: "Svamp",
    season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  citronmeliss: {
    category: "Kryddväxter",
    season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  "haricots verts": {
    category: "Bönor",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  nypon: {
    category: "Bär",
    season: [
      { augusti: "weak" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "weak" }
    ]
  },
  piplök: {
    category: "Lökar",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
  },
  päron: {
    category: "Frukt",
    season: [
      { augusti: "weak" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "weak" }
    ]
  },
  sallat: {
    category: "Sallat",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
  },
  sareptasenap: {
    category: "Kål",
    season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  sockerrot: {
    category: "Rotsaker",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }],
    generell: { sverige: { footprint: "0,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  sparrissallat: {
    category: "Sallat",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  spenat: {
    category: "Bladgrönsaker",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }],
    generell: { sverige: { description: "färsk", footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  endive: {
    category: "Sallat",
    season: [
      { januari: "strong" },
      { februari: "weak" },
      { oktober: "weak" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  kungskrabba: {
    category: "Skaldjur",
    season: [{ september: "medium" }, { oktober: "strong" }, { november: "strong" }, { december: "medium" }]
  },
  salvia: {
    category: "Kryddväxter",
    season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  kalixlöjrom: {
    category: "Fisk och skaldjur",
    season: [{ september: "medium" }, { oktober: "strong" }, { november: "strong" }, { december: "strong" }]
  },
  lamm: {
    category: "Kött",
    season: [{ september: "medium" }, { oktober: "strong" }, { november: "strong" }, { december: "strong" }],
    generell: { sverige: { footprint: 21, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" } }
  },
  skarpsill: {
    category: "Sillfiskar",
    season: [
      { januari: "strong" },
      { februari: "weak" },
      { oktober: "medium" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { norge: { footprint: "0,6", räknebas: "Per kg filé. (kg CO2-ekv./kg)" } }
  },
  frisésallat: {
    category: "Sallat",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "weak" }
    ]
  },
  kronärtskocka: {
    category: "Grönsaker",
    season: [{ juli: "medium" }, { augusti: "strong" }, { september: "strong" }, { oktober: "medium" }]
  },
  "svarta vinbär": {
    category: "Bär",
    season: [{ juni: "medium" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  sydcikoria: {
    category: "Sallat",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "weak" }
    ]
  },
  machésallat: {
    category: "Frukt och grönsaker",
    season: [
      { juli: "medium" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "weak" }
    ]
  },
  ängssyra: {
    category: "Bladgrönsaker",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "weak" }]
  },
  körvel: {
    category: "Kryddväxter",
    season: [{ maj: "medium" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
  },
  romansallat: {
    category: "Sallat",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  mynta: {
    category: "Kryddväxter",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  rucola: {
    category: "Sallat",
    season: [{ juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "strong" }]
  },
  brytbönor: {
    category: "Bönor",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  druvgurka: {
    category: "Grönsaker",
    season: [{ juli: "strong" }, { augusti: "strong" }, { september: "strong" }, { oktober: "strong" }]
  },
  isbergssallat: {
    category: "Sallat",
    season: [
      { juni: "weak" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  rosmarin: {
    category: "Kryddväxter",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "weak" }
    ]
  },
  vaxbönor: {
    category: "Bönor",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  svartkål: {
    category: "Kål",
    season: [
      { januari: "medium" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  ekbladssallat: {
    category: "Sallat",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  maskrosblad: {
    category: "Vilda växter",
    season: [{ mars: "weak" }, { april: "strong" }, { maj: "strong" }, { juni: "strong" }, { juli: "medium" }]
  },
  rosésallat: {
    category: "Sallat",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  selleri: {
    category: "Grönsaker",
    season: [
      { juli: "weak" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "medium" }
    ]
  },
  vattenkrasse: {
    category: "Bladgrönsaker",
    season: [{ maj: "weak" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "medium" }]
  },
  svedjerova: {
    category: "Rovor",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "weak" },
      { oktober: "medium" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  dill: {
    category: "Kryddväxter",
    season: [
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "weak" }
    ]
  },
  dragon: {
    category: "Kryddväxter",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  and: {
    category: "Fågel",
    season: [
      { augusti: "weak" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  salladslök: {
    category: "Lökar",
    season: [{ april: "weak" }, { maj: "strong" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }]
  },
  grönkål: {
    category: "Kål",
    season: [
      { januari: "strong" },
      { februari: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  siklöja: {
    category: "Laxfiskar",
    season: [
      { mars: "strong" },
      { april: "strong" },
      { maj: "medium" },
      { oktober: "medium" },
      { november: "strong" },
      { december: "medium" }
    ]
  },
  gulbeta: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  färskpotatis: {
    category: "Potatis",
    season: [{ maj: "medium" }, { juni: "strong" }, { juli: "strong" }, { augusti: "strong" }, { september: "strong" }],
    generell: { sverige: { description: "oskalad", footprint: "0,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  oregano: {
    category: "Kryddväxter",
    season: [
      { maj: "weak" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "weak" }
    ]
  },
  rädisor: {
    category: "Rotsaker",
    season: [
      { april: "weak" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "weak" }
    ]
  },
  älg: {
    category: "Vilt",
    season: [
      { januari: "strong" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  ren: {
    category: "Kött",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "medium" },
      { november: "medium" },
      { december: "strong" }
    ]
  },
  flundra: {
    category: "Plattfiskar",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "weak" }
    ]
  },
  koriander: {
    category: "Kryddväxter",
    season: [
      { april: "medium" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "medium" }
    ]
  },
  rabarber: {
    category: "Frukt",
    season: [
      { april: "weak" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "medium" }
    ]
  },
  butternut: {
    category: "Pumpor",
    season: [
      { januari: "strong" },
      { februari: "medium" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  "svarta vinbärsblad": {
    category: "Kryddväxter",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  granatäpple: {
    category: "Frukt",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "weak" },
      { september: "weak" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "med skal", footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  brysselkål: {
    category: "Kål",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "weak" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  libbsticka: {
    category: "Kryddväxter",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  kolja: {
    category: "Torskfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "weak" },
      { oktober: "medium" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  hare: {
    category: "Vilt",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  broccoli: {
    category: "Kål",
    season: [
      { juni: "medium" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "medium" }
    ]
  },
  squash: {
    category: "Grönsaker",
    season: [
      { maj: "weak" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "weak" }
    ]
  },
  romanesco: {
    category: "Kål",
    season: [
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "medium" }
    ]
  },
  spagettipumpa: {
    category: "Pumpor",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "medium" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { sverige: { description: "okokt", footprint: "0,8", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  "tioarmad bläckfisk": {
    category: "Bläckfiskar",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "medium" },
      { oktober: "medium" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  makrill: {
    category: "Makrillfiskar",
    season: [
      { april: "weak" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "medium" }
    ]
  },
  hälleflundra: {
    category: "Plattfiskar",
    season: [
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" }
    ]
  },
  "vild lax": {
    category: "Laxfiskar",
    season: [
      { april: "strong" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" }
    ]
  },
  majrova: {
    category: "Rovor",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "weak" }
    ]
  },
  persilja: {
    category: "Bladgrönsaker",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "weak" }
    ]
  },
  rådjur: {
    category: "Vilt",
    season: [
      { januari: "strong" },
      { maj: "strong" },
      { juni: "medium" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  persiljerot: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "medium" },
      { september: "medium" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  räkor: {
    category: "Skaldjur",
    season: [
      { januari: "strong" },
      { februari: "strong" },
      { mars: "strong" },
      { april: "strong" },
      { maj: "medium" },
      { oktober: "medium" },
      { november: "strong" },
      { december: "strong" }
    ],
    generell: { grönland: { description: "Utan skal", footprint: "7", räknebas: "Per kg. (kg CO2-ekv./kg)" } }
  },
  gräslök: {
    category: "Kryddväxter",
    season: [
      { april: "weak" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" }
    ]
  },
  "kinesisk gräslök": {
    category: "Lökar",
    season: [
      { april: "weak" },
      { maj: "strong" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" }
    ]
  },
  spetskål: {
    category: "Kål",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "medium" }
    ]
  },
  rödspätta: {
    category: "Plattfiskar",
    season: [
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "medium" }
    ]
  },
  rättika: {
    category: "Rotsaker",
    season: [
      { januari: "strong" },
      { februari: "medium" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "strong" },
      { december: "strong" }
    ]
  },
  pepparrot: {
    category: "Rotsaker",
    season: [
      { maj: "medium" },
      { juni: "strong" },
      { juli: "strong" },
      { augusti: "strong" },
      { september: "strong" },
      { oktober: "strong" },
      { november: "medium" }
    ]
  },
  nötkött: {
    generell: {
      sverige: { footprint: 27, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" },
      brasilien: { footprint: 41, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" }
    },
    category: "protein"
  },
  fläsk: {
    generell: { sverige: { footprint: 21, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" } },
    category: "protein"
  },
  kyckling: {
    generell: { sverige: { footprint: "2,4", räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" } },
    category: "protein"
  },
  köttfärs: {
    generell: {
      sverige: { description: "50% nöt, 50% fläsk", footprint: 21, räknebas: "Per kg benfritt kött. (kg CO2-ekv./kg)" }
    },
    category: "protein"
  },
  "bruna bönor": {
    generell: { sverige: { description: "Torkade", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "protein"
  },
  kikärter: {
    generell: { kanada: { description: "Torkade", footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "protein"
  },
  linser: {
    generell: { kanada: { description: "Torkade", footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "protein"
  },
  quorn: {
    generell: { storbritannien: { footprint: "1,7", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "protein"
  },
  spagetti: {
    generell: { sverige: { description: "okokt", footprint: "0,8", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "kolhydrat"
  },
  matvete: {
    generell: { sverige: { description: "okokt", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "kolhydrat"
  },
  ris: {
    generell: { thailand: { description: "jasmin, okokt", footprint: "3,0", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "kolhydrat"
  },
  "mjukt bröd": {
    generell: { sverige: { description: "vete", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "kolhydrat"
  },
  rågknäckebröd: {
    generell: { sverige: { footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "kolhydrat"
  },
  mellanmjölk: {
    generell: { sverige: { footprint: "0,9", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "mejeri"
  },
  "creme fraiche": {
    generell: { sverige: { description: "lätt, 17% fett", footprint: "2,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "mejeri"
  },
  grädde: {
    generell: { sverige: { description: "40% fett", footprint: "5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "mejeri"
  },
  smör: { generell: { sverige: { footprint: "7", räknebas: "Per kg. (kg CO2-ekv./kg)" } }, category: "mejeri" },
  ost: {
    generell: { sverige: { description: "31 % fett", footprint: "9", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "mejeri"
  },
  apelsin: {
    generell: {
      sydeurope: { description: "genomsnitt, med skal", footprint: "0,4", räknebas: "Per kg. (kg CO2-ekv./kg)" }
    },
    category: "frukt och grönt"
  },
  banan: {
    generell: { "costa rica": { description: "med skal", footprint: "0,5", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "frukt och grönt"
  },
  "gröna ärtor": {
    generell: { sverige: { footprint: "0,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "frukt och grönt"
  },
  isbergssallad: { generell: { sverige: { footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } } },
  vetemjöl: {
    generell: { sverige: { footprint: "0,4", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "övriga vegetabiliska livsmedel"
  },
  socker: {
    generell: { sverige: { footprint: "0,6", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "övriga vegetabiliska livsmedel"
  },
  bordsmargarin: {
    generell: { sverige: { description: "40% fett", footprint: "1,1", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "övriga vegetabiliska livsmedel"
  },
  sötmandel: {
    generell: { usa: { description: "utan skal", footprint: "2,3", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "övriga vegetabiliska livsmedel"
  },
  rapsolja: {
    generell: { sverige: { footprint: "1,4", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "övriga vegetabiliska livsmedel"
  },
  chocklad: {
    generell: { "Sverige/Ghana": { description: "mörk", footprint: "0,8", räknebas: "Per kg. (kg CO2-ekv./kg)" } },
    category: "övriga vegetabiliska livsmedel"
  },
  bryggkaffe: {
    generell: { "Brasilien/Sverige": { footprint: "2,3", räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)" } },
    category: "dryck"
  },
  apelsinjuice: {
    generell: { "Brasilien/Sverige": { footprint: "0,6", räknebas: "Per liter juice. (kg CO2-ekv./kg)" } },
    category: "dryck"
  },
  läsk: {
    generell: { sverige: { footprint: "0,1", räknebas: "Per liter läsk. (kg CO2-ekv./kg)" } },
    category: "dryck"
  },
  öl: {
    generell: {
      "europa genomsnitt": {
        description: "flera länder",
        footprint: "0,7",
        räknebas: "Per liter bryggt kaffe. (kg CO2-ekv./kg)"
      }
    },
    category: "dryck"
  },
  sallad: { generell: { sverige: { footprint: "0,2", räknebas: "Per kg. (kg CO2-ekv./kg)" } } }
};
module.exports = {
    merged,
    orignal
}