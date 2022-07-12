import React from 'react'
import { getAnchor } from '../utils/getAnchor'

const H4 = ({ children }: any) => {
  const anchor = getAnchor(children)
  return <h4 id={anchor}>{children}</h4>
}
export default H4
