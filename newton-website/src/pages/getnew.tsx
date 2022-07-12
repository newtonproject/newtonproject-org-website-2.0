import React from 'react'
import GetNewContent from '../components/getNewContent'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'

export default GetNew

function GetNew() {
  let pageModel = new PageModelTitle('GetNew', 'getNew-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <GetNewContent />
    </>
  )
}
