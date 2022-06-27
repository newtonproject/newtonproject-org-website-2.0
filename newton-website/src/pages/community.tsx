import React from 'react'
import CommunityContent from '../components/communityContent'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../hooks/PageModel'

export default Community

function Community() {
  let pageModel = new PageModelTitle('Community', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <div>
      <CommunityContent />
    </div>
  )
}
