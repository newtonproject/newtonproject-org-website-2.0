import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { newsEnvUrl } from '../utils/url'
import { getRequest } from '../utils/axiosData'

function CommunitySide() {
  const intl = useIntl()



  const [data, setData] = useState([])


  // const isActive = ({ isCurrent }: any) => {
  //   console.log('isCurrent',isCurrent)
  //   return isCurrent ? { className: 'active' } : {}
  // }
  let hrefTitle: any = getQueryVariable('entryType');
  const [announcements, setAnnouncements] = useState(false)
  const [activity, setActivity] = useState(false)
  const [press, setPress] = useState(false)
  const [blog, setBlog] = useState(false)
  const [voice, setVoice] = useState(false)

  // if (hrefTitle == 'announcements') {
  //   setAnnouncements(true)
  //   setActivity(false)
  //   setPress(false)
  //   setBlog(false)
  //   setVoice(false)
  // } else if (hrefTitle == 'activity') {
  //   setAnnouncements(true)
  //   setActivity(true)
  //   setPress(false)
  //   setBlog(false)
  //   setVoice(false)

  // }
  // else if (hrefTitle == 'press') {
  //   setAnnouncements(true)
  //   setActivity(false)
  //   setPress(true)
  //   setBlog(false)
  //   setVoice(false)
  if (hrefTitle == 'blog') {
    setAnnouncements(true)
    setActivity(false)
    setPress(false)
    setBlog(true)
    setVoice(false)
  }
  // else if (hrefTitle == 'voice') {
  //   setAnnouncements(true)
  //   setActivity(false)
  //   setPress(false)
  //   setBlog(false)
  //   setVoice(true)
  // }


  hrefTitle = hrefTitle.charAt(0).toUpperCase() + hrefTitle.slice(1)
  if (hrefTitle === 'Voice') {
    hrefTitle = 'Community Voice'
  }






  useEffect(() => {
    const listUrl = newsEnvUrl + 'api/v1/community/entry-detail?id=' + getQueryVariable('id')
    const fetchData = async () => {
      const res = await getRequest(listUrl)
      // props.setEntryBlog(res.data.result)
      console.log('====', listUrl, res)
    }
    fetchData()
  }, [])

  function getQueryVariable(variable: any) {
    let query = window.location.search.substring(1)
    let vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=')
      if (pair[0] == variable) {
        return pair[1]
      }
    }
    return false
  }

  return (
    <>
      <div className={'community-tab'}>
        <div className={'container'}>
          <Link to="/announcements/">
            {intl.formatMessage({ id: 'Announcements' })}
          </Link>
          <Link to="/activity/">
            {intl.formatMessage({ id: 'Activity' })}
          </Link>
          <Link to="/press/">
            {intl.formatMessage({ id: 'Press' })}
          </Link>
          <Link to="/blog/">
            {intl.formatMessage({ id: 'Blog' })}
          </Link>
          <Link to="/voice/">
            {intl.formatMessage({ id: 'Community Voice' })}
          </Link>
        </div>
      </div>
      <div className={'community-tab-h5'}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <span>{intl.formatMessage({ id: `${hrefTitle}` })}</span>
                <StaticImage
                  className={open ? 'avtice-bot bot' : ' bot'}
                  placeholder="blurred"
                  alt="img"
                  src="../static/images/header-bot-hover.png"
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className={'container tab-list'}>
                  <Link to="/announcements/">
                    {intl.formatMessage({ id: 'Announcements' })}
                  </Link>
                  <Link to="/activity/">
                    {intl.formatMessage({ id: 'Activity' })}
                  </Link>
                  <Link to="/press/">
                    {intl.formatMessage({ id: 'Press' })}
                  </Link>
                  <Link to="/blog/">
                    {intl.formatMessage({ id: 'Blog' })}
                  </Link>
                  <Link to="/voice/">
                    {intl.formatMessage({ id: 'Community Voice' })}
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className={'container community-side'}>
        <h2>Newton Weekly | 2022.07.18 -2022.07.22</h2>
        <div className={'author-box'}>
          <div className={'author'}>
            <StaticImage
              className={'img'}
              placeholder="blurred"
              alt="newton logo"
              src="../static/images/newton-logo.png"
            />
          Newtonproject
        </div>
          <div className={'share'}>
            <a href="">
              <span>share</span>
              {/* <div className={''}> */}
              <StaticImage
                className={'img'}
                placeholder="blurred"
                alt="newton logo"
                src="../static/images/home/twitter.png"
              />
              {/* </div> */}
            </a>
          </div>
        </div>
        <div className={'side-list'}>
          <h3>Technical Progress</h3>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <h3>Community News</h3>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
          <p>1. Newton official website DevNet launched five secondary pages in markdown format</p>
        </div>
      </div>
    </>
  )
}
export default CommunitySide
