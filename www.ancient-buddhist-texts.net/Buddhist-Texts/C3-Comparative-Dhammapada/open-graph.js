// variables section

var authorname = '<meta name="author" content="Anandajoti Bhikkhu">';
var pagetitle = '<meta property="og:title" content="' + document.title + '" />';
var pageaddress = '<meta property="og:url" content="' + window.location.href + '" />';
var imageaddress ='<meta property="og:image" content="http://www.ancient-buddhist-texts.net/Buddhist-Texts/Comparative-Dhammapada/Comparative-Dhammapada-Thumb.jpg" />';
var desc = '"An edition of the P&#257;li Dhammapada with parallels from other Indian language traditions, together with a study, and a complete word index. Includes texts from the Patna Dharmapada, G&#257;ndh&#257;r&#299; Dharmapada, Ud&#257;navarga, Divy&#257;vad&#257;na, Mah&#257;vastu and other texts. "'

// end variables

var injectthis = '';

injectthis += authorname
injectthis += '<meta name="description" content=' + desc + ' />';

injectthis += '<!-- Twitter Card data -->';
injectthis += '<meta name="twitter:card" value="summary"> ';

injectthis += '<!-- Open Graph data -->';
injectthis += pagetitle;
injectthis += '<meta property="og:type" content="article" />';
injectthis += pageaddress;
injectthis += imageaddress;

injectthis += '<meta property="og:description" content=' + desc + ' />';
injectthis += '<meta name="description" content=' + desc + ' />';

document.write(injectthis);
