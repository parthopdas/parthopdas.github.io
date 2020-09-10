var injectheader = '';

// top row navbar

injectheader += '<nav id="nav">';

injectheader += '<p class="NavBar1">';

injectheader += '<a href="../../index.htm" target="_top" class="button" title="Ancient Buddhist Texts Home Page">ABT&#160;Home</a>';

injectheader += '<a href="../../Buddhist-Texts/BT-index.htm" target="_top" class="button" title="Original Texts in Pali, Sanskritised Prakrit, and Sanskrit - Comparative Editions of the Texts - Studies of their Collection and Prosody">Original&#160;Texts</a>';

injectheader += '<a href="../../Texts-and-Translations/TT-index.htm" target="_top"  class="button" style="letter-spacing:-1px;" title="Buddhist Texts in the Original Languages, together with Annotated Translations">Texts&#160;&amp;&#160;Translations</a>';

injectheader += '<a href="../../English-Texts/ET-index.htm" target="_top"  class="button" title="Reworked Translations presented with less Notes and in English Only">English</a>';

injectheader += '<a href="../../Textual-Studies/TS-index.htm" target="_top"  class="button" title="Grammar and Prosody Studies including Original Texts on the Subject, and Articles by Various Authors">Grammar</a>';

injectheader += '<a href="../../Reference/RF-index.htm" target="_top"  class="button" title="A Selection of Works useful for Reference">Reference</a>';

injectheader += '<a href="../../Maps/MP-index.htm" target="_top"  class="button" title="A Large Collection of Maps relating to the Buddha\'s Life and Buddhist History">Maps</a>';

injectheader += '<a href="../../Audio/AU-index.htm" target="_top"  class="button" title="A Large Collection of Audio Files, both Short and Long">Audio</a>';

injectheader += '<a href="../../Miscellaneous/Search.htm" target="_top" style="display:none;">&#128270;&#160;&#160;&#160;Search </a></p>';

injectheader += '</nav>';

injectheader  += '<div class="pure-g-r phototable" style="width:300px; margin:auto;"><div class="pure-u-1-2"><form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="NYYV98QBRSFE6"><input type="hidden" name="on0" value="choose amount:">&#160;&#160;&#160;choose amount:&#160;<br><select name="os0" style="margin-left:10px;"><option value="1a:">1a: $10.00 USD</option><option value="1b:">1b: $20.00 USD</option>	<option value="1c:">1c: $50.00 USD</option><option value="1d:">1d: $100.00 USD</option></select><input type="hidden" name="currency_code" value="USD"></div><div class="pure-u-1-2"><input type="image" src="https://www.ancient-buddhist-texts.net/images/donate-with-paypal.png" style="width:120px;" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"></form></div></div>';

injectheader += '<p class="short-url center" style="margin-left:0.8em; font-variant:normal;">short url: <span></span></p><script src="../../includes/bitlr.js"></script><script>$.bitlr({apiKey: "23c47f073826eb0cdc1c2abedbb006976e0e0549",link: window.location.href, anchor: true, success:function(newLink) {$(".short-url span").html(newLink); }, error: function() {$(".urls").hide();}});</script>';

injectheader += '<script src="../../includes/Notes.js"></script> ';

injectheader +='<script src="../../includes/jquery.ultimate-burger-menu.js"></script>';

injectheader +='<script>$(document).ready(function(){$("#nav").burgerMenu({animateSpeed: 500});});</script>';

injectheader += '<p class="center"><img src="../../logo.png" alt="ABT logo" style="width:320px; margin:auto; display:none;" /></p>';

document.write(injectheader);

