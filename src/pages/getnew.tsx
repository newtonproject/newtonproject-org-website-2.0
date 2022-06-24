import React from 'react'
import GetNewContent from '../components/getNewContent'
import NormalLayout from '../components/normalLayout'
import { PageModelTitle } from '../hooks/pageModel'

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
