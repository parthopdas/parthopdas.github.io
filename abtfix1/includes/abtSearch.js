var AbtSearch = (function () {
  function createRegEx(term) {
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
      .replace(/[aiurntdlmsh]/g, (m) => variations[m])
      .replace(/ +$/, '')
      .replace(/ṃ/g, "ṁ")
      .replace("cull", "cūḷ")
    return new RegExp(str, 'gi')
  }

  function triggerSearch(input, context, exclude) {
    context.show().unmark()

    var searchTerm = $(input).val()
    if (!searchTerm || searchTerm.length < 3) {
      return
    }

    const filterRegex = createRegEx(searchTerm)
    context.markRegExp(filterRegex, {
      'diacritics': true,
      'exclude': exclude || [],
      'done': function () {
        context.not(":has(mark)").hide()
        if (context.has("mark").length) {
          $('#notFoundMarker').hide()
        } else {
          $('#notFoundMarker').show()
        }
      },
    })
  }

  function resetSearch(input, context) {
    input.val('')
    context.show().unmark()
  }

  function triggerSearchOnEnterKey(event, input, context, exclude) {
    if (event.keyCode == 13) {
      triggerSearch(input, context, exclude)
    }
  }

  return {
    triggerSearch: triggerSearch,
    resetSearch: resetSearch,
    triggerSearchOnEnterKey: triggerSearchOnEnterKey,
  }
})()
