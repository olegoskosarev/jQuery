$(function() {    
    $(document).tooltip();
    $("#age").spinner();
    $("p").draggable();

    const w = parseFloat($("form").css("width"));

    const menu = $("#role").selectmenu({
        width: w * 0.95 - 30
    });

    $(menu).on("selectmenufocus", function(event) {
        $(this).css("border-color", "#333");
    });

    $("fieldset > input").checkboxradio();

    $("button").button();
});