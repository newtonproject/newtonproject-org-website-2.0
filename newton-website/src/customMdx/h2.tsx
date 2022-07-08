import React from 'react'
import { getAnchor } from '../utils/getAnchor'

const H2 = ({ children }: any) => {
  const anchor = getAnchor(children)
  return <h2 id={anchor}>{children}</h2>
}
export default H2
