var t1 = '<meta property="og:url" content="'
var tend = '" />'
var pageaddress = t1 + window.location.href +  tend
var t2 = '<meta property="og:title" content="'
var pagetitle = t2 + document.title + tend

var desc = '"The archived works on Theravada Buddhism by the great Dutch author Henri van Zeyst, who made such a big impact on a whole generation of Buddhist intellectuals in his adopted home of Sri Lanka."'

var injectthis = '';

injectthis += '<meta name="description" content=' + desc + ' />';

injectthis += '<link rel="shortcut icon" href="../favicon.ico" />';

injectthis += '<!-- Twitter Card data -->';
injectthis += '<meta name="twitter:card" value="summary"> ';

injectthis += '<!-- Open Graph data -->';
injectthis += pagetitle;
injectthis += '<meta property="og:type" content="article" />';
injectthis += pageaddress;
injectthis += '<meta property="og:image" content="http://henri-van-zeyst.buddhasasana.net/images/henri-thumb.jpg" />';

injectthis += '<meta property="og:description" content=' + desc + ' />';
injectthis += '<meta name="description" content=' + desc + ' />';

injectthis += '<meta name="author" content="Henri van Zeyst">';
injectthis += '<meta name="keywords" content="Henri van Zeyst, Buddhist Teaching, Buddha, Dhamma, Dharma, Abhidhamma" />';


document.write(injectthis);
