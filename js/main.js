/*jslint browser: true*/
/*global $*/
/*global _*/
/*global Mustache*/

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
      "Jogginghose",
      "Badehose",
      "Jacke",
      "Regenjacke"
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
      "Sonnenbrille"
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
      "Sonnenbrille"
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
      "Rasierer",
      "Creme",
      "Sonnencreme",
      "Deo",
      "Haargel",
      "Kopfschmerztabletten",
      "Kontaktlinsen",
      "Taschentücher",
      "Ohropax"
    ]
  },
  {
    "name": "Sonstiges",
    "icon": "point-of-interest",
    "items": [
      "Geldbeutel (Perso, VISA, Geld, KV-Karte)",
      "Handy",
      "Reisepass",
      "Dokumente (Flug, Bahn, Hotel)",
      "Musik",
      "Foto",
      "Bücher, Kindle",
      "Ladegeräte (Handy, Foto, Akku)",
      "Akkus, Batterien",
      "Stift, Papier",
      "Rucksack",
      "Reiseführer"
    ]
  },
  {
    "name": "Spiele",
    "icon": "casino",
    "items": [
      "Spielkarten",
      "Brettspiele",
      "Backgammon",
      "Frisbee",
      "Fußball, Volleyball, ..",
      "Drachen"
    ]
  },
  {
    "name": "Outdoor",
    "icon": "pet-store",
    "color": "danger",
    "items": [
      "GPS + Halter",
      "Karten und Tracks für GPS",
      "Geocaches und POI",
      "Taschenmesser",
      "Taschenlampe"
    ]
  },
  {
    "name": "Fahrrad",
    "icon": "bicycling",
    "color": "danger",
    "items": [
      "Fahrrad",
      "Helm",
      "Schloss",
      "Fahrrad-Hosen",
      "Fahrrad-Trikots",
      "Fahrrad-Jacke / Regenjacke",
      "Fahrrad-Handschuhe",
      "Fahrrad-Schuhe",
      "Trinkflasche",
      "Sattel-Tasche",
      "Reperatur-Set",
      "Ersatz-Schlauch",
      "Schutzbleche"
    ],
    "parents": ["Outdoor"]
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
    "name": "Allgemein",
    "parents": ["Kleider", "Hygiene", "Sonstiges"],
    "list": true
  },
  {
    "name": "Skifahren",
    "icon": "skiing",
    "color": "danger",
    "items": [
      "Skistöcke",
      "Helm",
      "Ski",
      "Ski-Handschuhe",
      "Ski-Brille"
    ],
    "parents": ["Winter", "Hygiene", "Sonstiges", "Spiele", "Outdoor"],
    "list": true
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
    "name": "Fahrradtour",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Fahrrad"],
    "list": true
  },
  {
    "name": "Wandertour",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Wandern"],
    "list": true
  },
  {
    "name": "Sommerurlaub",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Spiele"],
    "list": true
  },
  {
    "name": "Festival",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Spiele", "Camping"],
    "list": true
  },
  {
    "name": "Konferenz",
    "icon": "school",
    "parents": ["Sommer", "Hygiene", "Sonstiges", "Spiele"],
    "items": [
      "Poster / Vortrag",
      "Konferenz-Dokumente",
      "Laptop",
      "Tablet + Ladegerät",
      "Tablet",
    ],
    "list": true
  },
  {
    "name": "Geocaching",
    "icon": "compass",
    "color": "danger",
    "items": [
      "Cachebeschreibungen auf Garmin / c:geo",
      "Garmin",
      "Ersatzakkus",
      "Stifte + Papier",
      "Handy",
      "feste Schuhe",
      "Leatherman",
      "Plastiktüten / Beutel",
      "? Kamera",
      "? Kurzes Seil + Karabiner + Bandschlinge",
      "? Taschenlampe",
      "? Handschuhe",
      "? Karte",
      "? Taschentücher / Klopapier",
      "? Sonnencreme",
      "? Fernglas",
      "? Rollmaß",
      "? Draht / Kabelbinder",
      "? Regenjacke",
      "? Geldbeutel",
      "? Zeckenkarte",
      "? Magnet",
      "? Laserpointer"
    ],
    "parents": ["Outdoor"],
    list: true
  }
];

function Tag(name) {
    this.name = name;
    this.icon = undefined;
    this.color = "default";
    this.list = false;
    this.items = [];
    this.parents = [];
}

Tag.prototype.tagAndParents = function() {
    // recursively resolve dependencies
    var allParents = _(this.parents)
        .invoke(Tag.prototype.tagAndParents)
        .flatten()
        .uniq()
        .value();

    return allParents.concat([this]);
};

Tag.prototype.render = function() {
    if (this.items.length === 0) {
        return "";
    }
    return Mustache.render(tagTemplate, this);
};

function findTag(name) {
    var tag = _.find(tags, function(tag) { return tag.name === name; });
    if (tag === undefined) {
        console.error("Could not find tag '" + name + "'");
    }
    return tag;
}

// Parse JSON into Tag objects
var tags = [];
_(dbTags).each(function(jsonTag) {
    var tag = new Tag(jsonTag.name);
    if (_.has(jsonTag, "icon")) {
        tag.icon = jsonTag.icon;
    }
    if (_.has(jsonTag, "color")) {
        tag.color = jsonTag.color;
    }
    if (_.has(jsonTag, "items")) {
        tag.items = jsonTag.items;
    }
    if (_.has(jsonTag, "list")) {
        tag.list = jsonTag.list;
    }
    if (_.has(jsonTag, "parents")) {
        var parentTags = _.map(jsonTag.parents, function(tagName) {
            return findTag(tagName);
        });
        tag.parents = parentTags;
    }
    tags.push(tag);
});

var tagTemplate, buttonTemplate;

function setActiveTags(atags) {
    var tagNames = _.pluck(atags, "name");
    localStorage.setItem("activeTags", JSON.stringify(tagNames));
}

function getActiveTags() {
    var tagNames = JSON.parse(localStorage.getItem("activeTags"));
    return _.map(tagNames, findTag);
}

function addActiveTags(atags) {
    setActiveTags(_.uniq(getActiveTags().concat(atags)));
}

function removeActiveTags(atag) {
    var atags = getActiveTags();
    setActiveTags(_.filter(atags, function (c) { return c !== atag; }));
}

function button(tag) {
    var active = _.contains(getActiveTags(), tag); // TODO: inefficient
    return { name: tag.name,
        style: active ? 'danger' : 'primary',
        function: active ? 'remove' : 'add',
        symbol: active ? 'minus' : 'plus',
        notList: !tag.list,
        active: active ? 'active' : '',
        list: tag.list,
        icon: tag.icon
    };
}

function saveItems() {
    // load old saved items
    var items = localStorage.getItem("completedItems");
    if (items === undefined) {
        items = [];
    }
    else {
        items = JSON.parse(items);
    }

    // add (newly) checked items
    var checkedItems = $("input:checkbox:checked").map(function () {
        return $(this).attr("data-item");
    }).get();

    // remove (newly?) unchecked items
    var uncheckedItems = $("input:checkbox:not(:checked)").map(function () {
        return $(this).attr("data-item");
    }).get();
    items = _.union(items, checkedItems);
    items = _.difference(items, uncheckedItems);
    localStorage.setItem("completedItems", JSON.stringify(items));
}

function loadItems() {
    var items = localStorage.getItem("completedItems");
    if (items === undefined) {
        return;
    }
    items = JSON.parse(items);
    _.each(items, function (item) {
        $(":checkbox[data-item='" + item + "']").each(function () {
            $(this)
                .prop("checked", true)
                .parent().addClass("done");
        });
    });

    progress();
}

function progress() {
    var checked = $("input:checkbox:checked").length;
    var all = $("input:checkbox").length;
    var percentage;
    if (all === 0) {
        percentage = 0;
    }
    else {
        percentage = 100 * checked / all;
    }
    $("#progress").css("width", percentage.toString() + "%");
}

function render() {
    // render tag buttons
    var buttons = _.map(tags, button);
    var tagButtons = _.filter(buttons, function (b) { return !b.list; });
    var listButtons = _.filter(buttons, function (b) { return b.list; });

    var html = Mustache.render(buttonTemplate, {buttons: tagButtons});
    $("#tag-buttons").html(html);

    html = Mustache.render(buttonTemplate, {buttons: listButtons});
    $("#list-buttons").html(html);

    // add event handlers
    _.each(tags, function(tag) {
        $("#btn-add-" + tag.name).click(function () {
            addActiveTags(findTag(tag.name).tagAndParents());
            render();
        });
    });

    _.each(tags, function(tag) {
        $("#btn-remove-" + tag.name).click(function () {
            removeActiveTags(findTag(tag.name));
            render();
        });
    });

    _.each(tags, function(tag) {
        $("#btn-replace-" + tag.name).click(function () {
            setActiveTags(findTag(tag.name).tagAndParents());
            render();
        });
    });

    // render lists
    var aTags = getActiveTags();

    var lists = _(aTags)
            .invoke(Tag.prototype.render)
            .filter(function (h) { return h !== ""; })
            .value();
    var n = lists.length;
    var n_left = Math.ceil(n / 2);
    var n_right = n - n_left;

    $("#lists-left").html(_.first(lists, n_left).join(""));
    $("#lists-right").html(_.last(lists, n_right).join(""));

    $("input").change(function () {
        $(this).parent().toggleClass("done");
        saveItems();
        progress();
    });

    loadItems();
}

$(document).ready(function() {
    // render the tag-list
    buttonTemplate = $("#buttonTemplate").html();

    // Pre-parse tag template
    tagTemplate = $("#tagTemplate").html();
    Mustache.parse(tagTemplate);

    // reset button
    $("#reset").click(function () {
        localStorage.setItem("completedItems", "[]");
        render();
    });

    // Render the initial list
    render();

    loadItems();
});
