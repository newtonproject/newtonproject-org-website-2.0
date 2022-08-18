import React, { useState, Fragment } from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import { useIntl } from 'gatsby-plugin-intl'

import CommunityTab from '../components/communityTab'
import CommunitySide from '../components/communitySide'

export default CommunityList

function CommunityList() {
  let pageModel = new PageModelTitle('Community', 'community-list')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  const intl = useIntl()
  //   const App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;
  return (
    <>
      {/* <CommunityTab /> */}
      <CommunitySide />
      {/* <App/> */}
    </>
  )
}
