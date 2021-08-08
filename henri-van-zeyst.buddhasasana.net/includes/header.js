var injectthis = '';

injectthis += '<nav id="nav">';
injectthis += '<ul>';
injectthis += '<span id="toggleMenu-text">Toggle Navigation</span> </a> </li>';
injectthis += '<li><a href="../index.htm">Home</a></li>';
injectthis += '<li> <a href="#" title="About and Memoirs">About</a>';
injectthis += '<ul>';
injectthis += '<li><a href="../about/about.htm">About</a></li>';
injectthis += '<li><a href="../tasting-buddhism/tasting-buddhism.htm">Tasting Buddhism</a></li>';
injectthis += '<li><a href="../introduction-to-a-saint/introduction-to-a-saint.htm">Introduction to a Saint</a></li>';
injectthis += '<li><a href="../future-jataka/future-jataka.htm">A Jātaka Story of the Future</a></li>';
injectthis += '</ul>';
injectthis += '</li>';
injectthis += '<li> <a href="#" title="Tributes by those who knew him">Tributes</a>';
injectthis += '<ul>';
injectthis += '<li><a href="../tributes/dhammika.htm">Ven Dhammika</a></li>';
injectthis += '<li><a href="../tributes/jayaweera.htm">Neville Jayaweera</a></li>';
injectthis += '<li><a href="../tributes/abeysekera.htm">Kirthie Abeysekera</a></li>';
injectthis += '<li><a href="../tributes/jayatilleke.htm">Pat Jayatilleke</a></li>';
injectthis += '</ul>';
injectthis += '</li>';

injectthis += '<li> <a href="#" title="Introductory Materials about Buddhism">Introductory</a>';
injectthis += '<ul>';

injectthis += '<li> <a href="../meditative-insight/meditative-insight.htm">Meditative Insight</a>';
injectthis += '<li> <a href="../a-new-approach-to-buddhism/a-new-approach-to-buddhism.htm">A New Approach to Buddhism</a>';
injectthis += '<li> <a href="../basic-buddhism/basic-buddhism.htm">Basic Buddhism</a>';
injectthis += '<li> <a href="../the-challenge-to-buddhism/the-challenge-to-buddhism.htm">The Challenge to Buddhism</a>';
injectthis += '<li> <a href="../towards-the-truth/towards-the-truth.htm">Towards the Truth</a>';
injectthis += '<li> <a href="../touching-the-essence/touching-the-essence.htm">Touching the Essence</a></li>';
injectthis += '<li> <a href="../one-hour-for-buddhism/one-hour-for-buddhism.htm">One Hour for Buddhism</a></li>';
injectthis += '<li> <a href="../buddhism-for-the-millions/buddhism-for-the-millions.htm">Buddhism for the Millions</a></li>';
injectthis += '<li> <a href="../problems-bared-essays-on-buddhism/problems-bared-essays-on-buddhism.htm">Problems Bared, Essays on Buddhism</a></li>';
injectthis += '<li> <a href="../the-pendulum-of-thought/the-pendulum-of-thought.htm">The Pendulum of Thought</a></li>';
injectthis += '</li>';
injectthis += '</ul>';
injectthis += '</li>';

injectthis += '<li> <a href="#" title="Expositions of Topics in Buddhism">Expositions</a>';
injectthis += '<ul>';

injectthis += '<li> <a href="../basic-buddhist-concepts/basic-buddhist-concepts.htm">Basic Buddhist Concepts</a></li>';
injectthis += '<li> <a href="../karma-and-rebirth/karma-and-rebirth.htm">Karma and Rebirth</a></li>';
injectthis += '<li> <a href="../in-search-of-truth/in-search-of-truth.htm">In Search of Truth</a></li>';
injectthis += '<li> <a href="../truth-and-the-way/truth-and-the-way.htm">Truth and the Way</a></li>';
injectthis += '<li> <a href="../obstacles-on-the-path/obstacles-on-the-path.htm">Obstacles on the Path</a></li>';
injectthis += '<li> <a href="../buddhism-a-living-experience/buddhism-a-living-experience.htm">Buddhism, a Living Experience</a></li>';
injectthis += '<li> <a href="../life-living-and-being-alive/life-living-and-being-alive.htm">Life – Living and Being Alive</a></li>';
injectthis += '<li> <a href="../perfections-of-a-bodhisattva/perfections-of-a-bodhisattva.htm">Perfections of a Bodhisattva</a></li>';
injectthis += '<li><a href="../agony-and-ecstasy/agony-and-ecstasy.htm">Agony and Ecstasy</a></li>';
injectthis += '<li> <a href="../dependent-origination/dependent-origination.htm">Dependent Origination</a></li>';
injectthis += '<li><a href="../awareness-in-buddhist-meditation/awareness-in-buddhist-meditation.htm">Awareness in Buddhist Meditation</a></li>';
injectthis += '<li> <a href="../seven-facets-of-insight/seven-facets-of-insight.htm">Seven Facets of Insight</a></li>';
injectthis += '<li> <a href="../marks-of-distinction/marks-of-distinction.htm">Marks of Distinction</a></li>';
injectthis += '<li> <a href="../of-matter-and-mind/of-matter-and-mind.htm">Of Matter and Mind</a></li>';
injectthis += '<li> <a href="../nibbana/nibbana.htm">Nibbāna</a>';
injectthis += '</li>';

injectthis += '</ul>';
injectthis += '</li>';
injectthis += '</ul>';
injectthis += '</nav>';

var path = location.pathname.replace(/^.*[\\\/]/, '')
if (path == "index.htm")
{
injectthis = injectthis.replace(/\.\.\//g, "");
}

document.write(injectthis);

// tooltips
// get all tags of a class

getclass = function(cl) {
 var retnode = [];
 var myclass = new RegExp('\\b'+cl+'\\b');
 var elem = document.getElementsByTagName('*');
 for (var i = 0; i < elem.length; i++) {
 var classes = elem[i].className;
 if (myclass.test(classes)) {
 retnode.push(elem[i]);
 }
 }
 return retnode;
};

window.onload = function(e) {

// add javascript to TT class

 var TT = getclass('TT');
 for (i = 0; i < TT.length; i++) {
 TT[i].setAttribute("onMouseover","this.childNodes[0].style.display='block'; adjustChildDiv(this)");
 TT[i].setAttribute("onMouseout","if (!this.set) {this.childNodes[0].style.display='none';}");
 TT[i].setAttribute("onClick","if (this.set) { this.set = null; } else {this.set = 1;}");
 }
};

function adjustChildDiv(elem) {
 var left = -224;
 if(window.innerWidth<elem.offsetLeft + elem.childNodes[0].offsetLeft + elem.childNodes[0].offsetWidth) elem.childNodes[0].style.left = window.innerWidth-elem.offsetLeft-elem.childNodes[0].offsetWidth+'px';
 else if(elem.offsetLeft + elem.childNodes[0].offsetLeft<0) elem.childNodes[0].style.left = left - (elem.offsetLeft + elem.childNodes[0].offsetLeft)+'px';
 else if(window.innerWidth > elem.offsetLeft + left + elem.childNodes[0].offsetWidth && elem.offsetLeft + left > 0) elem.childNodes[0].style.left = left+'px';
};
