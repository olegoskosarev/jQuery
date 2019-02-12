$(function() {
    const newIcons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };

    const defaultIcons = {
        header: "ui-icon-triangle-1-e",
        activeHeader: "ui-icon-triangle-1-s"
    };
    
    const accordion = $("#accordion").accordion({
        header: "> div > h3",
        collapsible: true,
        icons: newIcons,
        active: 1,
        heightStyle: "content"
    });

    accordion.sortable({
        axis: "y",
        handle: "h3",
        containment: accordion,
        stop: function() {
            // Refresh accordion to handle new order
            $(this).accordion("refresh");
        }
    });

    const button = $("#btn-change-icons").button().on("click", function() {
        const currntIcons = accordion.accordion("option", "icons");
        if (currntIcons === defaultIcons) {
            accordion.accordion("option", "icons", newIcons);
        } 
        else {
            accordion.accordion("option", "icons", defaultIcons);
        }
    });
});