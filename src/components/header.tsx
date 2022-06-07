import React  from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const Header = () => (
  <header className={'container header'}>
    <div className={'header-logo'}>
      <div>
        <StaticImage className='w-32' alt='logo' src='../static/images/logo.png' />
      </div>
      <ul>
        <li>
          <Link to=''>Use Newton<span className='w-3 h-3 bg-header-bot inline-block bg-cover ml-2 pt-1 bg-bottom'></span></Link>
        </li>
        <li><Link to='/developers'>Developers</Link></li>
        <li><Link to='/community'>Community</Link></li>
        <li><Link to='/ecosystem'>Ecosystem</Link></li>
      </ul>
      <div className='flex ml-auto'>
        <div>
          <Link to='' className='inline-block'>
            <span className='w-6 h-6 bg-search inline-block bg-cover ml-2 bg-top'></span>
          </Link>
        </div>
        <div className='ml-9'>
          <span className='w-5 h-5 bg-header-zh inline-block bg-cover cursor-pointer'></span>
        </div>
      </div>
    </div>
  </header>
)



export default Header
