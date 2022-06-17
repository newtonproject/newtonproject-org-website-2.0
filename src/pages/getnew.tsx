import React from "react"
import GetNewContent from '../components/getNewContent'
import NormalLayout from '../components/NormalLayout'
import { PageModel } from '../hooks/PageModel'

export default GetNew

function GetNew() {
  let pageModel = new PageModel('GetNew','getNew-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <GetNewContent />
    </>
  )
}
