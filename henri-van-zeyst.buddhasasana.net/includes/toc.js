!
function($) {
$.fn.toc = function(options) {
  var self = this;
  var opts = $.extend({}, jQuery.fn.toc.defaults, options);

  var container = $(opts.container);
  var headings = $(opts.selectors, container);
  var headingOffsets = [];
  var activeClassName = opts.prefix+'-active';

  var findScrollableElement = function(els) {
    for (var i = 0, argLength = arguments.length; i < argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop() > 0) {
        return $scrollElement;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop() > 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return $scrollElement;
        }
      }
    }
    return [];
  };
  var scrollable = findScrollableElement(opts.container, 'body', 'html');

  var scrollTo = function(e) {
    if (opts.smoothScrolling) {
      e.preventDefault();
      var elScrollTo = $(e.target).attr('href');
      var $el = $(elScrollTo);
        scrollable.animate({ scrollTop: $el.offset().top }, 500, 'swing', function() {
        location.hash = elScrollTo;
      });
    }
    $('li', self).removeClass(activeClassName);
    $(e.target).parent().addClass(activeClassName);
  };

  //highlight on scroll
  var timeout;
  var highlightOnScroll = function(e) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
      var top = $(window).scrollTop(),
        highlighted;
      for (var i = 0, c = headingOffsets.length; i < c; i++) {
        if (headingOffsets[i] >= top) {
          $('li', self).removeClass(activeClassName);
          highlighted = $('li:eq('+(i-1)+')', self).addClass(activeClassName); 
          opts.onHighlight(highlighted);
          break;
        }
      }
    }, 50);
  };
  if (opts.highlightOnScroll) {
    $(window).bind('scroll', highlightOnScroll);
    highlightOnScroll();
  }

  return this.each(function() {
    //build TOC
    var el = $(this);
    var ul = $('<ul style="text-align: center;"/>');
    headings.each(function(i, heading) {
      var $h = $(heading);
      headingOffsets.push($h.offset().top - opts.highlightOffset);
      //add anchor
      var anchor = $('<span/>').attr('id', opts.anchorName(i, heading, opts.prefix)).insertBefore($h);
      //build TOC item
      var a = $('<a href="#"/>')
        .html(opts.headerText(i, heading, $h))
        .attr('href', 'javascript:showonlyone(\'' + opts.anchorName(i, heading, opts.prefix) + '\');');
      var li = $('<li/>')
        .addClass(`${getTocId(i)}`)
        .addClass(opts.itemClass(i, heading, $h, opts.prefix))
        .append(a);
        ul.append(li);
    });
    el.html(ul);
  });
};

jQuery.fn.toc.defaults = {
  container: '#toc-wrapper',
  selectors: '.Heading3',
  smoothScrolling: true,
  prefix: 'Ch.',
  onHighlight: function() {},
  highlightOnScroll: true,
  highlightOffset: 100,
  anchorName: function(i, heading, prefix) {
    return prefix+i;
  },
  headerText: function(i, heading, $heading) {
    return $heading.html();
  },
  itemClass: function(i, heading, $heading, prefix) {
    return prefix + '-' + $heading[0].tagName.toLowerCase();
  }

};

}(jQuery);

var inserttoc = ''
inserttoc += '<div class="toc"></div>';
inserttoc += '<script>';
inserttoc += '$(".toc").toc({';
inserttoc += '"selectors": ".Heading3"';
inserttoc += '});';
inserttoc += '</script>';
inserttoc += '</div>';

document.write(inserttoc);