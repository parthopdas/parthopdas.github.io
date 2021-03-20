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
