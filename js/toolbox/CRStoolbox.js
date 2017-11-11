function CRStoolbox_numtochar(str){
	var parts = str.split(" ");
    var output = [];
    for( var i = 0; i < parts.length; ++i ) {
		var index = 64+parseInt(parts[i]);
		var letter = String.fromCharCode( index );
                output.push( letter );
	}

	return output.join("");
}
function CRStoolbox_cesarcipher(str, shift,str1){
	var parts = str.split( "" );
	var output = [];
  var num = parseInt(shift);

	for( var i = 0; i < parts.length; ++i ) {
		var ch = parts[i];
		var chCode = ch.charCodeAt(ch);
                if(chCode!=32){
                    if(chCode>90) chCode-=32;
                    var encCh = chCode + num;
                    if(encCh>90) encCh-=26;
                    if(encCh<65) encCh+=26;
                    var letter = String.fromCharCode( encCh );
                }
                else{letter=" ";}
                output.push( letter );
	}

	return output.join("");
}
