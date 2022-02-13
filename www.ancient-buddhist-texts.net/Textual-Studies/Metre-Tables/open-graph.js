// variables section

var authorname = '<meta name="author" content="Anandajoti Bhikkhu">';
var pagetitle = '<meta property="og:title" content="' + document.title + '" />';
var pageaddress = '<meta property="og:url" content="' + window.location.href + '" />';
var imageaddress ='<meta property="og:image" content="http://www.ancient-buddhist-texts.net/Textual-Studies/Metre-Tables/Metre-Tables-Thumb.jpg" />';
var desc = '"A listing of the metres known to occur in Sanskrit and P&#257;li literature, along with explanations of how to make metre tables, an index and a searchable database. "'

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
