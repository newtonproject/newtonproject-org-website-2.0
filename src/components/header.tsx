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
              <Link to='/'>Get New</Link>
              <Link to='/'>NewPay</Link>
              <Link to='/'>NewMask</Link>
              <Link to='/'>NewExplorer</Link>
              <Link to='/'>NewBridge</Link>
              <Link to='/'>NFT Viewer</Link>
            </div>
          </li>
          <li><Link to='/developers'>Developers</Link></li>
          <li><Link to='/community'>Community</Link></li>
          <li><Link to='/ecosystem'>Ecosystem</Link></li>
        </ul>
        <div className={'header-search'}>
          <div className={'search'}>
            <Link to='/'><span></span></Link>
          </div>
          <div className={'language'}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    {/* header mobile */}
    <div className={'header-mobile-box'}>
      <div className={'header-mobile'}>
        <HeaderModal/>
      <div>
      <StaticImage className={'logo'} alt='logo' src='../static/images/logo.png' />
      </div>
      <div className={'search'}>
        <Link to='/'><span></span></Link>
      </div>
      </div>
    </div>
    
    </>
  )
}


