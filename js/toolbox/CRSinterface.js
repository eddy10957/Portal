
function CRSinterface_numtochar(){
    var input01 = $("#input-numtochar").val();      // Recupera input dall'interfaccia
    var result  = CRStoolbox_numtochar(input01);    // Calcola il risultato
    $("#output-numtochar").html(result);            // Renderizza il risultato nell'area di output
}

/*

    In forma compatta:

    function CRSinterface_numtochar(){
        $("#output-numtochar").html(CRStoolbox_numtochar($("#input-numtochar").val()));
    }
    
*/
