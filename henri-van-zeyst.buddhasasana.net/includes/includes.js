var injectthis = '';

injectthis += '<link rel="shortcut icon" href="../favicon.ico" />';

injectthis += '<script src="../includes/open-graph.js"></script>';

injectthis += '<script src="../includes/jquery-2.0.2.min.js"></script>';

injectthis += '<link rel="StyleSheet" type="text/css" href="../includes/main.css" />';

document.write(injectthis);

function getTocId(index) {
  return `toc-item-${index}`
}

function showonlyone(thechosenone) {
  $('.switch').each(function(index) {
    if ($(this).attr("id") == thechosenone) {
      $(this).show(200);
      $(`.${getTocId(index)}`).css('font-weight', 'bold')

      if (thechosenone != "Ch.0") {
        location.hash = thechosenone
      }

      if (thechosenone == "Ch.0") {
        location.hash = ''
      }

      window.scrollTo(0, 0);
    }
    else {
      $(this).hide(600);
      $(`.${getTocId(index)}`).css('font-weight', 'revert')
    }
  });
}

