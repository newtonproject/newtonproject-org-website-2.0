import React from 'react'

function getAnchor(text: any) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}
const H2 = ({ children }: any) => {
  const anchor = getAnchor(children)
  return <h2 id={anchor}>{children}</h2>
}
export default H2
