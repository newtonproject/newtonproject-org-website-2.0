import React from 'react'

function getAnchor(text: any) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}
const H5 = ({ children }: any) => {
  const anchor = getAnchor(children)
  // const link = `#${anchor}`;
  return <h4 id={anchor}>{children}</h4>
}
export default H5
