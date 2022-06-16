import React from "react"
import EcosystemContent from '../components/ecosystemContent'
import NormalLayout from '../components/NormalLayout'
import { PageModel } from '../hooks/PageModel'

export default Ecosystem

function Ecosystem() {
  let pageModel = new PageModel('Ecosystem')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <div className={'ecosystem-html'}>
      <EcosystemContent />
    </div>
  )
}