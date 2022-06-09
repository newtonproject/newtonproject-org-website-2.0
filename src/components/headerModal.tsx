import React, { Fragment, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'gatsby'
import { Dialog, Transition } from '@headlessui/react'
export default function HeaderModal() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  return (
    <>
      <div onClick={() => setMobileSidebarOpen(true)} className={'header-menu'}>
        <AiOutlineMenu />
      </div>
      <Transition.Root show={mobileSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className={'modal'}
          open={mobileSidebarOpen}
          onClose={setMobileSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="overlay" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div id="mobile-sidebar" className="mobile-sidebar">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={"close-btn"}>
                  <button
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </Transition.Child>
              <nav>
                <div onClick={() => setMobileSidebarOpen(false)}>
                  <SiteNavMenu />
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

const SiteNavMenu = () => {
  return (
    <>
      <div className="header-nav-menu">
        <ul>
          <li className={'header-use'}>
            <Link to=''>Use Newton</Link>
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
      </div>
      {/* <div className={'header-footer'}>
        <div className={'search'}>
          <Link to='/'><span></span></Link>
          <p>Search</p>
        </div>
        <div className={'language'}>
          <Link to='/'><span></span></Link>
          <p>Languages</p>
        </div>
      </div> */}
    </>
  )
}


