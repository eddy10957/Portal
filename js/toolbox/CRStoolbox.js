

// Variabili Globali
var validCharsN=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var validCharsG=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','\xE4','\xF6','\xFC','\xDF');
var validCharsSw=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','\xE5','\xE4','\xF6');
var diacriticMethods=new Array('a=1G','a=0G','a=1Sw','a=0Sw');
var validChars=validCharsN;
var validNums= new Array('0','1','2','3','4','5','6','7','8','9');
var charValues=new Array();
for(i=0; i<26; i++){
  charValues[i+1]=validChars[i];
}
var charValues_wordsvalue=new Array();
for(i=0; i<26; i++){
    charValues[validChars[i]]=i+1;
}

var inChars=new Array();
inChars['R5']=new Array('0','1','2','3','4','5','6','7','8','9');
inChars['R13']=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
inChars['R47']=new Array('!','"','#','$','%','&','\'','(',')','*','+',',','-','.','index.html','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~');
var inChars = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var cipher = new Array('AAAAA','AAAAB','AAABA','AAABB','AABAA','AABAB','AABBA','AABBB','ABAAA','ABAAA','ABAAB','ABABA','ABABB','ABBAA','ABBAB','ABBBA','ABBBB','BAAAA','BAAAB','BAABA','BAABB','BAABB','BABAA','BABAB','BABBA','BABBB');
var cipher2 = new Array('AAAAA','AAAAB','AAABA','AAABB','AABAA','AABAB','AABBA','AABBB','ABAAA','ABAAB','ABABA','ABABB','ABBAA','ABBAB','ABBBA','ABBBB','BAAAA','BAAAB','BAABA','BAABB','BABAA','BABAB','BABBA','BABBB','BBAAA','BBAAB');
var cipher3 = new Array('BBBBB','BBBBA','BBBAB','BBBAA','BBABB','BBABA','BBAAB','BBAAA','BABBB','BABBB','BABBA','BABAB','BABAA','BAABB','BAABA','BAAAB','BAAAA','ABBBB','ABBBA','ABBAB','ABBAA','ABBAA','ABABB','ABABA','ABAAB','ABAAA');
var cipher4 = new Array('BBBBB','BBBBA','BBBAB','BBBAA','BBABB','BBABA','BBAAB','BBAAA','BABBB','BABBA','BABAB','BABAA','BAABB','BAABA','BAAAB','BAAAA','ABBBB','ABBBA','ABBAB','ABBAA','ABABB','ABABA','ABAAB','ABAAA','AABBB','AABBA');

htmlChars=new Array('&#33;','&#34;','&#35;','&#36;','&#37;','&#38;','&#39;','&#40;','&#41;','&#42;','&#43;','&#44;','&#45;','&#46;','index.html','&#48;','&#49;','&#50;','&#51;','&#52;','&#53;','&#54;','&#55;','&#56;','&#57;','&#58;','&#59;','&#60;','&#61;','&#62;','&#63;','&#64;','&#65;','&#66;','&#67;','&#68;','&#69;','&#70;','&#71;','&#72;','&#73;','&#74;','&#75;','&#76;','&#77;','&#78;','&#79;','&#80;','&#81;','&#82;','&#83;','&#84;','&#85;','&#86;','&#87;','&#88;','&#89;','&#90;','&#91;','&#92;','&#93;','&#94;','&#95;','&#96;','&#97;','&#98;','&#99;','&#100;','&#101;','&#102;','&#103;','&#104;','&#105;','&#106;','&#107;','&#108;','&#109;','&#110;','&#111;','&#112;','&#113;','&#114;','&#115;','&#116;','&#117;','&#118;','&#119;','&#120;','&#121;','&#122;','&#123;','&#124;','&#125;','&#126;');
conversion = {'text': new Array('','','','','','','','','','\t','\n','','','\r','','','','','','','','','','','','','','','','','','',' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','index.html','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','','�','','�','�','�','�','�','�','�','�','�','�','�','','�','','','�','�','�','�','�','�','�','�','�','�','�','�','','�','�',' ','�','�','�','�','�','�','�','�','�','�','�','�',' ','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�'),
              'html': new Array('','','','','','','','','','','<br>','','','<br>','','','','','','','','','','','','','','','','','','','&#32;','&#33;','&#34;','&#35;','&#36;','&#37;','&#38;','&#39;','&#40;','&#41;','&#42;','&#43;','&#44;','&#45;','&#46;','index.html','&#48;','&#49;','&#50;','&#51;','&#52;','&#53;','&#54;','&#55;','&#56;','&#57;','&#58;','&#59;','&#60;','&#61;','&#62;','&#63;','&#64;','&#65;','&#66;','&#67;','&#68;','&#69;','&#70;','&#71;','&#72;','&#73;','&#74;','&#75;','&#76;','&#77;','&#78;','&#79;','&#80;','&#81;','&#82;','&#83;','&#84;','&#85;','&#86;','&#87;','&#88;','&#89;','&#90;','&#91;','&#92;','&#93;','&#94;','&#95;','&#96;','&#97;','&#98;','&#99;','&#100;','&#101;','&#102;','&#103;','&#104;','&#105;','&#106;','&#107;','&#108;','&#109;','&#110;','&#111;','&#112;','&#113;','&#114;','&#115;','&#116;','&#117;','&#118;','&#119;','&#120;','&#121;','&#122;','&#123;','&#124;','&#125;','&#126;','&#127;','&#128;','&#129;','&#130;','&#131;','&#132;','&#133;','&#134;','&#135;','&#136;','&#137;','&#138;','&#139;','&#140;','&#141;','&#142;','&#143;','&#144;','&#145;','&#146;','&#147;','&#148;','&#149;','&#150;','&#151;','&#152;','&#153;','&#154;','&#155;','&#156;','&#157;','&#158;','&#159;','&#160;','&#161;','&#162;','&#163;','&#164;','&#165;','&#166;','&#167;','&#168;','&#169;','&#170;','&#171;','&#172;','&#173;','&#174;','&#175;','&#176;','&#177;','&#178;','&#179;','&#180;','&#181;','&#182;','&#183;','&#184;','&#185;','&#186;','&#187;','&#188;','&#189;','&#190;','&#191;','&#192;','&#193;','&#194;','&#195;','&#196;','&#197;','&#198;','&#199;','&#200;','&#201;','&#202;','&#203;','&#204;','&#205;','&#206;','&#207;','&#208;','&#209;','&#210;','&#211;','&#212;','&#213;','&#214;','&#215;','&#216;','&#217;','&#218;','&#219;','&#220;','&#221;','&#222;','&#223;','&#224;','&#225;','&#226;','&#227;','&#228;','&#229;','&#230;','&#231;','&#232;','&#233;','&#234;','&#235;','&#236;','&#237;','&#238;','&#239;','&#240;','&#241;','&#242;','&#243;','&#244;','&#245;','&#246;','&#247;','&#248;','&#249;','&#250;','&#251;','&#252;','&#253;','&#254;','&#255;'),
              'htmlShow': new Array('','','','','','','','','','','<br>','','','<br>','','','','','','','','','','','','','','','','','','','&amp;#32;','&amp;#33;','&amp;#34;','&amp;#35;','&amp;#36;','&amp;#37;','&amp;#38;','&amp;#39;','&amp;#40;','&amp;#41;','&amp;#42;','&amp;#43;','&amp;#44;','&amp;#45;','&amp;#46;','&amp;#47;','&amp;#48;','&amp;#49;','&amp;#50;','&amp;#51;','&amp;#52;','&amp;#53;','&amp;#54;','&amp;#55;','&amp;#56;','&amp;#57;','&amp;#58;','&amp;#59;','&amp;#60;','&amp;#61;','&amp;#62;','&amp;#63;','&amp;#64;','&amp;#65;','&amp;#66;','&amp;#67;','&amp;#68;','&amp;#69;','&amp;#70;','&amp;#71;','&amp;#72;','&amp;#73;','&amp;#74;','&amp;#75;','&amp;#76;','&amp;#77;','&amp;#78;','&amp;#79;','&amp;#80;','&amp;#81;','&amp;#82;','&amp;#83;','&amp;#84;','&amp;#85;','&amp;#86;','&amp;#87;','&amp;#88;','&amp;#89;','&amp;#90;','&amp;#91;','&amp;#92;','&amp;#93;','&amp;#94;','&amp;#95;','&amp;#96;','&amp;#97;','&amp;#98;','&amp;#99;','&amp;#100;','&amp;#101;','&amp;#102;','&amp;#103;','&amp;#104;','&amp;#105;','&amp;#106;','&amp;#107;','&amp;#108;','&amp;#109;','&amp;#110;','&amp;#111;','&amp;#112;','&amp;#113;','&amp;#114;','&amp;#115;','&amp;#116;','&amp;#117;','&amp;#118;','&amp;#119;','&amp;#120;','&amp;#121;','&amp;#122;','&amp;#123;','&amp;#124;','&amp;#125;','&amp;#126;','&amp;#127;','&amp;#128;','&amp;#129;','&amp;#130;','&amp;#131;','&amp;#132;','&amp;#133;','&amp;#134;','&amp;#135;','&amp;#136;','&amp;#137;','&amp;#138;','&amp;#139;','&amp;#140;','&amp;#141;','&amp;#142;','&amp;#143;','&amp;#144;','&amp;#145;','&amp;#146;','&amp;#147;','&amp;#148;','&amp;#149;','&amp;#150;','&amp;#151;','&amp;#152;','&amp;#153;','&amp;#154;','&amp;#155;','&amp;#156;','&amp;#157;','&amp;#158;','&amp;#159;','&amp;#160;','&amp;#161;','&amp;#162;','&amp;#163;','&amp;#164;','&amp;#165;','&amp;#166;','&amp;#167;','&amp;#168;','&amp;#169;','&amp;#170;','&amp;#171;','&amp;#172;','&amp;#173;','&amp;#174;','&amp;#175;','&amp;#176;','&amp;#177;','&amp;#178;','&amp;#179;','&amp;#180;','&amp;#181;','&amp;#182;','&amp;#183;','&amp;#184;','&amp;#185;','&amp;#186;','&amp;#187;','&amp;#188;','&amp;#189;','&amp;#190;','&amp;#191;','&amp;#192;','&amp;#193;','&amp;#194;','&amp;#195;','&amp;#196;','&amp;#197;','&amp;#198;','&amp;#199;','&amp;#200;','&amp;#201;','&amp;#202;','&amp;#203;','&amp;#204;','&amp;#205;','&amp;#206;','&amp;#207;','&amp;#208;','&amp;#209;','&amp;#210;','&amp;#211;','&amp;#212;','&amp;#213;','&amp;#214;','&amp;#215;','&amp;#216;','&amp;#217;','&amp;#218;','&amp;#219;','&amp;#220;','&amp;#221;','&amp;#222;','&amp;#223;','&amp;#224;','&amp;#225;','&amp;#226;','&amp;#227;','&amp;#228;','&amp;#229;','&amp;#230;','&amp;#231;','&amp;#232;','&amp;#233;','&amp;#234;','&amp;#235;','&amp;#236;','&amp;#237;','&amp;#238;','&amp;#239;','&amp;#240;','&amp;#241;','&amp;#242;','&amp;#243;','&amp;#244;','&amp;#245;','&amp;#246;','&amp;#247;','&amp;#248;','&amp;#249;','&amp;#250;','&amp;#251;','&amp;#252;','&amp;#253;','&amp;#254;','&amp;#255;'),
              'b32': new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','2','3','4','5','6','7'),
              'bin32': new Array ('00000','00001','00010','00011','00100','00101','00110','00111','01000','01001','01010','01011','01100','01101','01110','01111','10000','10001','10010','10011','10100','10101','10110','10111','11000','11001','11010','11011','11100','11101','11110','11111'),
              'b64': new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','index.html'),
              'bin64': new Array('000000','000001','000010','000011','000100','000101','000110','000111','001000','001001','001010','001011','001100','001101','001110','001111','010000','010001','010010','010011','010100','010101','010110','010111','011000','011001','011010','011011','011100','011101','011110','011111','100000','100001','100010','100011','100100','100101','100110','100111','101000','101001','101010','101011','101100','101101','101110','101111','110000','110001','110010','110011','110100','110101','110110','110111','111000','111001','111010','111011','111100','111101','111110','111111')};


alphabets={'bin': '01',
          'oct': '01234567',
          'dec': '0123456789',
          'hex': '0123456789ABCDEF'};

          var defaultDiacriticsRemovalMap = [
    {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
    {'base':'AA','letters':/[\uA732]/g},
    {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
    {'base':'AO','letters':/[\uA734]/g},
    {'base':'AU','letters':/[\uA736]/g},
    {'base':'AV','letters':/[\uA738\uA73A]/g},
    {'base':'AY','letters':/[\uA73C]/g},
    {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
    {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
    {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
    {'base':'DZ','letters':/[\u01F1\u01C4]/g},
    {'base':'Dz','letters':/[\u01F2\u01C5]/g},
    {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
    {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
    {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
    {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
    {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
    {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
    {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
    {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
    {'base':'LJ','letters':/[\u01C7]/g},
    {'base':'Lj','letters':/[\u01C8]/g},
    {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
    {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
    {'base':'NJ','letters':/[\u01CA]/g},
    {'base':'Nj','letters':/[\u01CB]/g},
    {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
    {'base':'OI','letters':/[\u01A2]/g},
    {'base':'OO','letters':/[\uA74E]/g},
    {'base':'OU','letters':/[\u0222]/g},
    {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
    {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
    {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
    {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
    {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
    {'base':'TZ','letters':/[\uA728]/g},
    {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
    {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
    {'base':'VY','letters':/[\uA760]/g},
    {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
    {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
    {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
    {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
    {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
    {'base':'aa','letters':/[\uA733]/g},
    {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
    {'base':'ao','letters':/[\uA735]/g},
    {'base':'au','letters':/[\uA737]/g},
    {'base':'av','letters':/[\uA739\uA73B]/g},
    {'base':'ay','letters':/[\uA73D]/g},
    {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
    {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
    {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
    {'base':'dz','letters':/[\u01F3\u01C6]/g},
    {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
    {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
    {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
    {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
    {'base':'hv','letters':/[\u0195]/g},
    {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
    {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
    {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
    {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
    {'base':'lj','letters':/[\u01C9]/g},
    {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
    {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
    {'base':'nj','letters':/[\u01CC]/g},
    {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
    {'base':'oi','letters':/[\u01A3]/g},
    {'base':'ou','letters':/[\u0223]/g},
    {'base':'oo','letters':/[\uA74F]/g},
    {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
    {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
    {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
    {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
    {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
    {'base':'tz','letters':/[\uA729]/g},
    {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
    {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
    {'base':'vy','letters':/[\uA761]/g},
    {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
    {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
    {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
    {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
];
var changes;
var alphaCharsL=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var alphaCharsU=new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var nums= new Array('0','1','2','3','4','5','6','7','8','9');
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
