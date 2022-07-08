import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { EmojiProps } from '../../model/PageModel'

const Emoji: React.FC<EmojiProps> = props => {
  const { src } = props
  return (
    <div>
      <p>{src}</p>Block number:
      <a href="https://etherscan.io/block/13773000">13,773,000</a>
      <br />
      ETH price: to be determined
    </div>
  )
}
export default Emoji
