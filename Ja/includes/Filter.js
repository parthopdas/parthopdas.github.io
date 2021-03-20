var Filter= (function () {
  function createRegExStr(term) {
    const variations = {
      'a': '[aā]',
      'i': '[iī]',
      'u': '[uū]',
      'r': '[rṛ]',
      'n': '[nñṇṅ]',
      't': '[tṭ]',
      'd': '[dḍ]',
      'l': '[lḷ]',
      'm': '[mṁṁ]',
      's': '[sśṣ]',
      'h': '[hḥ]',
    }
    const str = term
      .toLowerCase()
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      .replace(/[aiurntdlmsh]/g, (m) => variations[m])
      .replace(/ +$/, '')
      .replace(/ṃ/g, "ṁ")
      .replace("cull", "cūḷ")

    return str
  }

  /**
   * Handles multi word search, all words must exist. This implies single word searches as well.
   * E.g. "Anāthapiṇḍika caravan", "monk striving", "Mahāpanthaka Cūḷapanthaka"
   *
   * How:
   * - Split by space, take non empty parts
   *   - Convert them to regex strings that accept pāli diacritic.
   * - Note down the number of parts
   * - Combine them with regex alternation and create a regex
   * - Ask markjs to do its job
   * - Once markjs is done, for each of the items pass to markjs
   *   - If the size of the unique text from the marks equals the number of parts, show
   *   - Else hide
   * - Dobounce the function to improve responsiveness
   */
  function triggerFilter(input, context, exclude) {
    context.show().unmark()

    var filterTerm = $(input).val().trim()
    if (!filterTerm || filterTerm.length < 3) {
      return
    }

    const keywordRegExStrs = filterTerm.split(' ').filter(x => x.trim()).map(createRegExStr).map(x => `(${x})`)
    const filterRegex = new RegExp(keywordRegExStrs.join('|'), 'gi')
    new Mark(context.toArray()).markRegExp(filterRegex, {
      'diacritics': true,
      'exclude': exclude || [],
      'done': function () {
        context.not(":has(mark)").hide()

        $.each(
          context.has("mark"),
          (_i, e) => {
            const markedElements = $(e).find("[data-markjs='true']")
            const uniqueMarkedTexts = new Set($.map(markedElements, x => x.textContent.toLocaleLowerCase()))
            if (uniqueMarkedTexts.size !== keywordRegExStrs.length) {
              $(e).hide()
            }
          }
        )

        if (context.has("mark").filter(":visible").length) {
          $('#notFoundMarker').hide()
        } else {
          $('#notFoundMarker').show()
        }
      },
    })
  }

  const triggerFilterDebounced = _.debounce(triggerFilter, 300)

  function resetFilter(input, context) {
    input.val('')
    context.show().unmark()
  }

  function triggerFilterOnEnterKey(event, input, context, exclude) {
    if (event.keyCode == 13) {
      triggerFilter(input, context, exclude)
    }
  }

  return {
    triggerFilter: triggerFilterDebounced,
    resetFilter: resetFilter,
    triggerFilterOnEnterKey: triggerFilterOnEnterKey,
  }
})()
