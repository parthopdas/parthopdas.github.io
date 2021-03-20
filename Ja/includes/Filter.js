var Filter= (function () {
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
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      .replace(/[aiurntdlmsh]/g, (m) => variations[m])
      .replace(/ +$/, '')
      .replace(/ṃ/g, "ṁ")
      .replace("cull", "cūḷ")
    return new RegExp(str, 'gi')
  }

  function triggerFilter(input, context, exclude) {
    context.show().unmark()

    var filterTerm = $(input).val()
    if (!filterTerm || filterTerm.length < 3) {
      return
    }

    const filterRegex = createRegEx(filterTerm)
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
    triggerFilter: triggerFilter,
    resetFilter: resetFilter,
    triggerFilterOnEnterKey: triggerFilterOnEnterKey,
  }
})()