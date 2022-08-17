import React from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import CommunityTab from '../components/communityTab'
import PressData from '../components/pressData'
export default Community

function Community() {
  let pageModel = new PageModelTitle('Press', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <CommunityTab />
      <PressData />
    </>
  )
}
