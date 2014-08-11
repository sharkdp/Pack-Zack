var dbTags = [
  {
    "name": "Kleider",
    "icon": "laundry",
    "color": "success",
    "items": [
      "Jacke",
      "Lange Hosen",
      "Pullis",
      "T-Shirts",
      "Socken",
      "Shorts",
      "? Hausschuhe",
      "? Funktionsshirts / Sportkleidung",
      "? Turnschuhe",
      "? Jogginghose",
      "? Regenjacke",
      "? Hemd, Anzug, Jacket, Krawatte"
    ]
  },
  {
    "name": "Sommer",
    "icon": "diving",
    "color": "success",
    "items": [
      "Kurze Hosen",
      "Flip-Flops",
      "Sonnenbrille",
      "Badehose",
      "? Sport-Hosen"
    ],
    "parents": ["Kleider"]
  },
  {
    "name": "Winter",
    "icon": "snow",
    "color": "success",
    "items": [
      "Winterschuhe",
      "Handschuhe",
      "Mütze",
      "Schal",
      "Sonnenbrille",
      "? Badehose"
    ],
    "parents": ["Kleider"]
  },
  {
    "name": "Hygiene",
    "icon": "beauty-salon",
    "color": "info",
    "items": [
      "Duschgel, Shampoo",
      "Zahnbürste",
      "Zahnpasta",
      "Rasierer + Kabel",
      "Deo",
      "Haargel",
      "Taschentücher",
      "? Handtuch",
      "? Kopfschmerztabletten",
      "? Creme / Labello",
      "? Sonnencreme",
      "? Kontaktlinsen + Behälter + Flüssigkeit",
      "? Brillenetui",
      "? Nagelschere/-zwicker",
      "? Rasierschaum",
      "? Wattestäbchen",
      "? Ohropax",
      "? Blasenpflaster",
      "? Desinfektionsmittel",
    ]
  },
  {
    "name": "Sonstiges",
    "icon": "travel-agency",
    "items": [
      "Geldbeutel (Geld, Ausweis, VISA, KV-Karte)",
      "Handy",
      "Dokumente (Flug, Bahn, Hotel)",
      "Kopfhörer",
      "Musik",
      "Foto",
      "Bücher, Kindle",
      "Ladegeräte (Handy, Foto, Akku)",
      "Akkus, Batterien",
      "Stifte + Papier",
      "? Reisepass",
      "? Zusätzlicher Rucksack",
      "? Mehrfachsteckdose",
      "? Kabel (USB, HDMI, LAN)",
      "? Adapter Ausland",
      "? Reiseführer",
      "? Regenschirm"
    ]
  },
  {
    "name": "Spiele",
    "icon": "casino",
    "items": [
      "Spielkarten",
      "Brettspiele",
      "Backgammon",
      "? Frisbee",
      "? Fußball, Volleyball, ..",
      "? Kite"
    ]
  },
  {
    "name": "Lebensmittel",
    "icon": "food",
    "items": [
      "Kartoffeln",
      "Reis",
      "Zwiebeln",
      "Salz",
      "Pfeffer",
      "Öl/Essig",
      "Gewürze",
      "Knoblauch",
      "Gemüsebrühe",
      "Kaffee / Espresso",
      "Schnapps",
    ]
  },
  {
    "name": "Ferienwohnung",
    "icon": "roofing-contractor",
    "items": [
      "Tupperschüsseln",
      "Küchenmesser",
      "Korkenzieher",
      "Putzlappen",
      "Klopapier",
      "Spülmittel",
      "Geschirrtücher",
      "Lappen",
      "Teekanne + Sieb",
    ],
    "parents": ["Lebensmittel"]
  },
  {
    "name": "Fotozubehör",
    "icon": "point-of-interest",
    "items": [
      "Ladegerät",
      "Stativ",
      "SD-Karten",
      "Fototasche",
      "Reinigungsutensilien",
    ],
  },
  {
    "name": "Outdoor",
    "icon": "pet-store",
    "color": "danger",
    "items": [
      "GPS + Halter + Ersatzakkus",
      "Karten und Tracks für GPS",
      "Geocaches und POI",
      "? Taschenmesser",
      "? Taschenlampe"
    ]
  },
  {
    "name": "Fahrrad",
    "icon": "bicycling",
    "color": "danger",
    "items": [
      "Helm",
      "Schloss",
      "Fahrrad-Hosen",
      "Fahrrad-Trikots",
      "Fahrrad-Jacke / Regenjacke",
      "Fahrrad-Handschuhe",
      "Fahrrad-Schuhe (+andere?)",
      "Trinkflasche",
      "? ÖPNV Ausweis"
    ],
    "parents": ["Outdoor"]
  },
  {
    "name": "Fahrrad+",
    "icon": "bicycling",
    "color": "danger",
    "items": [
      "Licht",
      "Sattel-Tasche",
      "Werkzeug",
      "Flickzeug",
      "Ersatz-Schlauch",
      "Schutzbleche",
      "Luftpumpe",
      "Kettenöl",
      "Regenschutz (Hose, Schuhe)",
      "Einweghandschuhe"
    ],
    "parents": ["Fahrrad"]
  },
  {
    "name": "Wandern",
    "icon": "trail-walking",
    "color": "danger",
    "items": [
      "Wanderstöcke",
      "Wanderschuhe",
      "Wanderhose",
      "Kappe / Mütze",
      "Flachmann"
    ],
    "parents": ["Outdoor"]
  },
  {
    "name": "Mehrtagestour",
    "icon": "location-arrow",
    "color": "danger",
    "items": [
      "(Hütten-)Schlafsack",
      "Packsäcke / Tüten",
      "? Waschgel"
    ],
    "parents": ["Outdoor"]
  },
  {
    "name": "Camping",
    "icon": "campground",
    "color": "danger",
    "items": [
      "Zelt",
      "Isomatte",
      "Schlafsack",
      "Campingstuhl",
      "? Mülltüten",
      "? Panzertape",
      "? Dosen-/ Flaschenöffner",
      "? Werkzeug",
      "? Geschirrtücher",
      "? Campingkocher",
      "? Geschirr + Besteck"
    ]
  },
  {
    "name": "Sport",
    "icon": "tennis",
    "color": "warning",
    "items": [
      "Sportkleidung",
      "Trinken",
      "Handy + Geld",
      "? Essen (Müsli-Riegel, Obst, ..)",
      "? Duschen: Handtuch, Duschgel, frische Sachen",
      "? Kontaktlinsen / alte Brille",
      "? Mitgliedskarte etc.",
      "? Taschentücher",
      "? Kopfschmerztablette",
    ]
  },
  {
    "name": "Urlaub",
    "parents": ["Kleider", "Hygiene", "Sonstiges"],
    "list": true
  },
  {
    "name": "Sommerurlaub",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Spiele"],
    "list": true
  },
  {
    "name": "Skiurlaub",
    "color": "danger",
    "icon": "skiing",
    "items": [
      "Skihose",
      "Skisocken",
      "Skistöcke",
      "Helm",
      "Ski",
      "Ski-Handschuhe",
      "Ski-Brille"
    ],
    "parents": ["Winter", "Hygiene", "Sonstiges", "Outdoor"],
    "list": true
  },
  {
    "name": "Fahrradurlaub",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Fahrrad+"],
    "list": true
  },
  {
    "name": "Wanderurlaub",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Wandern", "Mehrtagestour"],
    "list": true
  },
  {
    "name": "Festival",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Camping"],
    "list": true
  },
  {
    "name": "Konferenz",
    "icon": "school",
    "parents": ["Sommer", "Hygiene", "Sonstiges"],
    "items": [
      "Poster / Vortrag",
      "Konferenz-Dokumente",
      "Laptop (Headset, Maus)",
      "Tablet + Ladegerät"
    ],
    "list": true
  },
  {
    "name": "Fahrradtour",
    "parents": ["Sport", "Fahrrad"],
    "list": true
  },
  {
    "name": "Geocaching",
    "icon": "compass",
    "color": "danger",
    "items": [
      "Cachebeschreibungen auf Garmin / c:geo",
      "Stifte + Papier",
      "Handy",
      "Plastiktüten / Beutel",
      "? Foto",
      "? Kurzes Seil + Karabiner + Bandschlinge",
      "? Handschuhe",
      "? Fernglas",
      "? Draht / Kabelbinder",
      "? Regenjacke",
      "? Magnet",
      "? Laserpointer"
    ],
    "parents": ["Sport", "Outdoor"],
    "list": true
  },
  {
    "name": "Squash",
    "icon": "tennis",
    "color": "warning",
    "items": [
        "Hallenschuhe",
        "Schläger",
    ],
    "parents": ["Sport"],
    "list": true
  },
  {
    "name": "Klettern",
    "icon": "climbing",
    "color": "warning",
    "items": [
        "Kletterschuhe",
        "Klettergurt",
        "Karabiner",
        "Seil",
        "Flip-Flops"
    ],
    "parents": ["Sport"],
    "list": true
  }
];
