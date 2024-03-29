import React from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import CommunityTab from '../components/communityTab'
import CommunityData from '../components/communityData'

export default Announcements

function Announcements() {
  let pageModel = new PageModelTitle('Announcements', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <CommunityTab />
      <CommunityData entryType={'announcement'} />
    </>
  )
}
