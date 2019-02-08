$(function() {
    
    $("#btn-basic-dialog").button().click(function() {
        $("#basic-dialog").dialog({width:400, resizable:false});
    });

    $("#btn-animated-dialog").button().click(function() {
        $("#animated-dialog").dialog({width:400, resizable:false, 
            show: {
                effect: "slideDown",
                duration: 300
            },
            hide: {
                effect: "slideUp",
                duration: 300
            }    
        });
    });

    $("#btn-modal-confirmation").button().click(function() {
        $("#modal-confirmation").dialog({
            width:400, 
            resizable:false, 
            modal:true,
            buttons: {
                "Confirm": function() {
                    $(this).dialog("close");
                },
                "Close": function() {
                    $(this).dialog("close");
                }
            }
        });
    });

    $("#btn-modal-form").button().click(function() {
        $("#modal-form").dialog({
            width:400,
            height: "auto", 
            resizable:false, 
            modal:true,
            buttons: {
                "Submit": function() {
                    $(this).dialog("close");
                },
                "Close": function() {
                    $(this).dialog("close");
                }
            }
        });
    });

    $("#btn-modal-message").button().click(function() {
        $("#modal-message").dialog({
            width:350, 
            resizable:false,
            modal:true,
            buttons: {
                "OK": function() {
                    $(this).dialog("close");
                }
            }
        });
    });

});