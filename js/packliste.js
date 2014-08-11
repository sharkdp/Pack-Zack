var dbTags = [
  {
    "name": "Kleider",
    "icon": "laundry",
    "color": "success",
    "items": [
      "Lange Hosen",
      "Pullis",
      "T-Shirts",
      "Funktionsshirts / Sportkleidung",
      "Socken",
      "Shorts",
      "Hausschuhe",
      "Turnschuhe",
      "Jacke",
      "? Jogginghose",
      "? Regenjacke"
    ]
  },
  {
    "name": "Sommer",
    "icon": "diving",
    "color": "success",
    "items": [
      "Kurze Hosen",
      "Flip-Flops",
      "Sport-Hosen",
      "Sonnenbrille",
      "Badehose"
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
      "Handtuch",
      "Duschgel, Shampoo",
      "Zahnbürste",
      "Zahnpasta",
      "Rasierer + Kabel",
      "Creme",
      "Sonnencreme",
      "Deo",
      "Haargel",
      "Kopfschmerztabletten",
      "Kontaktlinsen",
      "Taschentücher",
      "Wattestäbchen",
      "? Ohropax"
    ]
  },
  {
    "name": "Sonstiges",
    "icon": "point-of-interest",
    "items": [
      "Geldbeutel (Geld, Ausweis, VISA, KV-Karte)",
      "Handy",
      "Dokumente (Flug, Bahn, Hotel)",
      "Musik",
      "Foto",
      "Bücher, Kindle",
      "Ladegeräte (Handy, Foto, Akku)",
      "Akkus, Batterien",
      "Stift, Papier",
      "? Reisepass",
      "? Zusätzlicher Rucksack",
      "? Reiseführer"
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
      "Werkzeug, Flickzeug",
      "Ersatz-Schlauch",
      "Schutzbleche",
      "Luftpumpe",
      "Regenschutz (Hose, Schuhe)"
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
      "Kappe / Mütze",
      "Flachmann"
    ],
    "parents": ["Outdoor"]
  },
  {
    "name": "Mehrtages-Tour",
    "icon": "location-arrow",
    "color": "danger",
    "items": [
      "Schlafsack",
      "Packsäcke / Tüten"
    ],
    "parents": ["Outdoor"]
  },
  {
    "name": "Sport",
    "icon": "tennis",
    "color": "warning",
    "items": [
      "Trinken",
      "Geld",
      "Entsprechende Bekleidung",
      "? Essen (Müsli-Riegel, Obst)",
      "? Kopfschmertablette",
      "? Taschentücher",
      "? Kontaktlinsen",
      "? Mitgliedskarte etc.",
      "? Duschen: Handtuch, Duschgel, frische Sachen"
    ]
  },
  {
    "name": "Camping",
    "icon": "campground",
    "color": "danger",
    "items": [
      "Zelt",
      "Isomatte",
      "Schlafsack",
      "Campingstuhl"
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
    "icon": "skiing",
    "items": [
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
    "parents": ["Sommerurlaub", "Fahrrad+"],
    "list": true
  },
  {
    "name": "Wanderurlaub",
    "parents": ["Sommerurlaub", "Wandern", "Mehrtages-Tour"],
    "list": true
  },
  {
    "name": "Festival",
    "parents": ["Sommerurlaub", "Camping"],
    "list": true
  },
  {
    "name": "Konferenz",
    "icon": "school",
    "parents": ["Sommer", "Hygiene", "Sonstiges"],
    "items": [
      "Poster / Vortrag",
      "Konferenz-Dokumente",
      "Laptop",
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
      "feste Schuhe",
      "Plastiktüten / Beutel",
      "? Kamera",
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
        "Kontaktlinsen / alte Brille",
        "? Schweißband"
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
