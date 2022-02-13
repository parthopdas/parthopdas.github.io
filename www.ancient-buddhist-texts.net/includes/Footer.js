var injectfooter = '';

injectfooter += '<p>&#160;</p>';

injectfooter += '<p class="RSS">if you would like to be informed when new texts are released<br />subscribe to my <a href="http://dharma-records.buddhasasana.net" target="_new">Dharma Records</a> blog where all updates are posted<br><br><a href="http://dharma-records.buddhasasana.net/feed"><img src="../../images/RSS.png" height="30px" border="0px" title="Subscribe to my Dharma Records blog" alt="Subscribe to my Dharma Records  blog" /></a></p> ';

injectfooter += '<p class="NavBar2"><a href="../../Miscellaneous/About.htm" title="who is making this website and why" target="_top" class="button">about</a> ';

injectfooter += '<a href="../../download/index.htm" title="download the fonts or the whole website" target="_top"  class="button">fonts&#160;&amp;&#160;downloads</a> ';

injectfooter += '<a href="../../Miscellaneous/Links.htm" title="links to other resources on the net" target="_top"  class="button">outside&#160;links</a> ';

injectfooter += '<a href="../../Miscellaneous/Copyright-Notice.htm" title="information about copyright status of the documents" target="_top" class="button">copyright</a></p>';

injectfooter += '<p style="margin-top:-3px;">some of my other websites:</p><p class="NavBar2"><a href="http://www.photodharma.net/" title="15,000+ photographs in high-definition" target="_new" class="button" style="background-color:#5E879B;">Photo&#160;Dharma</a> ';

injectfooter += '<a href="http://pali-text-images.net/" title="images of the Sri Lankan and Burmese Tipiṭakas" target="_new" class="button" style="background-color:#5E879B;">Pāḷi Text Images</a> ';

injectfooter += '<a href="http://www.dharma-documentaries.net/" title="800+ documentaries about Buddhism, its cultures and ecology" target="_new" class="button" style="background-color:#5E879B; letter-spacing:-1px;">Dharma&#160;Documentaries</a> ';

injectfooter += '<a href="http://www.buddhasasana.net/" title="writings on Dhamma by various authors" target="_new" class="button" style="background-color:#5E879B;">Buddhasāsana</a></p>';

injectfooter += '<p style="padding:6px; width:100%; text-align:center;"><a href="https://www.exabytes.com/" target="_blank">&#160;hosting sponsored by exabytes.com&#160;</a></p>';

if (document.getElementById('audio-player')) {

injectfooter += '<script src="../../includes/lib/mediaelement.js"></script>';

injectfooter += '<script src="../../includes/lib/mediaelementplayer.js"></script>';

injectfooter += '<script>/* <![CDATA[ */	jQuery(document).ready(function($) {$("audio,video").mediaelementplayer({audioWidth: "360px",features: ["playpause","progress","tracks","volume"],videoVolume: "horizontal"})});/* ]]> */</script>';

injectfooter += '<link rel="stylesheet" href="../../includes/skin/mediaelementplayer.css" />';

};

if (location.hostname !== "www.ancient-buddhist-texts.net")
{
injectfooter += '<div  class="center" style="width:300px;"><p class="Notice" style="padding:0.5em;">this is a mirror or an offline copy of the main site if you have any problems please try<br /><br /><a href="http://www.ancient-buddhist-texts.net">VISITING THE MAIN SITE</a><br /><br />which is constantly being updated</p></div>';
}

// injectfooter +='<script type="text/javascript">jQuery(document).ready(function() { jQuery("p").each(function(index, value) {value.id = "p_" + index;}); $("html, body").animate({scrollTop: $(window.location.hash).offset().top}, 500);});</script>';

injectfooter +='<style type="text/css">#summary {display:block;}</style>';

document.write(injectfooter);


		