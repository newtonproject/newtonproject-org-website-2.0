import React from 'react'
import { getAnchor } from '../utils/getAnchor'

const H3 = ({ children }: any) => {
  const anchor = getAnchor(children)
  return <h3 id={anchor}>{children}</h3>
}
export default H3
