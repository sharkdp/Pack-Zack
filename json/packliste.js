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
            "Unterwäsche",
            "? Hausschuhe",
            "? Turnschuhe",
            "? Sonstige Schuhe",
            "? Sportkleidung, Funktionsshirts",
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
            "? Sporthosen",
            "? Strand- / Badetuch",
            "? Schwimmbrille"
        ],
        "parents": [
            "Kleider"
        ]
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
        "parents": [
            "Kleider"
        ]
    },
    {
        "name": "Hygiene",
        "icon": "beauty-salon",
        "color": "info",
        "items": [
            "Duschgel, Shampoo",
            "Zahnbürste",
            "Zahnpasta",
            "Rasierer, Kabel",
            "Deo",
            "Haargel",
            "Taschentücher",
            "? Handtuch",
            "? Kopfschmerztabletten, Medikamente",
            "? Creme, Labello",
            "? Sonnencreme",
            "? Kontaktlinsen, Behälter, Flüssigkeit",
            "? Brillenetui",
            "? Nagelschere/-zwicker",
            "? Rasierschaum",
            "? Wattestäbchen",
            "? Ohropax",
            "? Desinfektionsmittel",
            "? Plastikbeutel für Flug"
        ]
    },
    {
        "name": "Sonstiges",
        "icon": "travel-agency",
        "items": [
            "Geldbeutel (Geld, Ausweis, EC, VISA, KV-Karte)",
            "Handy",
            "Dokumente (Flug, Bahn, Hotel)",
            "Kopfhörer",
            "Musik",
            "Foto",
            "Bücher, Kindle",
            "Ladegeräte (Handy, Foto, Akku)",
            "Akkus, Batterien",
            "Stifte, Papier",
            "? Reisepass",
            "? Zusätzlicher Rucksack",
            "? Laptop (Ladegerät, Headset, Maus)",
            "? Kabel (Audio, USB, HDMI, LAN)",
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
            "? Fußball, Volleyball",
            "? Kite"
        ]
    },
    {
        "name": "Lebensmittel",
        "icon": "food",
        "items": [
            "Nudeln",
            "Kartoffeln",
            "Reis",
            "Mehl",
            "Zwiebeln",
            "Salz",
            "Pfeffer",
            "Sonstige Gewürze",
            "Öl, Essig",
            "Milch",
            "Eier",
            "Käse",
            "Wurst",
            "Marmelade, Nutella",
            "Gemüsebrühe",
            "Schokolade, Kekse",
            "Kaffee, Tee",
            "Getränke (Wasser, Saft, Bier)",
            "Schnapps"
        ]
    },
    {
        "name": "Ferienwohnung",
        "icon": "roofing-contractor",
        "items": [
            "Bettwäsche",
            "Boxen, Audiokabel",
            "Mehrfachsteckdose, Verlängerungskabel",
            "Kaffeemaschine, Filter",
            "Teekanne, Sieb",
            "Flaschenöffner, Korkenzieher",
            "Spülmittel",
            "Putzlappen",
            "Geschirrtücher",
            "Klopapier",
            "Küchenmesser",
            "Tupperschüsseln"
        ],
        "parents": [
            "Lebensmittel"
        ]
    },
    {
        "name": "Fotozubehör",
        "icon": "point-of-interest",
        "items": [
            "Ladegerät",
            "Stativ",
            "SD-Karten",
            "Fototasche",
            "Reinigungsutensilien"
        ]
    },
    {
        "name": "Outdoor",
        "icon": "pet-store",
        "color": "danger",
        "items": [
            "GPS, Halterung, Ersatzakkus",
            "Karten und Tracks für GPS",
            "? POIs und Geocaches",
            "? Taschenmesser",
            "? Taschenlampe",
            "? Erste Hilfe Set"
        ]
    },
    {
        "name": "Fahrrad",
        "icon": "bicycling",
        "color": "danger",
        "items": [
            "Helm",
            "Radhosen",
            "Trikots",
            "Fahrradhandschuhe (kurz und lang)",
            "Radschuhe (+ andere?)",
            "Trinkflasche",
            "? Regenjacke, Fahrradjacke",
            "? Schloss",
            "? ÖPNV Ausweis",
            "? Fahrradbrille"
        ],
        "parents": [
            "Outdoor"
        ]
    },
    {
        "name": "Fahrrad+",
        "icon": "bicycling",
        "color": "danger",
        "items": [
            "Licht",
            "Luftpumpe",
            "Flickset",
            "Ersatzschlauch",
            "Werkzeug (Multitool)",
            "Regenschutz (Hose, Schuhe)",
            "? Kettenöl",
            "? Satteltasche",
            "? Schutzbleche",
            "? Einweghandschuhe",
            "? Kabelbinder",
            "? Kettenschloss"
        ],
        "parents": [
            "Fahrrad"
        ]
    },
    {
        "name": "Wandern",
        "icon": "trail-walking",
        "color": "danger",
        "items": [
            "Wanderschuhe",
            "Wanderhose",
            "Wanderstöcke",
            "Mütze / Kappe / Tuch",
            "Wanderführer, Karte",
            "? Blasenpflaster",
            "? Trinkflasche",
            "? Flachmann"
        ],
        "parents": [
            "Outdoor"
        ]
    },
    {
        "name": "Geocaching",
        "icon": "compass",
        "color": "danger",
        "items": [
            "Cachebeschreibungen auf Garmin, Handy",
            "Stifte, Papier",
            "? Plastiktüten / Beutel",
            "? Foto",
            "? Kurzes Seil, Karabiner, Bandschlinge",
            "? Handschuhe",
            "? Fernglas",
            "? Draht, Kabelbinder",
            "? Regenjacke",
            "? Magnet",
            "? Laserpointer"
        ],
        "parents": [
            "Outdoor"
        ]
    },
    {
        "name": "Mehrtagestour",
        "icon": "location-arrow",
        "color": "danger",
        "items": [
            "(Hütten-)Schlafsack",
            "Packsäcke / Beutel / Tüten",
            "? Regenschutz Rucksack",
            "? Waschgel"
        ],
        "parents": [
            "Outdoor"
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
            "Campingstuhl",
            "? Mülltüten",
            "? Panzertape",
            "? Dosen-/ Flaschenöffner",
            "? Werkzeug",
            "? Geschirrtücher",
            "? Campingkocher",
            "? Geschirr, Besteck",
            "? Grill, Kohle, Feuerzeug"
        ]
    },
    {
        "name": "Sport",
        "icon": "tennis",
        "color": "warning",
        "items": [
            "Sportkleidung",
            "Trinken",
            "Handy, Schlüssel, Geld",
            "? Essen (Müsliriegel, Obst, ..)",
            "? Duschen: Handtuch, Duschgel, frische Sachen",
            "? Kontaktlinsen, alte Brille",
            "? Mitgliedskarte",
            "? Taschentücher",
            "? Kopfschmerztablette"
        ]
    },
    {
        "name": "Urlaub",
        "parents": [
            "Kleider",
            "Hygiene",
            "Sonstiges"
        ],
        "list": true
    },
    {
        "name": "Sommerurlaub",
        "parents": [
            "Sommer",
            "Hygiene",
            "Sonstiges",
            "Spiele"
        ],
        "list": true
    },
    {
        "name": "Skiurlaub",
        "color": "danger",
        "icon": "skiing",
        "items": [
            "Ski",
            "Skischuhe",
            "Skistöcke",
            "Skihose",
            "Skisocken",
            "Skihelm",
            "Skihandschuhe",
            "Skibrille"
        ],
        "parents": [
            "Winter",
            "Hygiene",
            "Sonstiges",
            "Outdoor"
        ],
        "list": true
    },
    {
        "name": "Fahrradurlaub",
        "parents": [
            "Sommer",
            "Hygiene",
            "Sonstiges",
            "Fahrrad+",
            "Mehrtagestour"
        ],
        "list": true
    },
    {
        "name": "Wanderurlaub",
        "parents": [
            "Sommer",
            "Hygiene",
            "Sonstiges",
            "Wandern",
            "Mehrtagestour"
        ],
        "list": true
    },
    {
        "name": "Festival",
        "parents": [
            "Sommer",
            "Hygiene",
            "Sonstiges",
            "Camping"
        ],
        "list": true
    },
    {
        "name": "Konferenz",
        "icon": "school",
        "parents": [
            "Sommer",
            "Hygiene",
            "Sonstiges"
        ],
        "items": [
            "Poster / Vortrag",
            "Dokumente Konferenz",
            "Tablet (Ladegerät)",
            "? Vortrag auf USB-Stick"
        ],
        "list": true
    },
    {
        "name": "Fahrradtour",
        "parents": [
            "Sport",
            "Fahrrad"
        ],
        "list": true
    },
    {
        "name": "Geocaching-Tour",
        "icon": "compass",
        "parents": [
            "Sport",
            "Geocaching"
        ],
        "list": true
    },
    {
        "name": "Squash",
        "icon": "tennis",
        "color": "warning",
        "items": [
            "Hallenschuhe",
            "Schläger"
        ],
        "parents": [
            "Sport"
        ],
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
        "parents": [
            "Sport"
        ],
        "list": true
    }
]
