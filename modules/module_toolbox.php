<script src="../js/toolbox/CRSconst.js"></script>
<script src="../js/toolbox/CRStoolbox.js"></script>
<script src="../js/toolbox/CRSinterface.js"></script>

<style>
    .tool{
        display: none;
    }
</style>


<!-- Navigation -->
<div id="navigation">
  <div class="bodyHeader"><h1><b> Funzioni di Testo </b> </h1></div>
  <div class="bodySection"><table width="750px">
        <tr>
            <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#numtochar").show();'> Da numeri a lettere</a></td>
            <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#textreverse").show();'> Testo al contrario </a></td>
            <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#asciiConversion").show();'> Conversione ASCII  </a></td>
            <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#textanalysis").show();'> Analizzatore di testo </a></td>
            <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#wordvalue").show();'> Valore delle parole </a></td>
        </tr>
      </table>
    <div class="bodyHeader"><h1><b> Decriptazione e Cifrari </b></h1></div>
    <div class="bodySection"><table width="750px">
        <tr>
          <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#cesarcipher").show()';> Cifrario di Cesare </a> </td>
          <td width"25px"><a href="#" onclick='$(".tool").hide(); $("#baconcipher").show()';> Cifrario di Bacon </a> </td>
        </tr>
    </table>
</div>

<!-- Toolbox -->
<div id="toolbox">

    <div id="numtochar" class="tool">
      <form>
      <table>
        <h2>Numbers to letters</h2>
        <tr><td align="left" style="padding-left:25px;">Method: <select id="numbersToLettersMethod" onChange="setCharValues_numtolett">
          <option selected value="a=1">A=1 ... Z=26</option>
          <option value="a=0">A=0 ... Z=25</option>
          <option value="a=26">A=26 ... Z=1</option>
          <option value="a=25">A=25 ... Z=0</option>
          <option value="a=1G">A=1 ... Z=26, &auml;=27, &ouml;=28, &uuml;=29, &szlig;=30</option>
          <option value="a=0G">A=0 ... Z=25, &auml;=26, &ouml;=27, &uuml;=28, &szlig;=29</option>
          <option value="a=1Sw">A=1 ... Z=26, &aring;=27, &auml;=28, &ouml;=29</option>
          <option value="a=0Sw">A=0 ... Z=25, &aring;=26, &auml;=27, &ouml;=28</option>
        </select></td></tr>
          <tr><td align="left" style="padding-left:25px;">Sostituisci numeri sconosciuti: <select id="numbersToLettersReplace" onChange="setCharValues_numtolett">
          <option selected value=" ">&lt;Space&gt;</option>
          <option value="?">?</option>
          <option value="num">&lt;Original&gt;</option>
        </select></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><textarea id="numtochar-input" rows="5" cols="100" style="font-family:Arial" onKeyDown="calculateNumbersToLetters()" onKeyUp="calculateNumbersToLetters()"></textarea></td></tr>
        <tr><td align="left" style="padding-left:25px;"><input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);"></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><div id="numbersToLettersDiv">
        </td></tr>
      </table>
      </form>
      </div>
    </div>
    <div id="textreverse" class="tool">
        <h2>Text reverse</h2>
        <form>
        <input id="textReverseText" type="text" oninput="textAction();"/>
        <table><tr><td colspan="2" align="left" style="padding-left:25px;">
                  <input type="radio" name="actionType" value="reverseText" checked onchange="textAction();">Testo al contrario
                </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="reverseTextByLine" onchange="textAction();">Testo al contrario per riga
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="reverseWords" onchange="textAction();">Ordine parole testo al contrario
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="reverseWordsByLine" onchange="textAction();">Ordine parole testo al contrario per riga
          </td></tr>
          <tr><td align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="reverseWordCharacters" onchange="textAction();">Ordine caratteri parola al contrario
          </td><td>
            <input type="checkbox" id="reverseWordCharactersCase" onchange="textAction();" disabled><span id="reverseWordCharactersCaseSpan" style="color: #888888">Mantieni fissa posizione lettera maiuscola</span>
          </td></tr>
          <tr><td align="left" style="vertical-align: top; padding-left:25px;">
            <input type="radio" name="actionType" value="randomiseWordCharacters" onchange="textAction();">Ordine random caratteri parola
          </td><td>
            <input type="checkbox" id="randomiseWordCharactersCase" onchange="textAction();" disabled><span id="randomiseWordCharactersCaseSpan" style="color: #888888">Mantieni fissa posizione lettera maiuscola</span><br>
            <input type="checkbox" id="randomiseWordCharactersFirstLast" onchange="textAction();" disabled><span id="randomiseWordCharactersFirstLastSpan" style="color: #888888">Mantieni fissa la posizione del primo ed ultimo carattere</span>
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="changeCase" onchange="textAction();">Cambia carattere maiuscolo e minuscolo
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="textToUpper" onchange="textAction();">Cambia in lettere maiuscole
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input type="radio" name="actionType" value="textToLower" onchange="textAction();">Cambia in lettere minuscole
          </td></tr>
          <tr><td align="left" style="vertical-align: top; padding-left:25px;">
            <input type="radio" name="actionType" value="textUpsideDown" onchange="textAction();"> Lettere capovolte
          </td><td>
            <input type="checkbox" id="textUpsideDownReverse" onchange="textAction();" disabled checked><span id="textUpsideDownReverseSpan" style="color: #888888">Testo al contrario</span><br>
            <input type="checkbox" id="textUpsideDownRemove" onchange="textAction();" disabled><span id="textUpsideDownRemoveSpan" style="color: #888888">Rimuovi caratteri sconosciuti</span>
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px;">
            <input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);textAction();">
          </td></tr>
          <tr><td colspan="2" align="left" style="padding-left:25px; padding-right:25px;"><div id="textReverseDiv"></div></td></tr>
        </table>
        </form>
        </div>

    <div id="asciiConversion" class="tool">
      <h2> Conversione ASCII </h2>
      <form>
          <table width="90%" style="text-align:left; border: 2px #000000 solid;">
          <tr><td align="left" style="padding-left:25px;">Da:</td><td><select id="asciiFromType" onChange="asciiConversion()">
          <option selected value="text">Text (ASCII)</option>
          <option value="bin">Binary (Base2)</option>
          <option value="oct">Octal (Base8)</option>
          <option value="dec">Decimal (Base10)</option>
          <option value="hex">Hexadecimal (Base16)</option>
          <option value="b32">Base32</option>
          <option value="b64">Base64</option>
          <option value="html">Html</option>
          </select></td></tr>
          <tr><td align="left" style="padding-left:25px;">To:</td><td><select id="asciiToType" onChange="asciiConversion()">
          <option value="text">Text (ASCII)</option>
          <option selected value="bin">Binary (Base2)</option>
          <option value="oct">Octal (Base8)</option>
          <option value="dec">Decimal (Base10)</option>
          <option value="hex">Hexadecimal (Base16)</option>
          <option value="b32">Base32</option>
          <option value="b64">Base64</option>
          <option value="html">Html</option>
          </select></td></tr>
          <tr><td align="left" style="padding-left:25px;">&nbsp;</td><td><input type="checkbox" id="asciiCheckNoSpaces" onClick="asciiConversion()"> Remove non-encoded spaces from the result</td></tr>
          <tr><td align="left" valign="top" style="padding-left:25px; padding-right:25px;">Text:</td><td><textarea id="asciiText" rows="5" cols="100" style="font-family:Arial" onKeyDown="asciiConversion()" onKeyUp="asciiConversion()"></textarea></td></tr>
          <tr><td align="left" style="padding-left:25px;">&nbsp;</td><td><input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);"></td></tr>
          <tr><td align="left" style="padding-left:25px; padding-right:25px;">&nbsp;</td><td><div id="asciiDiv"></div></td></tr>
              </table>
            </form>
          </div>

    <div id="textanalysis" class="tool">
      <h2> Analizzatore testo </h2>
      <h4>Questo è un tool per un'analisi veloce del testo. Questo tool determina: <i>Numero di parole</i>, <i>Numero di caratteri</i> , <i>numero di caratteri senza spazio</i> ,<i>analisi di frequenza</i> .<br>Inserisci il testo di analizzare.</h4>
      <form>
        <table width="90%" style="text-align:left; border: 2px #000000 solid;">
        <tr><td align="left" style="padding-left:25px;">Case sensitive: <input type="checkbox" id="textAnalysisCaseSensitive" onClick="analyseText()"></td></tr>
        <tr><td align="left" style="padding-left:25px;">Remove diacritics: <input type="checkbox" id="textAnalysisCheckboxDiacritics" onClick="analyseText()"> <span style="font-size: 0.8em; color:#888888;">(é → e, ä → a, ...)</span></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><textarea id="textAnalysisText" rows="5" cols="100" style="font-family:Arial" onKeyDown="analyseText()" onKeyUp="analyseText()"></textarea></td></tr>
        <tr><td align="left" style="padding-left:25px;"><input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);"></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><div id="textAnalysisDiv"></div></td></tr>
      </table></form></div>

    <div id="wordvalue" class="tool">
      <h2> Valore delle parole </h2>
      <h4>Enter the character assignment and the text in the text field below and the value (digital root) of the text will be calculated. It is possible to take also numbers in the text into account or to leave them out and to hide the entire calculation and only show the final result. When the final option is checked, additionally the word values of all words will be counted separately (separated by a space or a new line).</h4>
      <table width="90%" style="text-align:left; border: 2px #000000 solid;">
      <tr><td align="left" style="padding-left:25px;">Method: <select id="wordValueMethod" onChange="setCharValues_wordsvalue()">
      <option selected value="a=1">A=1 ... Z=26</option>
      <option value="a=0">A=0 ... Z=25</option>
      <option value="a=26">A=26 ... Z=1</option>
      <option value="a=25">A=25 ... Z=0</option>
      <option value="vanity">A=2 ... Z=9 (Vanity code)</option>
      <option value="scrabbleNL">A=1 ... Z=4 (Scrabble Dutch)</option>
      <option value="scrabbleUK">A=1 ... Z=10 (Scrabble English)</option>
      <option value="scrabbleDE">A=1 ... Z=3 (Scrabble German)</option>
      <option value="table0">A=0 ... Z=5 (Table 0-9)</option>
      <option value="table1">A=1 ... Z=6 (Table 1-0)</option>
      <option value="table2">A=1 ... Z=8 (Table 1-9)</option>
      <option value="a=1G">A=1 ... Z=26, &auml;=27, &ouml;=28, &uuml;=29, &szlig;=30</option>
      <option value="a=0G">A=0 ... Z=25, &auml;=26, &ouml;=27, &uuml;=28, &szlig;=29</option>
      <option value="a=1Sw">A=1 ... Z=26, &aring;=27, &auml;=28, &ouml;=29</option>
      <option value="a=0Sw">A=0 ... Z=25, &aring;=26, &auml;=27, &ouml;=28</option>
      </select></td></tr>
      <tr><td align="left" style="padding-left:25px;">Count numbers: <input type="checkbox" id="wordValueCheckboxNumbers" checked onClick="calculateWordValue()"></td></tr>
      <tr><td align="left" style="padding-left:25px;">Remove diacritics: <input type="checkbox" id="wordValueCheckboxDiacritics" checked onClick="calculateWordValue()"> <span style="font-size: 0.8em; color:#888888;">(é → e, ä → a, ...)</span></td></tr>
      <tr><td align="left" style="padding-left:25px;">Show calculation: <input type="checkbox" id="wordValueCheckboxCalculation" checked onClick="calculateWordValue()"></td></tr>
      <tr><td align="left" style="padding-left:25px;">Count separate words: <input type="checkbox" id="wordValueCheckboxSeparate" onClick="calculateWordValue()"></td></tr>
      <tr><td align="left" style="padding-left:25px; padding-right:25px;"><textarea id="wordValueText" rows="5" cols="100" style="font-family:Arial" onKeyDown="calculateWordValue()" onKeyUp="calculateWordValue()"></textarea></td></tr>
      <tr><td align="left" style="padding-left:25px;"><input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);"></td></tr>
      <tr><td align="left" style="padding-left:25px; padding-right:25px;"><div id="wordValueDiv">
      </td></tr>
      </table></form></div>

    <div id="cesarcipher" class="tool">
      <table width="90%" style="text-align:left; border: 2px #000000 solid;">
        <tr><td align="left" style="padding-left:25px;">Alphabet: <select id="caesarCipherAlphabet" onChange="caesarCipher(1)">
        <option value="R5">Numbers only (ROT5)</option>
        <option selected value="R13">Letters only (ROT13)</option>
        <option value="R47">Ascii characters 33 through 126 (ROT47)</option>
        </select></td></tr>
        <tr><td align="left" style="padding-left:25px;">Rotate # places: <select id="caesarCipherRotation" onChange="caesarCipher(0)">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option selected value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        </select></td></tr>
        <tr><td align="left" style="padding-left:25px;">Show all rotations: <input type="checkbox" id="caesarCipherShowAll" onClick="deRot()"></td></tr>
        <tr><td align="left" style="padding-left:25px;">Use alphabet key: <input type="checkbox" id="caesarCipherKeyCheck" onClick="deKey()"> <input id="caesarCipherKey" type="text" disabled="true" onKeyDown="caesarCipher(0)" onKeyUp="caesarCipher(0)"></td></tr>
        <tr><td align="left" style="padding-left:25px;">Method: <select id="caesarCipherMethod" onChange="caesarCipher(0)">
        <option selected value="Decrypt">Decrypt</option>
        <option value="Encrypt">Encrypt</option>
        </select></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><textarea id="caesarCipherText" rows="5" cols="100" style="font-family:Arial" onKeyDown="caesarCipher(0)" onKeyUp="caesarCipher(0)"></textarea></td></tr>
        <tr><td align="left" style="padding-left:25px;"><input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);"></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><div id="caesarCipherDiv">
        <br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="27">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td style="font-family: Courier New;">a</td><td style="font-family: Courier New;">b</td><td style="font-family: Courier New;">c</td><td style="font-family: Courier New;">d</td><td style="font-family: Courier New;">e</td><td style="font-family: Courier New;">f</td><td style="font-family: Courier New;">g</td><td style="font-family: Courier New;">h</td><td style="font-family: Courier New;">i</td><td style="font-family: Courier New;">j</td><td style="font-family: Courier New;">k</td><td style="font-family: Courier New;">l</td><td style="font-family: Courier New;">m</td><td style="font-family: Courier New;">n</td><td style="font-family: Courier New;">o</td><td style="font-family: Courier New;">p</td><td style="font-family: Courier New;">q</td><td style="font-family: Courier New;">r</td><td style="font-family: Courier New;">s</td><td style="font-family: Courier New;">t</td><td style="font-family: Courier New;">u</td><td style="font-family: Courier New;">v</td><td style="font-family: Courier New;">w</td><td style="font-family: Courier New;">x</td><td style="font-family: Courier New;">y</td><td style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td style="font-family: Courier New;">n</td><td style="font-family: Courier New;">o</td><td style="font-family: Courier New;">p</td><td style="font-family: Courier New;">q</td><td style="font-family: Courier New;">r</td><td style="font-family: Courier New;">s</td><td style="font-family: Courier New;">t</td><td style="font-family: Courier New;">u</td><td style="font-family: Courier New;">v</td><td style="font-family: Courier New;">w</td><td style="font-family: Courier New;">x</td><td style="font-family: Courier New;">y</td><td style="font-family: Courier New;">z</td><td style="font-family: Courier New;">a</td><td style="font-family: Courier New;">b</td><td style="font-family: Courier New;">c</td><td style="font-family: Courier New;">d</td><td style="font-family: Courier New;">e</td><td style="font-family: Courier New;">f</td><td style="font-family: Courier New;">g</td><td style="font-family: Courier New;">h</td><td style="font-family: Courier New;">i</td><td style="font-family: Courier New;">j</td><td style="font-family: Courier New;">k</td><td style="font-family: Courier New;">l</td><td style="font-family: Courier New;">m</td></tr></tbody></table>
        </div></td></tr>
      </table></form>
      <h4>È un cifrario a sostituzione monoalfabetica in cui ogni lettera del testo in chiaro è sostituita nel testo cifrato dalla lettera che si trova un certo numero di posizioni dopo nell'alfabeto. Questi tipi di cifrari sono detti anche cifrari a sostituzione o cifrari a scorrimento a causa del loro modo di operare: la sostituzione avviene lettera per lettera, scorrendo il testo dall'inizio alla fine.</h4>
    </div>

    <div id="baconcipher" class="tool">
       <h4><b>Cifrario di Bacone</b></h4>
      Scegliere decifrare o cifrare, scegliere alfabeto. La versione base non distingue  la U e la I dalla J e V .(Si può scegliere una versione di alfabeto con corrispondenza univoche).
        <form>
        <table width="90%" style="text-align:left; border: 2px #000000 solid;">
        <tr><td align="left" style="padding-left:25px;">Version: <select id="baconianCipherVersion" onChange="baconianCipher()">
        <option selected value="Standard">Standard (I=J & U=V)</option>
        <option value="V2">V2 (Distinct values)</option>
        </select></td></tr>
        <tr><td align="left" style="padding-left:25px;">Method: <select id="baconianCipherMethod" onChange="baconianCipher()">
        <option selected value="Decrypt">Decrypt</option>
        <option value="Encrypt">Encrypt</option>
        </select></td></tr>
        <tr><td align="left" style="padding-left:25px;">Swap A and B: <input type="checkbox" id="baconianCipherCheckboxSwap" onClick="baconianCipher()"></td></tr>
        <tr><td align="left" valign="top" style="padding-left:25px; padding-right:25px;">Text: <textarea id="baconianCipherText" rows="5" cols="100" style="font-family:Arial" onKeyDown="baconianCipher()" onKeyUp="baconianCipher()"></textarea></td></tr>
        <tr><td align="left" style="padding-left:25px;"><input name="Reset fields" value="Reset fields" type="button" onclick="resetFields(this.form);"></td></tr>
        <tr><td align="left" style="padding-left:25px; padding-right:25px;"><div id="baconianCipherDiv">
        <br><br><table style="border:1px solid #000;"><tbody><tr><td colspan="8">Key</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">a</td><td align="center" style="font-family: Courier New;">b</td><td align="center" style="font-family: Courier New;">c</td><td align="center" style="font-family: Courier New;">d</td><td align="center" style="font-family: Courier New;">e</td><td align="center" style="font-family: Courier New;">f</td><td align="center" style="font-family: Courier New;">g</td><td align="center" style="font-family: Courier New;">h</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">AAAAA</td><td align="center" style="font-family: Courier New;">AAAAB</td><td align="center" style="font-family: Courier New;">AAABA</td><td align="center" style="font-family: Courier New;">AAABB</td><td align="center" style="font-family: Courier New;">AABAA</td><td align="center" style="font-family: Courier New;">AABAB</td><td align="center" style="font-family: Courier New;">AABBA</td><td align="center" style="font-family: Courier New;">AABBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">i-j</td><td align="center" style="font-family: Courier New;">k</td><td align="center" style="font-family: Courier New;">l</td><td align="center" style="font-family: Courier New;">m</td><td align="center" style="font-family: Courier New;">n</td><td align="center" style="font-family: Courier New;">o</td><td align="center" style="font-family: Courier New;">p</td><td align="center" style="font-family: Courier New;">q</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">ABAAA</td><td align="center" style="font-family: Courier New;">ABAAB</td><td align="center" style="font-family: Courier New;">ABABA</td><td align="center" style="font-family: Courier New;">ABABB</td><td align="center" style="font-family: Courier New;">ABBAA</td><td align="center" style="font-family: Courier New;">ABBAB</td><td align="center" style="font-family: Courier New;">ABBBA</td><td align="center" style="font-family: Courier New;">ABBBB</td></tr><tr><td>Original:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">r</td><td align="center" style="font-family: Courier New;">s</td><td align="center" style="font-family: Courier New;">t</td><td align="center" style="font-family: Courier New;">u-v</td><td align="center" style="font-family: Courier New;">w</td><td align="center" style="font-family: Courier New;">x</td><td align="center" style="font-family: Courier New;">y</td><td align="center" style="font-family: Courier New;">z</td></tr><tr><td>Substitution:&nbsp;&nbsp;</td><td align="center" style="font-family: Courier New;">BAAAA</td><td align="center" style="font-family: Courier New;">BAAAB</td><td align="center" style="font-family: Courier New;">BAABA</td><td align="center" style="font-family: Courier New;">BAABB</td><td align="center" style="font-family: Courier New;">BABAA</td><td align="center" style="font-family: Courier New;">BABAB</td><td align="center" style="font-family: Courier New;">BABBA</td><td align="center" style="font-family: Courier New;">BABBB</td></tr></tbody></table>
        </td></tr>
        </table></form></div>
      </div>

</div>
