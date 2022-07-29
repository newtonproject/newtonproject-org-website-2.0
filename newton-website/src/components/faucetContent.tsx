import React, { useState, useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { getRequest } from '../utils/axiosData'
import { utils } from 'ethers'
import { useIntl } from 'gatsby-plugin-intl'

const base58check = require('base58check')
const NEW_PREFIX = 'NEW'

export default function FaucetContent() {
  useEffect(() => {
    ;(window as any).global = window
    window.Buffer = window.Buffer || require('buffer').Buffer
  }, [])

  const intl = useIntl()
  const faucetUrl = 'https://rpc3.newchain.cloud.diynova.com/faucet?address='
  const [adresseTit, setAdresseTit] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [titHidden, setTitHidden] = useState(true)
  let tit3 = intl.formatMessage({ id: 'Done! Go check your balance' })
  function getFaucet() {
    let inputAddress: any = inputRef.current?.value
    let targetAddress = new2hex(inputAddress)
    // todo: check target address is valid.

    if (targetAddress == '') {
      let tit1 = intl.formatMessage({ id: 'Please enter your Newton Testnet address' })
      setAdresseTit(tit1)
      setTitHidden(false)
      return
    } else if (!utils.isAddress(targetAddress)) {
      let tit2 = intl.formatMessage({ id: 'Please check that the address you entered' })
      setAdresseTit(tit2)
      setTitHidden(false)
      return
    } else if (utils.isAddress(targetAddress)) {
      const address = async () => {
        getRequest(`${faucetUrl}${targetAddress}`)
          .then(res => {
            console.log(res)
          })
          .catch(error => {
            console.log(error)
          })
      }
      setAdresseTit(tit3)
      setTitHidden(false)
      address()
    }
  }
  function new2hex(newAddress: string) {
    if (newAddress == null || !newAddress.startsWith(NEW_PREFIX)) {
      return newAddress
    }
    const hex = '0x' + base58check.decode(newAddress.slice(3), 'hex').data.slice(4)
    return hex
  }

  function inputOnFocus() {
    setTitHidden(true)
  }

  return (
    <div className={'container get-faucet'}>
      <h2 className={'title'}>{intl.formatMessage({ id: 'Newton Testnet Faucet' })}</h2>
      <div className={'newton-box'}>
        <input
          type="text"
          placeholder={intl.formatMessage({ id: 'Your Newton Address' })}
          ref={inputRef}
          onFocus={() => inputOnFocus()}
        ></input>
        <span className="place" onClick={() => getFaucet()}>
          {intl.formatMessage({ id: 'Give Me Testnet NEW' })}
          <StaticImage
            className={'faucet-img'}
            placeholder="blurred"
            alt="get-faucet"
            src="../static/images/get-faucet.png"
          />
        </span>
      </div>
      {titHidden !== true ? (
        adresseTit !== tit3 ? (
          <div className={'tit error'}>
            <StaticImage placeholder="blurred" alt="error" src="../static/images/error.png" />
            {adresseTit}
          </div>
        ) : (
          <div className={'tit success'}>
            <StaticImage placeholder="blurred" alt="success" src="../static/images/success.png" />
            {adresseTit}
          </div>
        )
      ) : null}
    </div>
  )
}
