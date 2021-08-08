var injectthis = '';

var path = location.pathname.replace(/^.*[\\\/]/, '')

var injectthis = '<p class="center"><a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/" target="_new">COPYRIGHT<br><img alt="Creative Commons License" style="border-width:0" src="../images/CC-BY-SA.png" /></a><br /><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a></p>';

if (path == "index.htm")
{
injectthis = injectthis.replace("../", "");
}

injectthis += '<p>&#160;</p><a href="http://www.buddhasasana.net"><div class="center"><p style="width:13em; margin:auto; padding:5px; border:1px solid black; background-color:white; font-size:80%; text-align:center;">one of a series of websites on<br>www.buddhasasana.net</p></div></a>';

document.write(injectthis);


$(document).ready(function() {
if (location.hash != "") {
var str=location.hash.replace("#", "")
showonlyone(str)
}

  $('html').removeClass('no-js');
  $('#toggleMenu').on('click', function() {
    if ($(this).hasClass('js-open')) {
      $('#nav > ul > li:not(#toggleMenu)').removeClass('js-showElement');
      $(this).removeClass('js-open');
    } else {
      $('#nav > ul > li:not(#toggleMenu)').addClass('js-showElement');
      $(this).addClass('js-open');
    }
    return false;
  })
  $('li:has("ul") > a').append('<span class="plusMark">&#x25BE</span>');
  $('li:has("ul")').on('mouseover keyup click mouseleave', function(e) {
    if (e.keyCode === 9 | e.type === 'mouseover') {
      // Show sub menu
      $(this).children('ul').removeClass('js-hideElement');
      $(this).children('ul').addClass('js-showElement');
    }
    if (e.type === 'mouseleave') {
      // hide sub menu
      $(this).children('ul').removeClass('js-showElement');
      $(this).children('ul').addClass('js-hideElement');
    }
    if (e.type === 'click') {
      if ($(this).children('a').hasClass('js-openSubMenu')) {
        $(this).children('a').removeClass('js-openSubMenu');
        $(this).children('ul').removeClass('js-showElement');
        $(this).children('ul').addClass('js-hideElement');
      } else {
        $(this).children('a').addClass('js-openSubMenu');
        $(this).children('ul').removeClass('js-hideElement');
        $(this).children('ul').addClass('js-showElement');
      }
//      return false;
    }
  });
  $('li > ul > li:last-child > a').on('keydown', function(e) {
    if ((e.keyCode == 9) && $(this).parent('li').children('ul').length == 0) {
      $(this).parent('li').parent('ul').removeClass('js-showElement');
      $(this).parent('li').parent('ul').addClass('js-hideElement');
      if ($(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('ul').length > 0 && $(this).parent('li').parent('ul').parent('li').is(':last-child')) {
        $(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('js-showElement');
        $(this).parent('li').parent('ul').parent('li').parent('ul').addClass('js-hideElement');
      }
    }
  })
})

