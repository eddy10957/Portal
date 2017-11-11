

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
