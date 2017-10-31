
// Inizio funzioni , molte si riciclano .
function analyseText(){
	caseSensitive=document.getElementById('textAnalysisCaseSensitive').checked;
	checkBoxDiacritics=document.getElementById('textAnalysisCheckboxDiacritics').checked;
    var newDiv='<b>Result:</b><br><table>';
    chars=document.getElementById('textAnalysisText').value;

	// Remove Diacritics
	if (checkBoxDiacritics==true){
		chars=removeDiacritics(chars);
	}

    splitChars=chars.split('');

    // Frequency analysis
    var freqs=new Array();
    for(i=0; i<splitChars.length; i++){
		if (caseSensitive==true){
			sChar=splitChars[i];
		}else{
			sChar=splitChars[i].toLowerCase();
		}
        if (sChar in freqs){
            freqs[sChar]++;
        }else{
            freqs[sChar]=1;
        }
    }

    // Number of words
    charWords=chars.replace(/\s/g,' ');
    charWords=charWords.replace(/(^\s*)|(\s*$)/gi,"");
	charWords=charWords.replace(/[ ]{2,}/gi," ");

    splitWords=charWords.split(' ');
    if (splitWords[0]==''){
        newDiv+='<tr><td>Number of words: 0</td></tr>';
    }else{
        newDiv+='<tr><td>Number of words: '+splitWords.length+'</td></tr>';
    }

    numSpace=0;
    if (' ' in freqs){
        numSpace=freqs[' '];
    }
    numTab=0;
    if ('\t' in freqs){
        numTab=freqs['\t'];
    }
    numEndOfLine=0;
    if ('\n' in freqs){
        numEndOfLine=freqs['\n'];
    }

    // Number of characters
    newDiv+='<tr><td>Number of characters: '+(splitChars.length-numEndOfLine)+'</td></tr>';

    // Number of characters without spaces and tabs
    newDiv+='<tr><td>Number of characters without spaces and tabs: '+(splitChars.length-(numSpace+numTab+numEndOfLine))+'</td></tr>';

    // Frequency analysis output
    newDiv+='<tr><td>Frequency analysis: </td></tr>';
    newDiv+='<tr><td><table style="text-align:center; font-family: Courier New;"><tr>';
    newDiv+='<td style="text-align:left; font-family:Arial;">Alphabetical characters: &nbsp;&nbsp;</td>';
    for(i=0; i<alphaCharsL.length; i++){
        newDiv+='<td>'+alphaCharsL[i]+'</td>';
    }
    newDiv+='</tr><tr>';
    newDiv+='<td style="text-align:left; font-family:Arial;">Frequency: &nbsp;&nbsp;</td>';
    for(i=0; i<alphaCharsL.length; i++){
        if (alphaCharsL[i] in  freqs){
            newDiv+='<td>'+freqs[alphaCharsL[i]]+'</td>';
        }else{
            newDiv+='<td>0</td>';
        }
    }
    newDiv+='</tr></table>';
	if (caseSensitive==true){
		newDiv+='<tr><td><table style="text-align:center; font-family: Courier New;"><tr>';
		newDiv+='<td style="text-align:left; font-family:Arial;">Alphabetical characters: &nbsp;&nbsp;</td>';
		for(i=0; i<alphaCharsU.length; i++){
			newDiv+='<td>'+alphaCharsU[i]+'</td>';
		}
		newDiv+='</tr><tr>';
		newDiv+='<td style="text-align:left; font-family:Arial;">Frequency: &nbsp;&nbsp;</td>';
		for(i=0; i<alphaCharsU.length; i++){
			if (alphaCharsU[i] in  freqs){
				newDiv+='<td>'+freqs[alphaCharsU[i]]+'</td>';
			}else{
				newDiv+='<td>0</td>';
			}
		}
		newDiv+='</tr></table>';
	}
    newDiv+='</td></tr>';

    newDiv+='<tr><td><table style="text-align:center; font-family: Courier New;"><tr>';
    newDiv+='<td style="text-align:left; font-family:Arial;">Numbers: &nbsp;&nbsp;</td>';
    for(i=0; i<nums.length; i++){
        newDiv+='<td>'+nums[i]+'</td>';
    }
    newDiv+='</tr><tr>';
    newDiv+='<td style="text-align:left; font-family:Arial;">Frequency: &nbsp;&nbsp;</td>';
    for(i=0; i<nums.length; i++){
        if (nums[i] in  freqs){
            newDiv+='<td>'+freqs[nums[i]]+'</td>';
        }else{
            newDiv+='<td>0</td>';
        }
    }
    newDiv+='</tr></table></td></tr>';

    newDiv+='<tr><td><table style="text-align:center; font-family: Courier New;"><tr>';
    newDiv+='<td style="text-align:left; font-family:Arial;">Others: &nbsp;&nbsp;</td>';
    for (i in freqs){
        if(alphaCharsL.indexOf(i)==-1 && alphaCharsU.indexOf(i)==-1 && nums.indexOf(i)==-1){
            if (i==' '){
                newDiv+='<td>&lt;space&gt;</td>';
            }else if(i=='\n'){
                newDiv+='';
            }else if(i=='\t'){
                newDiv+='<td>&lt;tab&gt;</td>';
            }else{
                newDiv+='<td>'+i+'</td>';
            }
        }
    }
    newDiv+='</tr><tr>';
    newDiv+='<td style="text-align:left; font-family:Arial;">Frequency: &nbsp;&nbsp;</td>';
    for (i in freqs){
        if(alphaCharsL.indexOf(i)==-1 && alphaCharsU.indexOf(i)==-1 && nums.indexOf(i)==-1){
            if(i=='\n'){
                newDiv+='';
            }else{
                newDiv+='<td>'+freqs[i]+'</td>';
            }
        }
    }
    newDiv+='</tr></table></td></tr>';


    if (chars.length==0){
        newDiv='';
    }
    document.getElementById('textAnalysisDiv').innerHTML=newDiv;
}
function removeDiacritics (str) {
    if(!changes) {
        changes = defaultDiacriticsRemovalMap;
    }
    for(var i=0; i<changes.length; i++) {
        str = str.replace(changes[i].letters, changes[i].base);
    }
    return str;
}
function convertBase(src, srcAlphabet, dstAlphabet, caseSensitive){

                  if (srcAlphabet==srcAlphabet.toLowerCase() || srcAlphabet==srcAlphabet.toUpperCase()){
                      cSense=caseSensitive;
                  }else{
                      cSense=true;
                  }

                  var srcBase = srcAlphabet.length;
                  var dstBase = dstAlphabet.length;

                  var wet = src;
                  var val = 0;
                  var mlt = 1;

                  while (wet.length > 0){
                      var digit = wet.charAt(wet.length - 1);
                      var digVal = srcAlphabet.indexOf(digit);
                      if (!cSense){
                          if (digVal==-1){
                              digVal = srcAlphabet.indexOf(digit.toLowerCase());
                          }
                          if (digVal==-1){
                              digVal = srcAlphabet.indexOf(digit.toUpperCase());
                          }
                      }

                      if (digVal>-1){
                          val += mlt * digVal;
                          mlt *= srcBase;
                      }
                      wet = wet.substring(0, wet.length - 1);
                  }

                  wet = val;
                  var ret = "";

                  while (wet >= dstBase){
                      var digitVal = wet % dstBase;
                      var digit = dstAlphabet.charAt(digitVal);
                      ret = digit + ret;
                      wet /= dstBase;
                  }

                  var digit = dstAlphabet.charAt(wet);
                  ret = digit + ret;

                  return ret;
                }
function asciiConversion(){
              var newDiv='';
              var dropDownFromType = document.getElementById("asciiFromType");
              var fromType = dropDownFromType.options[dropDownFromType.selectedIndex].value;
              var dropDownToType = document.getElementById("asciiToType");
              var toType = dropDownToType.options[dropDownToType.selectedIndex].value;
              var noSpacesCheck=document.getElementById('asciiCheckNoSpaces').checked;
              var chars=document.getElementById('asciiText').value;
          	//chars=chars.replace('\n',' \n ');
          	if (fromType!='text'){
          		chars=chars.replace(/(?:\r\n|\r|\n)/g,' ');
          		chars=chars.replace(/ +(?= )/g,'');
          	}

              if (fromType==toType){
                  if (chars.length==0){
                      newDiv='';
                  }else{
                      newDiv+='<b>Result:</b><br>Conversion to the same type is not necessary.';
                  }
                  document.getElementById('asciiDiv').innerHTML=newDiv;
                  return;
              }


              var decResult=new Array();
              if (fromType=='text'){
                  var splitChars=chars.split('');
                  for(i=0; i<splitChars.length; i++){
                      index=conversion['text'].indexOf(splitChars[i]);
                      if (index>-1){
                          decResult.push(index);
                      }
                  }

              }else if (fromType=='bin'){
                  var splitChars=chars.split(' ');
                  for(i=0; i<splitChars.length; i++){
                      dec=parseInt(convertBase(splitChars[i], alphabets['bin'], alphabets['dec'], false));
                      if (dec>-1 && dec<256 && splitChars[i]!=''){
                          decResult.push(dec);
                      }
                  }

              }else if (fromType=='oct'){
                  var splitChars=chars.split(' ');
                  for(i=0; i<splitChars.length; i++){
                      dec=parseInt(convertBase(splitChars[i], alphabets['oct'], alphabets['dec'], false));
                      if (dec>-1 && dec<256 && splitChars[i]!=''){
                          decResult.push(dec);
                      }
                  }

              }else if (fromType=='dec'){
                  var splitChars=chars.split(' ');
                  for(i=0; i<splitChars.length; i++){
                      dec=parseInt(splitChars[i]);
                      if (dec>-1 && dec<256 && splitChars[i]!=''){
                          decResult.push(dec);
                      }
                  }
              }else if (fromType=='hex'){
                  var splitChars=chars.split(' ');
                  for(i=0; i<splitChars.length; i++){
                      dec=parseInt(convertBase(splitChars[i], alphabets['hex'], alphabets['dec'], false));
                      if (dec>-1 && dec<256 && splitChars[i]!=''){
                          decResult.push(dec);
                      }
                  }

              }else if (fromType=='b32'){
                  var splitChars=chars.split('');
                  var binNum='';
                  for(i=0; i<splitChars.length; i++){
          			var index=conversion['b32'].indexOf(splitChars[i].toUpperCase());
                      if(index>-1){
                          binNum+=conversion['bin32'][index];
                      }else if(splitChars[i]=='='){
                          binNum=binNum.substr(0,binNum.length-1);
                      }
                  }
                  var bin8=binNum.match(/.{1,8}/g);
                  for(i=0; i<bin8.length; i++){
                      if (bin8[i].length==8){
                          dec=parseInt(convertBase(bin8[i], alphabets['bin'], alphabets['dec'], false));
                          if (dec>-1 && dec<256){
                              decResult.push(dec);
                          }
                      }
                  }

              }else if (fromType=='b64'){
                  var splitChars=chars.split('');
                  var binNum='';
                  for(i=0; i<splitChars.length; i++){
          			var index=conversion['b64'].indexOf(splitChars[i]);
                      if(index>-1){
                          binNum+=conversion['bin64'][index];
                      }else if(splitChars[i]=='='){
                          binNum=binNum.substr(0,binNum.length-1);
                      }
                  }
                  var bin8=binNum.match(/.{1,8}/g);
                  for(i=0; i<bin8.length; i++){
                      if (bin8[i].length==8){
                          dec=parseInt(convertBase(bin8[i], alphabets['bin'], alphabets['dec'], false));
                          if (dec>-1 && dec<256){
                              decResult.push(dec);
                          }
                      }
                  }

              }else if (fromType=='html'){
                  var splitChars=chars.split(' ');
                  for(i=0; i<splitChars.length; i++){
                      index=conversion['html'].indexOf(splitChars[i]);
                      if (index>-1){
                          decResult.push(index);
                      }
                  }
              }

              // To the other methods
              if (decResult.length>0 && toType=='text'){
                  for(i=0; i<decResult.length; i++){
                      if (decResult[i]<256){
                          newDiv+=conversion['text'][decResult[i]];
                      }
                  }

              }else if (decResult.length>0 && toType=='bin'){
                  for(i=0; i<decResult.length; i++){
                      newDiv+=("00000000" + convertBase(decResult[i].toString(), alphabets['dec'], alphabets['bin'], false)).slice (-8);
                      if (noSpacesCheck==false && (i+1)<decResult.length){
                          newDiv+=' ';
                      }
                  }

              }else if (decResult.length>0 && toType=='oct'){
                  for(i=0; i<decResult.length; i++){
                      newDiv+=convertBase(decResult[i].toString(), alphabets['dec'], alphabets['oct'], false);
                      if (noSpacesCheck==false && (i+1)<decResult.length){
                          newDiv+=' ';
                      }
                  }

              }else if (decResult.length>0 && toType=='dec'){
                  for(i=0; i<decResult.length; i++){
                      newDiv+=decResult[i];
                      if (noSpacesCheck==false && (i+1)<decResult.length){
                          newDiv+=' ';
                      }
                  }

              }else if (decResult.length>0 && toType=='hex'){
                  for(i=0; i<decResult.length; i++){
                      newDiv+=convertBase(decResult[i].toString(), alphabets['dec'], alphabets['hex'], false);
                      if (noSpacesCheck==false && (i+1)<decResult.length){
                          newDiv+=' ';
                      }
                  }

              }else if (decResult.length>0 && toType=='b32'){
                  var binFull='';
                  for(i=0; i<decResult.length; i++){
                      binFull+=("00000000" + convertBase(decResult[i].toString(), alphabets['dec'], alphabets['bin'], false)).slice (-8);
                  }
                  var bin5=binFull.match(/.{1,5}/g);
                  var padZeros=''
                  while (bin5[bin5.length-1].length<5){
                      bin5[bin5.length-1]+='0';
                      padZeros+='=';
                  }
                  for(i=0; i<bin5.length; i++){
                      newDiv+=conversion['b32'][convertBase(bin5[i].toString(), alphabets['bin'], alphabets['dec'], false)];
                  }
                  newDiv+=padZeros;

              }else if (decResult.length>0 && toType=='b64'){
                  var binFull='';
                  for(i=0; i<decResult.length; i++){
                      binFull+=("00000000" + convertBase(decResult[i].toString(), alphabets['dec'], alphabets['bin'], false)).slice (-8);
                  }
                  var bin6=binFull.match(/.{1,6}/g);
                  var padZeros=''
                  while (bin6[bin6.length-1].length<6){
                      bin6[bin6.length-1]+='00';
                      padZeros+='=';
                  }
                  for(i=0; i<bin6.length; i++){
                      newDiv+=conversion['b64'][convertBase(bin6[i].toString(), alphabets['bin'], alphabets['dec'], false)];
                  }
                  newDiv+=padZeros;

              }else if (decResult.length>0 && toType=='html'){
                  for(i=0; i<decResult.length; i++){
                      if (decResult[i]<256){
                          newDiv+=conversion['htmlShow'][decResult[i]];
                          if (noSpacesCheck==false && (i+1)<decResult.length){
                              newDiv+=' ';
                          }
                      }
                  }
              }

              var newDiv='<b>Result:</b><br><textarea id="asciiResultText" rows="5" cols="100" style="font-family:Arial">'+newDiv+'</textarea>';
              if (chars.length==0){
                  newDiv='';
              }

              document.getElementById('asciiDiv').innerHTML=newDiv;
          }
function resetFields(pForm){
    pForm.reset();
    document.getElementById('numbersToLettersDiv').innerHTML='';
}
function setCharValues_numtolett(){

  var dropDown = document.getElementById("numbersToLettersMethod");
  var method = dropDown.options[dropDown.selectedIndex].value;
  charValues=new Array();
  if (method=='a=1'){
  validChars=validCharsN;
      for(i=0; i<26; i++){
          charValues[i+1]=validChars[i];
      }
  }else if (method=='a=0'){
  validChars=validCharsN;
      for(i=0; i<26; i++){
          charValues[i]=validChars[i];
      }
  }else if (method=='a=26'){
  validChars=validCharsN;
      for(i=0; i<26; i++){
          charValues[26-i]=validChars[i];
      }
  }else if (method=='a=25'){
  validChars=validCharsN;
      for(i=0; i<26; i++){
          charValues[25-i]=validChars[i];
      }
  }else if (method=='a=1G'){
  validChars=validCharsG;
      for(i=0; i<30; i++){
          charValues[i+1]=validChars[i];
      }
  }else if (method=='a=0G'){
  validChars=validCharsG;
      for(i=0; i<30; i++){
          charValues[i]=validChars[i];
      }
  }else if (method=='a=1Sw'){
  validChars=validCharsSw;
      for(i=0; i<30; i++){
          charValues[i+1]=validChars[i];
      }
  }else if (method=='a=0Sw'){
  validChars=validCharsSw;
      for(i=0; i<30; i++){
          charValues[i]=validChars[i];
      }
  }
  calculateNumbersToLetters();
}
function setCharValues_wordsvalue(){
        var dropDown = document.getElementById("wordValueMethod");
        var method = dropDown.options[dropDown.selectedIndex].value;
    	if (diacriticMethods.indexOf(method)==-1){
    		document.getElementById("wordValueCheckboxDiacritics").disabled=false;
    	}else{
    		document.getElementById("wordValueCheckboxDiacritics").disabled=true;
    	}

        if (method=='a=1'){
    		validChars=validCharsN;
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=i+1;
            }
        }else if (method=='a=0'){
    		validChars=validCharsN;
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=i;
            }
        }else if (method=='a=26'){
    		validChars=validCharsN;
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=26-i;
            }
        }else if (method=='a=25'){
    		validChars=validCharsN;
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=25-i;
            }
        }else if (method=='vanity'){
    		validChars=validCharsN;
            changeArray=new Array('c','f','i','l','o','s','v');
            val=2;
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=val;
                if (changeArray.indexOf(validChars[i])>-1){
                    val++;
                }
            }
        }else if (method=='scrabbleNL'){
    		validChars=validCharsN;
            lValues=new Array(1,3,5,2,1,4,3,4,1,4,3,3,3,1,1,3,10,2,2,2,4,4,5,8,8,4);
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=lValues[i];
            }
        }else if (method=='scrabbleUK'){
    		validChars=validCharsN;
            lValues=new Array(1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10);
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=lValues[i];
            }
        }else if (method=='scrabbleDE'){
    		validChars=validCharsN;
            lValues=new Array(1,3,4,1,1,4,2,2,1,6,4,2,3,1,2,4,10,1,1,1,1,6,3,8,10,3);
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=lValues[i];
            }
        }else if (method=='table0'){
    		validChars=validCharsN;
            lValues=new Array(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5);
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=lValues[i];
            }
        }else if (method=='table1'){
    		validChars=validCharsN;
            lValues=new Array(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6);
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=lValues[i];
            }
    	}else if (method=='table2'){
    		validChars=validCharsN;
            lValues=new Array(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8);
            for(i=0; i<26; i++){
                charValues_wordsvalue[validChars[i]]=lValues[i];
            }
        }else if (method=='a=1G'){
    		validChars=validCharsG;
            for(i=0; i<30; i++){
                charValues_wordsvalue[validChars[i]]=i+1;
            }
        }else if (method=='a=0G'){
    		validChars=validCharsG;
            for(i=0; i<30; i++){
                charValues_wordsvalue[validChars[i]]=i;
            }
        }else if (method=='a=1Sw'){
    		validChars=validCharsSw;
            for(i=0; i<30; i++){
                charValues_wordsvalue[validChars[i]]=i+1;
            }
        }else if (method=='a=0Sw'){
    		validChars=validCharsSw;
            for(i=0; i<30; i++){
                charValues_wordsvalue[validChars[i]]=i;
            }
        }
        calculateWordValue();
}
function calculateNumbersToLetters(){
  // Get input
  chars=document.getElementById('numtochar-input').value;
  dropDownM = document.getElementById("numbersToLettersMethod");
    method = dropDownM.options[dropDownM.selectedIndex].value;
  dropDownR = document.getElementById("numbersToLettersReplace");
    replaceVal = dropDownR.options[dropDownR.selectedIndex].value;

    // Calculate
      chars=chars.trim();
      splitLines=chars.split('\n');
      newString='';
      for(var j=0; j<splitLines.length; j++){
        splitChars=splitLines[j].split(' ');
        for(var i=0; i<splitChars.length; i++){
          if (typeof charValues[parseInt(splitChars[i])] != 'undefined'){
            newString+=charValues[parseInt(splitChars[i])];
          }else{
            if (replaceVal=='num'){
              newString+=splitChars[i];
            }else{
              newString+=replaceVal;
            }
          }
        }
        newString+='<br>';
      }
        // Set div values
        var newDiv='<b>Result</b>:<br>'+newString;
        if (chars.length==0){
            newDiv='';
        }

        var convTable='<br><br><table style="border:1px solid #000;"><tr><td colspan="27">Conversion table</td></tr>';
      if (validChars.length>26){
        convTable+='<tr><td>Character:</td>';
        for(var i=0; i<26; i++){
          convTable+='<td style="font-family: Courier New;">'+validChars[i]+'</td>';
        }
        convTable+='</tr><tr><td>Value:</td>';
        for(var i=0; i<26; i++){
          if (charValues.indexOf(validChars[i])<10){
            convTable+='<td style="font-family: Courier New;">'+charValues.indexOf(validChars[i])+'&nbsp;</td>';
          }else{
            convTable+='<td style="font-family: Courier New;">'+charValues.indexOf(validChars[i])+'</td>';
          }
        }
        convTable+='<tr><td>Character:</td>';
        for(var i=26; i<validChars.length; i++){
          convTable+='<td style="font-family: Courier New;">'+validChars[i]+'</td>';
        }
        if ((validChars.length-26)<26){
          convTable+='<td colspan="'+(26-(validChars.length-26))+'">&nbsp;</td>';
        }
        convTable+='</tr><tr><td>Value:</td>';
        for(var i=26; i<validChars.length; i++){
          if (charValues.indexOf(validChars[i])<10){
            convTable+='<td style="font-family: Courier New;">'+charValues.indexOf(validChars[i])+'&nbsp;</td>';
          }else{
            convTable+='<td style="font-family: Courier New;">'+charValues.indexOf(validChars[i])+'</td>';
          }
        }
        if ((validChars.length-26)<26){
          convTable+='<td colspan="'+(26-(validChars.length-26))+'">&nbsp;</td>';
        }

      }else{
        convTable+='<tr><td>Character:</td>';
        for(var i=0; i<validChars.length; i++){
          convTable+='<td style="font-family: Courier New;">'+validChars[i]+'</td>';
        }
        convTable+='</tr><tr><td>Value:</td>';
        for(var i=0; i<validChars.length; i++){
          if (charValues.indexOf(validChars[i])<10){
            convTable+='<td style="font-family: Courier New;">'+charValues.indexOf(validChars[i])+'&nbsp;</td>';
          }else{
            convTable+='<td style="font-family: Courier New;">'+charValues.indexOf(validChars[i])+'</td>';
          }
        }
      }
        convTable+='</tr></table>';

        newDiv+=convTable;
         document.getElementById('numbersToLettersDiv').innerHTML=newDiv;

}
function textAction(){
    var text=document.getElementById('textReverseText').value;
    document.getElementById('reverseWordCharactersCase').disabled=true;
    document.getElementById('reverseWordCharactersCaseSpan').style.color='#888888';
    document.getElementById('randomiseWordCharactersCase').disabled=true;
    document.getElementById('randomiseWordCharactersCaseSpan').style.color='#888888';
    document.getElementById('randomiseWordCharactersFirstLast').disabled=true;
    document.getElementById('randomiseWordCharactersFirstLastSpan').style.color='#888888';
    document.getElementById('textUpsideDownReverse').disabled=true;
    document.getElementById('textUpsideDownReverseSpan').style.color='#888888';
    document.getElementById('textUpsideDownRemove').disabled=true;
    document.getElementById('textUpsideDownRemoveSpan').style.color='#888888';
    var radios=document.getElementsByName('actionType');
    for (var i=0; i<radios.length; i++){
        if (radios[i].type==='radio' && radios[i].checked){
            switch(radios[i].value){
                case 'reverseText':
                    text=reverseText(text);
                    break;
                case 'reverseTextByLine':
                    text=reverseTextByLine(text);
                    break;
                case 'reverseWords':
                    text=reverseWords(text);
                    break;
                case 'reverseWordsByLine':
                    text=reverseWordsByLine(text);
                    break;
                case 'reverseWordCharacters':
                    document.getElementById('reverseWordCharactersCase').disabled=false;
                    document.getElementById('reverseWordCharactersCaseSpan').style.color='#000000';
                    text=reverseWordCharacters(text,document.getElementById('reverseWordCharactersCase').checked);
                    break;
                case 'randomiseWordCharacters':
                    document.getElementById('randomiseWordCharactersCase').disabled=false;
                    document.getElementById('randomiseWordCharactersCaseSpan').style.color='#000000';
                    document.getElementById('randomiseWordCharactersFirstLast').disabled=false;
                    document.getElementById('randomiseWordCharactersFirstLastSpan').style.color='#000000';
                    text=randomiseWordCharacters(text,document.getElementById('randomiseWordCharactersCase').checked,document.getElementById('randomiseWordCharactersFirstLast').checked);
                    break;
                case 'changeCase':
                    text=changeCase(text);
                    break;
                case 'textToUpper':
                    text=textToUpper(text);
                    break;
                case 'textToLower':
                    text=textToLower(text);
                    break;
                case 'textUpsideDown':
                    document.getElementById('textUpsideDownReverse').disabled=false;
                    document.getElementById('textUpsideDownReverseSpan').style.color='#000000';
                    document.getElementById('textUpsideDownRemove').disabled=false;
                    document.getElementById('textUpsideDownRemoveSpan').style.color='#000000';
                    text=textUpsideDown(text,document.getElementById('textUpsideDownReverse').checked,document.getElementById('textUpsideDownRemove').checked);
                    break;
            }
        }
    }

    if (text==''){
        document.getElementById('textReverseDiv').innerHTML='';
    }else{
        document.getElementById('textReverseDiv').innerHTML='<textarea rows="5" cols="100" style="font-family:Arial">'+text+'</textarea>';
    }
}
function reverseText(text){
    text=text.replace(/\r/gi,'');
    text=text.split('').reverse().join('');
    return text;
}
function reverseTextByLine(text){
    text=text.replace(/\r/gi,'');
    text=text.split('\n').reverse().join('\n');
    text=text.split('').reverse().join('');
    return text;
}
function reverseWords(text){
    text=text.replace(/\r/gi,'');
    text=text.replace(/\n/g,' \n ').split(' ').reverse().join(' ').replace(/ \n /g,'\n');
    return text;
}
function reverseWordsByLine(text){
    text=text.replace(/\r/gi,'');
    text=text.split('\n').reverse().join('\n');
    text=text.replace(/\n/g,' \n ').split(' ').reverse().join(' ').replace(/ \n /g,'\n');
    return text;
}
function reverseWordCharacters(text,keepCaseLocation){
    text=text.replace(/\r/gi,'');
    text=text.replace(/\n/g,' \n ').split(' ');
    var textarr=new Array();
    for (var i=0; i<text.length; i++){
        var revWord=text[i].split('').reverse().join('');
        if (keepCaseLocation){
            textarr[i]='';
            for (var j=0; j<text[i].length; j++){
                if(text[i].charAt(j)==text[i].charAt(j).toUpperCase() && text[i].charAt(j)!=text[i].charAt(j).toLowerCase()){
                    textarr[i]+=revWord.charAt(j).toUpperCase();
                }else{
                    textarr[i]+=revWord.charAt(j).toLowerCase();
                }
            }
        }else{
            textarr[i]=revWord;
        }
    }
    text=textarr.join(' ').replace(/ \n /g,'\n');
    return text;
}
function randomiseWordCharacters(text,keepCaseLocation,keepFirstLast){
    text=text.replace(/\r/gi,'');
    text=text.replace(/\n/g,' \n ').split(' ');
    var textarr=new Array();
    for (var i=0; i<text.length; i++){
        var w=text[i].split('');
        var randWord='';
        if (keepFirstLast){
            if (w.length>3){
                randWord+=w[0];
                w.splice(0, 1);
                while (w.length>1){
                    var randNum=Math.floor((Math.random()*(w.length-1)));
                    randWord+=w[randNum];
                    w.splice(randNum, 1);
                }
                randWord+=w[0];
                w.splice(0, 1);
            }else{
                randWord=w.join('');
            }
        }else{
            while (w.length>0){
                var randNum=Math.floor((Math.random()*(w.length)));
                randWord+=w[randNum];
                w.splice(randNum, 1);
            }
        }
        if (keepCaseLocation){
            textarr[i]='';
            for (var j=0; j<text[i].length; j++){
                if(text[i].charAt(j)==text[i].charAt(j).toUpperCase() && text[i].charAt(j)!=text[i].charAt(j).toLowerCase()){
                    textarr[i]+=randWord.charAt(j).toUpperCase();
                }else{
                    textarr[i]+=randWord.charAt(j).toLowerCase();
                }
            }
        }else{
            textarr[i]=randWord;
        }
    }
    text=textarr.join(' ').replace(/ \n /g,'\n');
    return text;
}
function changeCase(text){
    var newText='';
    for (var i=0; i<text.length; i++){
        if (text.charAt(i)==text.charAt(i).toUpperCase()){
            newText+=text.charAt(i).toLowerCase();
        }else{
            newText+=text.charAt(i).toUpperCase();
        }
    }
    return newText;
}
function textToUpper(text){
    text=text.toUpperCase();
    return text;
}
function textToLower(text){
    text=text.toLowerCase();
    return text;
}
function textUpsideDown(text,reverse,remove){
    var upDownTable = {'a' : '\u0250',
                       'b' : 'q',
                       'c' : '\u0254',
                       'd' : 'p',
                       'e' : '\u01DD',
                       'f' : '\u025F',
                       'g' : '\u0183',
                       'h' : '\u0265',
                       'i' : '\u0131',
                       'j' : '\u027E',
                       'k' : '\u029E',
                       'l' : '\u05DF',
                       'm' : '\u026F',
                       'n' : 'u',
                       'o' : 'o',
                       'r' : '\u0279',
                       's' : 's',
                       't' : '\u0287',
                       'v' : '\u028C',
                       'w' : '\u028D',
                       'y' : '\u028E',
                       'z' : 'z',
                       'A' : '\u2200',
                       'C' : '\u0186',
                       'E' : '\u018E',
                       'F' : '\u2132',
                       'G' : '\u05E4',
                       'H' : 'H',
                       'I' : 'I',
                       'J' : '\u017F',
                       //'L' : "\u02E5",
                       'M' : 'W',
                       'O' : 'O',
                       //'P' : "\u0500",
                       'S' : 'S',
                       'T' : '\u2534',
                       'U' : '\u2229',
                       'V' : '\u039B',
                       //'Y' : "\u2144",
                       'Z' : 'Z',
                       '0' : '0',
                       '1' : '\u0196',
                       //'2' : '\u1105',
                       '3' : '\u0190',
                       '4' : '\u3123',
                       '5' : '\u03DB',
                       '6' : '9',
                       '7' : '\u3125',
                       '8' : '8',
                       //'&' : '\u214B',
                       '.' : '\u02D9',
                       '[' : ']',
                       '(' : ')',
                       '{' : '}',
                       '?' : '\u00BF',
                       '!' : '\u00A1',
                       '\'' : ',',
                       '<' : '>',
                       '_' : '\u203E',
                       '"' : '\u201E',
                       '\\' : '\\',
                       ';' : '\u061B',
                       ':' : ':',
                       '-' : '-',
                       '+' : '+'};
                       //'\u203F' : '\u2040',
                       //'\u2045' : '\u2046',
                       //'\u2234' : '\u2235'

    for (i in upDownTable){
        upDownTable[upDownTable[i]] = i;
    }

    text=text.replace(/\r/gi,'');
    if (reverse){
        var last=text.length-1;
        var result=new Array(text.length);
        for (var i=last; i>=0; --i){
            if (text.charAt(i) in upDownTable){
                result[last-i]=upDownTable[text.charAt(i)];
            }else if(!remove || text.charAt(i)==' ' || text.charAt(i)=='\n'){
                result[last-i]=text.charAt(i);
            }
        }
    }else{
        var result=new Array();
        for (var i=0; i<text.length; i++){
            if (text.charAt(i) in upDownTable){
                result.push(upDownTable[text.charAt(i)]);
            }else if(!remove || text.charAt(i)==' ' || text.charAt(i)=='\n'){
                result.push(text.charAt(i));
            }
        }
    }
    return result.join('');
}
function getWordValue(text){
        var calcString='';
    	  var wvResultString='';
        var sumResultString='';
        splitChars=text.split('');
        val=0;
        for(var i=0; i<splitChars.length; i++){
            lowerChar=splitChars[i].toLowerCase();
            if (validChars.indexOf(lowerChar)>-1){
                val+=charValues[lowerChar];
                calcString+=charValues[lowerChar]+' + ';
            }else if (validNums.indexOf(lowerChar)>-1 && checkBoxNumbers==true){
                val+=parseInt(lowerChar);
                calcString+=lowerChar+' + ';
            }else {
                calcString+='0 + ';
            }
        }

        calcString=calcString.substring(0,(calcString.length-3))+' = ';
    	wvResultString+=val;
        sumResultString+=val;

        while (val>=10){
            splitChars=val.toString().split('');
            val=0;
            for(i=0; i<splitChars.length; i++){
                val+=parseInt(splitChars[i]);
            }
            sumResultString+=' = '+val;
        }

        return [calcString,wvResultString,sumResultString];

}
function calculateWordValue(){
        // Get input
        chars=document.getElementById('wordValueText').value;
        checkBoxNumbers=document.getElementById('wordValueCheckboxNumbers').checked;
        checkBoxDiacritics=document.getElementById('wordValueCheckboxDiacritics').checked;
    	checkBoxCalculation=document.getElementById('wordValueCheckboxCalculation').checked;
        checkBoxSeparate=document.getElementById('wordValueCheckboxSeparate').checked;
    	dropDown = document.getElementById("wordValueMethod");
        method = dropDown.options[dropDown.selectedIndex].value;

    	// Remove Diacritics
    	if (checkBoxDiacritics==true && diacriticMethods.indexOf(method)==-1){
    		chars=removeDiacritics(chars);
    	}

        // Calculate word value
        wvResult=getWordValue(chars);

        // Set div values
        var newDiv='<table width="90%"><tr><td width="25px" style="vertical-align:top;"><b>Word value (Digital root)</b>:</td><td style="vertical-align:top;">'
    	if (checkBoxCalculation==true){
    		newDiv+=wvResult[0];
    	}
    	newDiv+=wvResult[1]+'</td></tr>';
    	newDiv+='<tr><td style="vertical-align:top;"><b>Summed to one digit</b>:</td><td style="vertical-align:top;">'+wvResult[2]+'</td></tr></table>';

        // Get separate word values
        if (checkBoxSeparate==true){
            newDiv+='<br><b>Result separate words:</b>';
            // Split text
            spChars=chars.split(/[\s\n]/);
            for(var c=0; c<spChars.length; c++){
                if (spChars[c].length>0){
                    // Calculate word value
                    wvResult=getWordValue(spChars[c]);
                    // Add to result
                    if (checkBoxCalculation==true){
                        newDiv+='<br>'+spChars[c]+': '+wvResult[0]+wvResult[2];
                    }else{
                        newDiv+='<br>'+spChars[c]+': '+wvResult[2];
                    }
                }
            }
        }


        if (chars.length==0){
            newDiv='';
        }

        var convTable='<br><br><table style="border:1px solid #000;"><tr><td colspan="27">Conversion table</td></tr>';
    	if (validChars.length>26){
    		convTable+='<tr><td>Character:</td>';
    		for(var i=0; i<26; i++){
    			convTable+='<td style="font-family: Courier New;">'+validChars[i]+'</td>';
    		}
    		convTable+='</tr><tr><td>Value:</td>';
    		for(var i=0; i<26; i++){
    			if (charValues_wordsvalue[validChars[i]]<10){
    				convTable+='<td style="font-family: Courier New;">'+charValues_wordsvalue[validChars[i]]+'&nbsp;</td>';
    			}else{
    				convTable+='<td style="font-family: Courier New;">'+charValues_wordsvalue[validChars[i]]+'</td>';
    			}
    		}
    		convTable+='<tr><td>Character:</td>';
    		for(var i=26; i<validChars.length; i++){
    			convTable+='<td style="font-family: Courier New;">'+validChars[i]+'</td>';
    		}
    		if ((validChars.length-26)<26){
    			convTable+='<td colspan="'+(26-(validChars.length-26))+'">&nbsp;</td>';
    		}
    		convTable+='</tr><tr><td>Value:</td>';
    		for(var i=26; i<validChars.length; i++){
    			if (charValues_wordsvalue[validChars[i]]<10){
    				convTable+='<td style="font-family: Courier New;">'+charValues_wordsvalue[validChars[i]]+'&nbsp;</td>';
    			}else{
    				convTable+='<td style="font-family: Courier New;">'+charValues_wordsvalue[validChars[i]]+'</td>';
    			}
    		}
    		if ((validChars.length-26)<26){
    			convTable+='<td colspan="'+(26-(validChars.length-26))+'">&nbsp;</td>';
    		}

    	}else{
    		convTable+='<tr><td>Character:</td>';
    		for(var i=0; i<validChars.length; i++){
    			convTable+='<td style="font-family: Courier New;">'+validChars[i]+'</td>';
    		}
    		convTable+='</tr><tr><td>Value:</td>';
    		for(var i=0; i<validChars.length; i++){
    			if (charValues_wordsvalue[validChars[i]]<10){
    				convTable+='<td style="font-family: Courier New;">'+charValues_wordsvalue[validChars[i]]+'&nbsp;</td>';
    			}else{
    				convTable+='<td style="font-family: Courier New;">'+charValues_wordsvalue[validChars[i]]+'</td>';
    			}
    		}
    	}
        convTable+='</tr></table>';

        newDiv+=convTable;
        document.getElementById('wordValueDiv').innerHTML=newDiv;

}
function deRot(){
    checkBoxShowAll=document.getElementById('caesarCipherShowAll').checked;
    if (checkBoxShowAll==true){
        document.getElementById("caesarCipherRotation").disabled = true;
    }else{
        document.getElementById("caesarCipherRotation").disabled = false;
    }
    caesarCipher(0)
}
function deKey(){
    checkBoxKeyCheck=document.getElementById('caesarCipherKeyCheck').checked;
    if (checkBoxKeyCheck==true){
        document.getElementById("caesarCipherKey").disabled = false;
    }else{
        document.getElementById("caesarCipherKey").disabled = true;
    }
    caesarCipher(0)
}
function updateSelection(reset){
    if (reset==0){
        var dropDownAlphabet = document.getElementById("caesarCipherAlphabet");
        var alphabet = dropDownAlphabet.options[dropDownAlphabet.selectedIndex].value;
        var dropDownRotation = document.getElementById("caesarCipherRotation");
        var rotation = dropDownRotation.options[dropDownRotation.selectedIndex].value;
    }else{
        var alphabet = 'R13';
        var rotation = 13;
    }
    // First change the rotation selections if needed
    document.getElementById("caesarCipherRotation").options.length=0
    var rotSelect=document.getElementById("caesarCipherRotation")
    for (i=0; i<inChars[alphabet].length; i++){
        if (i==(inChars[alphabet].length/2)){
            rotSelect.options[rotSelect.options.length]=new Option(i,i,true,true)
        }else{
            rotSelect.options[rotSelect.options.length]=new Option(i,i,false,false)
        }
    }
}
function caesarCipher(methodChange){
    if (methodChange==1){
        updateSelection(0);
    }

    var dropDownAlphabet = document.getElementById("caesarCipherAlphabet");
    var alphabet = dropDownAlphabet.options[dropDownAlphabet.selectedIndex].value;
    var dropDownRotation = document.getElementById("caesarCipherRotation");
    var rotation = dropDownRotation.options[dropDownRotation.selectedIndex].value;
    var dropDownMethod = document.getElementById("caesarCipherMethod");
    var method = dropDownMethod.options[dropDownMethod.selectedIndex].value;
    var checkBoxShowAll=document.getElementById('caesarCipherShowAll').checked;
    var chars=document.getElementById('caesarCipherText').value;
    var checkBoxKeyCheck=document.getElementById('caesarCipherKeyCheck').checked;
    var key=document.getElementById('caesarCipherKey').value;

    if (chars.length>0){
        var newDiv='<b>Result:</b><br>';
    }else{
        newDiv='';
    }

    // Set alphabets to use
    plainAlphabet=inChars[alphabet];
    htmlPlainAlphabet=htmlChars;
    cipherAlphabet=[];
    htmlCipherAlphabet=[];
    if (checkBoxKeyCheck){
        // Add key in front of alphabet
        for(var i=0; i<key.length; i++){
            if (alphabet!='R47'){
                if (inChars[alphabet].indexOf(key.charAt(i).toLowerCase())>-1 && cipherAlphabet.indexOf(key.charAt(i).toLowerCase())<0){
                    cipherAlphabet.push(key.charAt(i).toLowerCase());
                }
            }else{
                if (inChars[alphabet].indexOf(key.charAt(i))>-1 && cipherAlphabet.indexOf(key.charAt(i))<0){
                    cipherAlphabet.push(key.charAt(i));
                    htmlCipherAlphabet.push(htmlChars[inChars[alphabet].indexOf(key.charAt(i))]);
                }
            }
        }
        for(var i=0; i<inChars[alphabet].length; i++){
            if (cipherAlphabet.indexOf(inChars[alphabet][i])<0){
                if (alphabet!='R47'){
                    cipherAlphabet.push(inChars[alphabet][i]);
                }else{
                    cipherAlphabet.push(inChars[alphabet][i]);
                    htmlCipherAlphabet.push(htmlChars[i]);
                }
            }
        }
    }else{
        cipherAlphabet=inChars[alphabet];
        htmlCipherAlphabet=htmlChars;
    }

    var splitChars=chars.split('');
    if (checkBoxShowAll==false && chars.length>0){
        newDiv+='<textarea id="caesarCipherResult" rows="5" cols="100" style="font-family:Arial">';
        rotNum=parseInt(rotation,10);
        for(var i=0; i<splitChars.length; i++){
            if (alphabet!='R47'){
                lowerChar=splitChars[i].toLowerCase();
            }else{
                lowerChar=splitChars[i];
            }
            if (method=='Encrypt'){
                charIndex=plainAlphabet.indexOf(lowerChar);
                if (charIndex>-1){
                    newCharIndex=(charIndex+rotNum)%plainAlphabet.length;
                    if (lowerChar==splitChars[i]){
                        newDiv+=cipherAlphabet[newCharIndex];
                    }else{
                        newDiv+=cipherAlphabet[newCharIndex].toUpperCase();
                    }
                }else{
                    newDiv+=splitChars[i];
                }
            }else{
                charIndex=cipherAlphabet.indexOf(lowerChar);
                if (charIndex>-1){
                    newCharIndex=(charIndex-rotNum+cipherAlphabet.length)%cipherAlphabet.length;
                    if (lowerChar==splitChars[i]){
                        newDiv+=plainAlphabet[newCharIndex];
                    }else{
                        newDiv+=plainAlphabet[newCharIndex].toUpperCase();
                    }
                }else{
                    newDiv+=splitChars[i];
                }
            }
        }
        newDiv+='</textarea>';
    }
    if (checkBoxShowAll==false){
        rotNum=parseInt(rotation,10);
        newDiv+='<br><br><table style="border:1px solid #000;"><tr><td colspan="27">Key</td></tr>';
        newDiv+='<tr><td>Original:&nbsp;&nbsp;</td>';

        var alphabetLength=plainAlphabet.length;
        if (alphabetLength>36){
            alphabetLength=47;
        }

        for(var i=0; i<alphabetLength; i++){
            if(alphabet!='R47'){
                newDiv+='<td style="font-family: Courier New;">'+plainAlphabet[i]+'</td>';
            }else{
                newDiv+='<td style="font-family: Courier New;">'+htmlPlainAlphabet[i]+'</td>';
            }
        }
        newDiv+='</tr><tr><td>Substitution:&nbsp;&nbsp;</td>';
        for(var i=0; i<alphabetLength; i++){
            newCharIndex=(i+rotNum)%inChars[alphabet].length;
            if(alphabet!='R47'){
                newDiv+='<td style="font-family: Courier New;">'+cipherAlphabet[newCharIndex]+'</td>';
            }else{
                newDiv+='<td style="font-family: Courier New;">'+htmlCipherAlphabet[newCharIndex]+'</td>';
            }
        }

        if (inChars[alphabet].length>36){
            newDiv+='</tr><tr><td colspan="47">&nbsp;</td></tr><tr><td>Original:&nbsp;&nbsp;</td>';
            for(i=47; i<inChars[alphabet].length; i++){
                newDiv+='<td style="font-family: Courier New;">'+htmlPlainAlphabet[i]+'</td>';
            }
            newDiv+='</tr><tr><td>Substitution:&nbsp;&nbsp;</td>';
            for(i=47; i<inChars[alphabet].length; i++){
                newCharIndex=(i+rotNum)%inChars[alphabet].length;
                newDiv+='<td style="font-family: Courier New;">'+htmlCipherAlphabet[newCharIndex]+'</td>';
            }

        }
        newDiv+='</tr></table>';

    }
    if (checkBoxShowAll==true && chars.length>0){
        newDiv+='<textarea id="caesarCipherResult" rows="15" cols="100" style="font-family:Arial">';
        for(var r=0; r<plainAlphabet.length; r++){
            newDiv+='Rotation '+r+':\n';
            for(var i=0; i<splitChars.length; i++){
                if (alphabet!='R47'){
                    lowerChar=splitChars[i].toLowerCase();
                }else{
                    lowerChar=splitChars[i];
                }

                if (method=='Encrypt'){
                    charIndex=plainAlphabet.indexOf(lowerChar);
                    if (charIndex>-1){
                        newCharIndex=(charIndex+r)%plainAlphabet.length;
                        if (lowerChar==splitChars[i]){
                            newDiv+=cipherAlphabet[newCharIndex];
                        }else{
                            newDiv+=cipherAlphabet[newCharIndex].toUpperCase();
                        }
                    }else{
                        newDiv+=splitChars[i];
                    }
                }else{
                    charIndex=cipherAlphabet.indexOf(lowerChar);
                    if (charIndex>-1){
                        newCharIndex=(charIndex-r+cipherAlphabet.length)%cipherAlphabet.length;
                        if (lowerChar==splitChars[i]){
                            newDiv+=plainAlphabet[newCharIndex];
                        }else{
                            newDiv+=plainAlphabet[newCharIndex].toUpperCase();
                        }
                    }else{
                        newDiv+=splitChars[i];
                    }
                }
            }
            if (r<plainAlphabet.length-1){
                newDiv+='\n\n';
            }
        }
        newDiv+='</textarea>';
    }

    document.getElementById('caesarCipherDiv').innerHTML=newDiv;
}
function baconianCipher(){
    var dropDownVersion = document.getElementById("baconianCipherVersion");
    var version = dropDownVersion.options[dropDownVersion.selectedIndex].value;
    var dropDownMethod = document.getElementById("baconianCipherMethod");
    var method = dropDownMethod.options[dropDownMethod.selectedIndex].value;
	var checkboxSwap=document.getElementById('baconianCipherCheckboxSwap').checked;
    var chars=document.getElementById('baconianCipherText').value;
    var splitChars=chars.split('');

    if (chars.length>0){
        var newDiv='<b>Result:</b><br>';
    }else{
        if(version=='Standard'){
			if (checkboxSwap==false){
				newDiv='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="8">Key</td></tr><tr><td>Original:
         align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">AAAAA</td><td align="center" style="font-family: Courier New;">AAAAB</td><td align="center" style="font-family: Courier New;">AAABA</td><td align="center" style="font-family: Courier New;">AAABB</td><td align="center" style="font-family: Courier New;">AABAA</td><td align="center" style="font-family: Courier New;">AABAB</td><td align="center" style="font-family: Courier New;">AABBA</td><td align="center" style="font-family: Courier New;">AABBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">i-j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABAAA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">r</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u-v</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABBB</td></tr></tbody></table>';
			}else{
				newDiv='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="8">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BBBBB</td><td align="center" style="font-family: Courier New;">BBBBA</td><td align="center" style="font-family: Courier New;">BBBAB</td><td align="center" style="font-family: Courier New;">BBBAA</td><td align="center" style="font-family: Courier New;">BBABB</td><td align="center" style="font-family: Courier New;">BBABA</td><td align="center" style="font-family: Courier New;">BBAAB</td><td align="center" style="font-family: Courier New;">BBAAA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">i-j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BABBB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAAAA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">r</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u-v</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABBBB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABAAA</td></tr></tbody></table>';
			}
		}else{
			if (checkboxSwap==false){
				newDiv='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="9">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td><td align="center" style="font-family: Courier New;">i</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">AAAAA</td><td align="center" style="font-family: Courier New;">AAAAB</td><td align="center" style="font-family: Courier New;">AAABA</td><td align="center" style="font-family: Courier New;">AAABB</td><td align="center" style="font-family: Courier New;">AABAA</td><td align="center" style="font-family: Courier New;">AABAB</td><td align="center" style="font-family: Courier New;">AABBA</td><td align="center" style="font-family: Courier New;">AABBB</td><td align="center" style="font-family: Courier New;">ABAAA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td><td align="center" style="font-family: Courier New;">r</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBBB</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">BAAAB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABBB</td><td align="center" style="font-family: Courier New;">BBAAA</td><td align="center" style="font-family: Courier New;">BBAAB</td></tr></tbody></table>';
			}else{
				newDiv='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="9">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td><td align="center" style="font-family: Courier New;">i</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BBBBB</td><td align="center" style="font-family: Courier New;">BBBBA</td><td align="center" style="font-family: Courier New;">BBBAB</td><td align="center" style="font-family: Courier New;">BBBAA</td><td align="center" style="font-family: Courier New;">BBABB</td><td align="center" style="font-family: Courier New;">BBABA</td><td align="center" style="font-family: Courier New;">BBAAB</td><td align="center" style="font-family: Courier New;">BBAAA</td><td align="center" style="font-family: Courier New;">BABBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td><td align="center" style="font-family: Courier New;">r</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">ABBBB</td><td align="center" style="font-family: Courier New;">ABBBA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABAAA</td><td align="center" style="font-family: Courier New;">AABBB</td><td align="center" style="font-family: Courier New;">AABBA</td></tr></tbody></table>';
			}
		}
        document.getElementById('baconianCipherDiv').innerHTML=newDiv;
        return;
    }
    newDiv+='<textarea id="baconianCipherResult" rows="5" cols="100" style="font-family:Arial">';

    if (method=='Encrypt'){
        for(i=0; i<splitChars.length; i++){
            lowerChar=splitChars[i].toLowerCase();
            charIndex=inChars.indexOf(lowerChar);
            if (charIndex>-1){
                if (version=='Standard'){
					if (checkboxSwap==false){
						newDiv+=cipher[charIndex];
					}else{
						newDiv+=cipher3[charIndex];
					}
                }else{
					if (checkboxSwap==false){
						newDiv+=cipher2[charIndex];
					}else{
						newDiv+=cipher4[charIndex];
					}
                }
            }else{
                newDiv+=splitChars[i];
            }
        }
        newDiv+='</textarea>';
    }else{
        var charGroup='';
        for(i=0; i<splitChars.length; i++){
            upperChar=splitChars[i].toUpperCase();
            if (upperChar=='A' || upperChar=='B'){
                charGroup+=upperChar;
            }
            if (charGroup.length==5){
                if (version=='Standard'){
					if (checkboxSwap==false){
						charIndex=cipher.indexOf(charGroup);
					}else{
						charIndex=cipher3.indexOf(charGroup);
					}
                    if (charIndex>-1){
                        newDiv+=inChars[charIndex];
                    }
                }else{
					if (checkboxSwap==false){
						charIndex=cipher2.indexOf(charGroup);
					}else{
						charIndex=cipher4.indexOf(charGroup);
					}
                    if (charIndex>-1){
                        newDiv+=inChars[charIndex];
                    }
                }
                charGroup='';
            }
            if (charGroup.length==0 && upperChar==' '){
                newDiv+=' ';
            }
        }
    }

    newDiv+='</textarea>';

    newDiv+='<br><br>';
    if(version=='Standard'){
        if (checkboxSwap==false){
			newDiv+='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="8">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">AAAAA</td><td align="center" style="font-family: Courier New;">AAAAB</td><td align="center" style="font-family: Courier New;">AAABA</td><td align="center" style="font-family: Courier New;">AAABB</td><td align="center" style="font-family: Courier New;">AABAA</td><td align="center" style="font-family: Courier New;">AABAB</td><td align="center" style="font-family: Courier New;">AABBA</td><td align="center" style="font-family: Courier New;">AABBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">i-j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABAAA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">r</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u-v</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABBB</td></tr></tbody></table>';
		}else{
			newDiv+='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="8">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BBBBB</td><td align="center" style="font-family: Courier New;">BBBBA</td><td align="center" style="font-family: Courier New;">BBBAB</td><td align="center" style="font-family: Courier New;">BBBAA</td><td align="center" style="font-family: Courier New;">BBABB</td><td align="center" style="font-family: Courier New;">BBABA</td><td align="center" style="font-family: Courier New;">BBAAB</td><td align="center" style="font-family: Courier New;">BBAAA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">i-j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BABBB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAAAA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">r</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u-v</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABBBB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABAAA</td></tr></tbody></table>';
		}
    }else{
		if (checkboxSwap==false){
			newDiv+='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="9">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td><td align="center" style="font-family: Courier New;">i</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">AAAAA</td><td align="center" style="font-family: Courier New;">AAAAB</td><td align="center" style="font-family: Courier New;">AAABA</td><td align="center" style="font-family: Courier New;">AAABB</td><td align="center" style="font-family: Courier New;">AABAA</td><td align="center" style="font-family: Courier New;">AABAB</td><td align="center" style="font-family: Courier New;">AABBA</td><td align="center" style="font-family: Courier New;">AABBB</td><td align="center" style="font-family: Courier New;">ABAAA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td><td align="center" style="font-family: Courier New;">r</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBBB</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">BAAAB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABBB</td><td align="center" style="font-family: Courier New;">BBAAA</td><td align="center" style="font-family: Courier New;">BBAAB</td></tr></tbody></table>';
		}else{
			newDiv+='<br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="9">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td><td align="center" style="font-family: Courier New;">i</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BBBBB</td><td align="center" style="font-family: Courier New;">BBBBA</td><td align="center" style="font-family: Courier New;">BBBAB</td><td align="center" style="font-family: Courier New;">BBBAA</td><td align="center" style="font-family: Courier New;">BBABB</td><td align="center" style="font-family: Courier New;">BBABA</td><td align="center" style="font-family: Courier New;">BBAAB</td><td align="center" style="font-family: Courier New;">BBAAA</td><td align="center" style="font-family: Courier New;">BABBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td><td align="center" style="font-family: Courier New;">r</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">ABBBB</td><td align="center" style="font-family: Courier New;">ABBBA</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">u</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABAAA</td><td align="center" style="font-family: Courier New;">AABBB</td><td align="center" style="font-family: Courier New;">AABBA</td></tr></tbody></table>';
		}
    }
    document.getElementById('baconianCipherDiv').innerHTML=newDiv;
}
