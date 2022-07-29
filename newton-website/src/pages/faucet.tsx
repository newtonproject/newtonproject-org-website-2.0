import React from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import FaucetContent from '../components/faucetContent'

export default GetNew

function GetNew() {
  let pageModel = new PageModelTitle('GetFaucet', 'GetFaucet')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
      <FaucetContent />
    </>
  )
}
