$(function() {

    const tabTitle = $("#tab-title");
    const tabContent = $("#tab-content");
    const tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
    let tabCounter = 4;

    const tabs = $("#tabs").tabs({
        collapsible:true
        // event: "mouseover"
    });

    tabs.find(".ui-tabs-nav").sortable({
        axis:"x",
        containment:"#tabs"
    });

    const dialog = $("#dialog").dialog({
        autoOpen:false,
        width:400,
        resizable:false,
        modal:true,
        buttons: {
            "Add": function() {
                addTab();
                $(this).dialog("close");
            },
            "Close": function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            form[0].reset();
        }
    });
    
    const form = dialog.find("form").on("submit", function(event) {
        addTab();
        dialog.dialog("close");
        event.preventDefault();
    });
    
    function addTab() {
        const label = tabTitle.val() || "Tab " + tabCounter;
        const id = "tabs-" + tabCounter;
        const li = $(tabTemplate.replace( /#\{href\}/g, "#" + id).replace( /#\{label\}/g, label));
        const tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";
   
        tabs.find(".ui-tabs-nav").append(li);
        tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
        tabs.tabs("refresh");
        tabCounter++;
    }

    $("#btn-add-new-tab").button().on("click", function() {
        dialog.dialog("open");
    });

    tabs.on("click", "span.ui-icon-close", function() {
        const panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        tabs.tabs("refresh");
    });

});