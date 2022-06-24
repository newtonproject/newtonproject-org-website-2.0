import React from 'react'
import EcosystemContent from '../components/ecosystemContent'
import NormalLayout from '../components/normalLayout'
import { PageModelTitle } from '../hooks/pageModel'

export default Ecosystem

function Ecosystem() {
  let pageModel = new PageModelTitle('Ecosystem', 'ecosystem-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <div>
      <EcosystemContent />
    </div>
  )
}
