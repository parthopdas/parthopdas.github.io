var injectheader = '';

// top row navbar

injectheader += '<nav id="nav">';

injectheader += '<p class="NavBar1">';

injectheader += '<a href="../index.htm" target="_top" class="button"  title="Ancient Buddhist Texts Home Page">ABT&#160;Home</a>';

injectheader += '<a href="../Buddhist-Texts/BT-index.htm" target="_top" class="button" title="Original Texts in Pali, Sanskritised Prakrit, and Sanskrit - Comparative Editions of the Texts - Studies of their Collection and Prosody">Original&#160;Texts</a>';

injectheader += '<a href="../Texts-and-Translations/TT-index.htm" target="_top"  class="button"  title="Buddhist Texts in the Original Languages, together with Annotated Translations">Texts&#160;&amp;&#160;Translations</a>';

injectheader += '<a href="../English-Texts/ET-index.htm" target="_top"  class="button" title="Reworked Translations presented with less Notes and in English Only">English</a>';

injectheader += '<a href="../Textual-Studies/TS-index.htm" target="_top"  class="button" title="Grammar and Prosody Studies including Original Texts on the Subject, and Articles by Various Authors">Grammar</a>';

injectheader += '<a href="../Reference/RF-index.htm" target="_top"  class="button" title="A Selection of Works useful for Reference">Reference</a>';

injectheader += '<a href="../Maps/MP-index.htm" target="_top"  class="button" title="A Large Collection of Maps relating to the Buddha\'s Life and Buddhist History">Maps</a>';

injectheader += '<a href="../Audio/AU-index.htm" target="_top"  class="button" title="A Large Collection of Audio Files, both Short and Long">Audio</a>';

injectheader += '<a href="../Miscellaneous/Search.htm" target="_top" style="display:none;">&#128270;&#160;&#160;&#160;Search </a></p>';

injectheader += '</nav>';

injectheader  += '<div class="pure-g-r phototable center" style="max-width:100%; margin:auto;"><div class="pure-u-1-2"><a href="https://paypal.me/dharmarecords" target="_new"><input type="image" src="https://www.ancient-buddhist-texts.net/images/donate-with-paypal.png" style="width:120px; margin:auto; margin-left:20px;" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></a><div class="pure-u-1-2"><input type="image" src="https://www.ancient-buddhist-texts.net/images/litecoindonate.png" style="width:120px; margin:auto;" border="0" name="submit" onclick="copyToClipboard(\'#lite\')" alt="Donate with Litecoin"></a></div></div></div>';

injectheader  += '<p id="lite" style="display:none; ">LQZ9fVHF3wL6ihwEUcRFiCpcD7f2dfd3Kp</p>';

injectheader  += '<script type="text/javascript">function copyToClipboard(element) {var $temp = $("<input>"); $("body").append($temp); $temp.val($(element).text()).select(); document.execCommand("copy"); $temp.remove(); alert("litecoin can be bought on most crypto exchanges; my address LQZ9fVHF3wL6ihwEUcRFiCpcD7f2dfd3Kp has been copied to the clipboard.");}</script>';

injectheader += '<script src="../includes/Notes.js"></script> ';

injectheader +='<script src="../includes/jquery.ultimate-burger-menu.js"></script>';

injectheader +='<script>$(document).ready(function(){$("#nav").burgerMenu({animateSpeed: 500});});</script>';

injectheader += '<p class="center"><img src="../logo.png" alt="ABT logo" style="width:320px; margin:auto; display:none;" /></p>';

document.write(injectheader);

