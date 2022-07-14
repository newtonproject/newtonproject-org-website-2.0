export function getAnchor(text: any) {
  if (text instanceof Object) text = text.props.children
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}
