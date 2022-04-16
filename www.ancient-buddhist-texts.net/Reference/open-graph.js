// variables section

var authorname = '<meta name="author" content="Anandajoti Bhikkhu">';
var pagetitle = '<meta property="og:title" content="' + document.title + '" />';
var pageaddress = '<meta property="og:url" content="' + window.location.href + '" />';
var imageaddress ='<meta property="og:image" content="http://www.ancient-buddhist-texts.net/logo.png" />';
var desc = '"A series of reference materials ranging from literature, art and geography to doctrinal lists, structural outlines and other works. "'

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
