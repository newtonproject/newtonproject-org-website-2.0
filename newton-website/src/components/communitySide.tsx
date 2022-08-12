import React from 'react'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl, Link } from 'gatsby-plugin-intl'

function CommunitySide() {
  const intl = useIntl()

  return (
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
  )
}
export default CommunitySide
