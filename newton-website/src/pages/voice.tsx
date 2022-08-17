import React from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import CommunityTab from '../components/communityTab'
import CommunityData from '../components/communityData'

export default Voice

function Voice() {
  let pageModel = new PageModelTitle('Voices', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <CommunityTab />
      <CommunityData entryType={'voice'} />
    </>
  )
}
