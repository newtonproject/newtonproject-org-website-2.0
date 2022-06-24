import React from 'react'
import GetNewContent from '../components/getNewContent'
import NormalLayout from '../components/normalLayout'
import { PageModel } from '../hooks/pageModel'

export default GetNew

function GetNew() {
  let pageModel = new PageModel('GetNew', 'getNew-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <GetNewContent />
    </>
  )
}
