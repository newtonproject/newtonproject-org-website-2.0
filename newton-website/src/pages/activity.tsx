import React, { useState, Fragment } from 'react'
import CommunityContent from '../components/communityContent'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import { Tab } from '@headlessui/react'
import { useIntl } from 'gatsby-plugin-intl'
import { StaticImage } from 'gatsby-plugin-image'
import { Pagination } from 'antd'
import { Skeleton } from 'antd'
import { flex } from 'styled-system'

import CommunityTab from '../components/communityTab'
import CommunityData from '../components/communityData'
export default Community

function Community() {
  let pageModel = new PageModelTitle('Activitys', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  const intl = useIntl()

  return (
    <>
      <CommunityTab />
      <CommunityData />
    </>
  )
}
