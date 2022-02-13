var injectnav = '';

// bottom row navbar

injectnav += '<div class="center"><p class="NavBar3"><button type="button" id="prev-btn2" style="margin-right:1em;">Prev</button><button  onclick="window.location.href=\'index.htm\';" style="margin-right:1em;" id="navindex">Index</button><button type="button" id="next-btn2">Next</button></p></div>';

document.write(injectnav);

var url = window.location.pathname; 
var page = url.substring(url.lastIndexOf('/')+1); 
var currentPosition = pageList.indexOf(page); 
var count = pageList.length - 1

if(currentPosition==0){document.getElementById("prev-btn1").style.visibility = "hidden";}
if(currentPosition==0){document.getElementById("prev-btn2").style.visibility = "hidden";}
if(currentPosition==count){document.getElementById("next-btn1").style.visibility = "hidden";}
if(currentPosition==count){document.getElementById("next-btn2").style.visibility = "hidden";}

document.getElementById('next-btn1').onclick = function(){
    // if the URL is not in the list, do nothing
    if(currentPosition==-1) return;
    // if we're at the end, go back to index, else, go to next page
    window.location = currentPosition<pageList.length-1? pageList[++currentPosition]:pageList[0];
}

document.getElementById('prev-btn1').onclick = function(){
    // if the URL is not in the list, do nothing
    if(currentPosition==-1) return;
    // if we're at the end, go back to index, else, go to next page
    window.location = currentPosition<pageList.length-1? pageList[--currentPosition]:pageList[--currentPosition];
}

document.getElementById('next-btn2').onclick = function(){
    // if the URL is not in the list, do nothing
    if(currentPosition==-1) return;
    // if we're at the end, go back to index, else, go to next page
    window.location = currentPosition<pageList.length-1? pageList[++currentPosition]:pageList[0];
}

document.getElementById('prev-btn2').onclick = function(){
    // if the URL is not in the list, do nothing
    if(currentPosition==-1) return;
    // if we're at the end, go back to index, else, go to next page
    window.location = currentPosition<pageList.length-1? pageList[--currentPosition]:pageList[--currentPosition];
}

