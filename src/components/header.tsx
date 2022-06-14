import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import  HeaderModal from './headerModal'

export default function Header() {
  return (
    <>
    <div className={'header'}>
      <div className={'header-logo'}>
        <div>
          <StaticImage className='w-32' alt='logo' src='../static/images/logo.png' />
        </div>
        <ul>
          <li className={'header-use'}>
            <Link to=''>Use Newton<span></span></Link>
            <div className={'header-down'}>
              <Link to='/getnew'>GetNew</Link>
              <a href='https://www.newtonproject.org/newpay/' target='_blank'>NewPay</a>
              <a href='https://addons.mozilla.org/zh-CN/firefox/addon/newmask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search' target='_blank'>NewMask</a>
              <a href='https://explorer.newtonproject.org/' target='_blank'>NewExplorer</a>
              <a href='https://newbridge.network/' target='_blank'>NewBridge</a>
              <a href='https://nft.newscan.io/' target='_blank'>NFT Viewer</a>
            </div>
          </li>
          <li><a href='https://developer.newtonproject.org/' target='_blank'>Developers</a></li>
          <li><Link to='/community'>Community</Link></li>
          <li><Link to='/ecosystem'>Ecosystem</Link></li>
        </ul>
        {/* <div className={'header-search'}>
          <div className={'search'}>
            <Link to='/'><span></span></Link>
          </div>
          <div className={'language'}>
            <span></span>
          </div>
        </div> */}
      </div>
    </div>
    {/* header mobile */}
    <div className={'header-mobile-box'}>
      <div className={'header-mobile'}>
        <HeaderModal/>
      <div>
      <StaticImage className={'logo'} alt='logo' src='../static/images/logo.png' />
      </div>
      {/* <div className={'search'}>
        <Link to='/'><span></span></Link>
      </div> */}
      </div>
    </div>
    
    </>
  )
}


