/*jslint browser: true, nomen: true, white: true, vars: true, todo: true*/
/*global $*/
/*global _*/
/*global Handlebars*/

'use strict';

var tagTemplate, buttonTemplate, tags = [];

function Tag(name) {
    this.name = name;
    this.icon = undefined;
    this.color = "default";
    this.list = false;
    this.items = [];
    this.parents = [];
    this.tagId = _.uniqueId();
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
    return tagTemplate(this);
};

function replaceQuestionMark(item) {
    var html = item;
    if  (item.substr(0, 2) === "? ") {
        html = '<span style="color: #888;">' + _.drop(item, 2).join("") + '</span> <span style="color: #ccc" class="glyphicon glyphicon-question-sign"></span>';
    }
    return html;
}

Tag.prototype.itemsWithIds = function() {
    return _.map(this.items, function(item, id) {
        var html = replaceQuestionMark(item);
        return {id: id, name: item, html: html};
    });
};

function findTag(name) {
    var tag = _.find(tags, function(tag) { return tag.name === name; });
    if (tag === undefined) {
        console.error("Could not find tag '" + name + "'");
    }
    return tag;
}

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
    setActiveTags(_.reject(atags, atag));
}

function button(tag) {
    var active = _.contains(getActiveTags(), tag); // TODO: inefficient
    return { name: tag.name,
        style:    active ? 'danger' : 'primary',
        function: active ? 'remove' : 'add',
        symbol:   active ? 'minus' : 'plus',
        active:   active,
        icon:     tag.icon,
        color:    tag.color,
        list:     tag.list
    };
}

function saveCompletedItems() {
    // Note: We could simply store the currently checked items. However,
    // this would delete items which are not displayed on screen.

    // load old saved items
    var items = localStorage.getItem("completedItems");
    if (items === undefined) {
        items = [];
    }
    else {
        items = JSON.parse(items);
    }

    // add (newly) checked items
    var checkedItems = $("input:checkbox:checked").map(function() {
        return $(this).attr("data-item");
    }).get();

    // remove (newly?) unchecked items
    var uncheckedItems = $("input:checkbox:not(:checked)").map(function() {
        return $(this).attr("data-item");
    }).get();
    items = _.union(items, checkedItems);
    items = _.difference(items, uncheckedItems);
    localStorage.setItem("completedItems", JSON.stringify(items));
}

function renderProgress() {
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

function loadCompletedItems() {
    var items = localStorage.getItem("completedItems");
    if (items === undefined) {
        return;
    }
    items = JSON.parse(items);
    _.each(items, function(item) {
        $(":checkbox[data-item='" + item + "']").each(function() {
            $(this)
                .prop("checked", true)
                .parent().find("label").addClass("done");
        });
    });

    renderProgress();
}

function render() {
    // render tag buttons
    var buttons = _.map(tags, button);
    var listButtons = _.filter(buttons, 'list');
    var tagButtons = _.reject(buttons, 'list');

    $("#list-buttons").html(buttonTemplate({buttons: listButtons}));
    $("#tag-buttons").html(buttonTemplate({buttons: tagButtons}));

    // add event handlers
    var esc = function(id) { return id.replace("+", "\\+"); };
    _.each(tags, function(tag) {
        $("#btn-add-" + esc(tag.name)).click(function() {
            addActiveTags(findTag(tag.name).tagAndParents());
            render();
        });
    });

    _.each(tags, function(tag) {
        $("#btn-remove-" + esc(tag.name)).click(function() {
            removeActiveTags(findTag(tag.name));
            render();
        });
    });

    _.each(tags, function(tag) {
        $("#btn-replace-" + esc(tag.name)).click(function() {
            setActiveTags(findTag(tag.name).tagAndParents());
            render();
        });
    });

    // render lists
    var aTags = getActiveTags();

    // get tags in correct order
    aTags = _.intersection(tags, aTags);

    var lists = _(aTags)
            .invoke(Tag.prototype.render)
            .reject(_.isEmpty)
            .value();
    var n = lists.length;
    var n_left = Math.ceil(n / 2);
    var n_right = n - n_left;

    $("#lists-left").html(_.first(lists, n_left).join(""));
    $("#lists-right").html(_.last(lists, n_right).join(""));

    $("input").change(function() {
        $(this).parent().find("label").toggleClass("done");
        saveCompletedItems();
        renderProgress();
    });

    loadCompletedItems();

    location.hash = _.pluck(aTags, "name").map(encodeURIComponent).join(",");
}

$(document).ready(function() {
    // compile the templates
    buttonTemplate = Handlebars.compile($("#buttonTemplate").html());
    tagTemplate = Handlebars.compile($("#tagTemplate").html());

    // register event handlers
    $("#print").click(function() {
        window.print();
    });

    $("#leftover").click(function() {
        var html;

        var uncheckedItems = $("input:checkbox:not(:checked)").map(function() {
            return $(this).attr("data-item");
        }).get();

        if (uncheckedItems.length > 15) {
            html = 'Viel zu viele unerledigte Dinge für eine <small>Morgen-Früh-Liste™</span>.';
        }
        else if (uncheckedItems.length === 0) {
            if (getActiveTags().length === 0) {
                html = 'Vielleicht legst du erst mal eine Packliste an.';
            }
            else {
                html = 'Du hast doch schon alles erledigt.';
            }
        }
        else {
            html = _.map(uncheckedItems, replaceQuestionMark).join("<br />");
        }

        $("#leftoverContent").html(html);
        $("#leftoverModal").modal('show');
    });

    $("#reset").click(function() {
        localStorage.setItem("activeTags", "[]");
        localStorage.setItem("completedItems", "[]");
        render();
    });

    // load JSON and convert into Tag objects
    $.getJSON("json/packliste.json", function(dbTags) {
        _(dbTags).each(function(jsonTag) {
            var tag = new Tag(jsonTag.name);
            tag = _.assign(tag, jsonTag);
            if (_.has(jsonTag, "parents")) {
                tag.parents = _.map(jsonTag.parents, findTag);
            }
            tags.push(tag);
        });

        // load predefined tags from URL
        if (getActiveTags().length === 0) {
            var hash = location.hash.replace('#', '');
            if (_.isString(hash) && hash !== "") {
                _(hash.split(","))
                    .map(findTag)
                    .filter(_.isObject)
                    .map(addActiveTags);
            }
        }

        render();
    });
});
