import React from 'react'

function getAnchor(text: any) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}
const H3 = ({ children }: any) => {
  const anchor = getAnchor(children)
  // const link = `#${anchor}`;
  return <h3 id={anchor}>{children}</h3>
}
export default H3
