export function getQueryVariable(variable: any) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    let query = window.location.search.substring(1)
    let vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=')
      if (pair[0] == variable) {
        return pair[1]
      }
    }
    return false
  }
}

export function updateQueryStringParameter(uri: any, key: any, value: any) {
  if (!value) {
    return uri
  }
  let re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  let separator = uri.indexOf('?') !== -1 ? '&' : '?'
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    return uri + separator + key + '=' + value
  }
}
