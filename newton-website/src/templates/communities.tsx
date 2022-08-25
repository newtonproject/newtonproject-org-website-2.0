import React from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import CommunitySide from '../components/communitySide'

export default Communities

function Communities() {
  let pageModel = new PageModelTitle('Community', 'community-list')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <CommunitySide />
    </>
  )
}
