import React, { useState } from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import CommunityTab from '../components/communityTab'
import CommunityData from '../components/communityData'

export default Blog

function Blog() {
  let pageModel = new PageModelTitle('Blog', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  const [entryBlog, setEntryBlog] = useState()
  return (
    <>
      <CommunityTab />
      <CommunityData entryType={'blog'} setEntryBlog={setEntryBlog} />
    </>
  )
}
