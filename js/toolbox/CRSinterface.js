/*

    In forma compatta:

    function CRSinterface_numtochar(){
        $("#output-numtochar").html(CRStoolbox_numtochar($("#input-numtochar").val()));
    }

*/
function CRSinterface_numtochar(){
    var input01 = $("#input-numtochar").val();      // Recupera input dall'interfaccia
    var result  = CRStoolbox_numtochar(input01);    // Calcola il risultato
    $("#output-numtochar").html(result);            // Renderizza il risultato nell'area di output
}
function CRSinterface_cesarcipher(){
  var input01 = $("#input01-cesare".val();
  var input02 = $("#input02-cesare".val();
  var input03 = $("#input03-cesare".val();
  var result  = CRStoolbox_cesarcipher(input01,input02,input03);
  $("#output-cesare").html(result);
}
