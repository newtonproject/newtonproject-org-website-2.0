import React, { useState, Fragment } from 'react'
import CommunityContent from '../components/communityContent'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import { Tab } from '@headlessui/react'
import { useIntl } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'
// import { Pagination } from 'antd'
import { Skeleton } from 'antd'
import { flex } from 'styled-system'

import CommunityTab from '../components/communityTab'
import CommunitySide from '../components/communitySide'
import { Pagination } from 'antd'
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
      <CommunityTab />
      <CommunitySide />
      {/* <App/> */}
    </>
  )
}
