import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { mdGithub } from '../utils/url'
// import { Link } from 'gatsby-plugin-intl'
import ExpandableCard from '../components/docs/expandableCard'
import Header from '../components/header'
import Footer from '../components/footer'
import Seo from '../components/seo'
import H2 from '../customMdx/h2'
import H3 from '../customMdx/h3'
import H4 from '../customMdx/h4'
import H5 from '../customMdx/h5'
import H6 from '../customMdx/h6'
import Codeblock from '../customMdx/codeblock'
import { arrDate } from '../utils/createTime'

const components = {
  Link,
  ExpandableCard,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  pre: Codeblock
} // Provide common components here

const DocsPage = ({ data: { allMdx, allFile } }: any) => {
  // console.log(JSON.stringify(allMdx))
  let gitLogLatestDate
  if (allFile.edges[0].node.fields !== null) {
    gitLogLatestDate = allFile.edges[0].node.fields.gitLogLatestDate
  }
  const content = allMdx.edges[0].node
  const tableOfContents = content.tableOfContents.items
  const slug = allMdx.edges[0].node.slug
  // console.log('======', slug)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Seo title={content.frontmatter.title} description={''} meta={[]} lang={''} />
      <Header />
      <div className={'container docs'}>
        <div className={'docs-content'}>
          <div className={'updated'}>
            Page last updated :&nbsp;
            {gitLogLatestDate && gitLogLatestDate !== undefined ? arrDate(gitLogLatestDate) : null}
          </div>
          <h1 className={'title'}>{content.frontmatter.title}</h1>
          <MDXProvider components={components}>
            <MDXRenderer>{content.body}</MDXRenderer>
          </MDXProvider>
        </div>

        <div className={'docs-content-title-pc'}>
          <div className={'docs-title-github'}>
            <a href={mdGithub + slug + 'index.md'} className={'githtb-a'} target="_blank">
              <div className={'github-img'}>
                <StaticImage placeholder="blurred" alt="github" src="../static/images/docs/docs-github.png" />
              </div>
              <span>Edit Page</span>
            </a>
          </div>
          <div className={'docs-content-title'}>
            {tableOfContents && tableOfContents.length > 0
              ? tableOfContents.map((item: any, index: number) => {
                  return (
                    <ul key={index}>
                      <li>
                        <Link to={item.url} className={'title-a'}>
                          {item.title}
                        </Link>
                        {item.items && item.items.length > 0
                          ? item.items.map((data: any, index: number) => {
                              return (
                                <div key={index} className={'title-a-content'}>
                                  {<Link to={data.url}>{data.title}</Link>}
                                </div>
                              )
                            })
                          : null}
                      </li>
                    </ul>
                  )
                })
              : null}
          </div>
        </div>

        <div className={'docs-content-title-modal'}>
          <div className={'docs-button-box'}>
            <button className={'docs-button'} type="button" onClick={openModal}>
              <StaticImage
                className={'button-img'}
                placeholder="blurred"
                alt="docs-button"
                src="../static/images/docs/docs-header.png"
              />
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="docs-modal relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="modal-box">
                      <Dialog.Title as="h3" className={'title'}>
                        {content.frontmatter.title}
                        <div className={'close'} onClick={closeModal}>
                          <StaticImage placeholder="blurred" alt="close" src="../static/images/docs/docs-close.png" />
                        </div>
                      </Dialog.Title>
                      <div className={'docs-content-title'} onClick={closeModal}>
                        {tableOfContents && tableOfContents.length > 0
                          ? tableOfContents.map((item: any, index: number) => {
                              return (
                                <ul key={index}>
                                  <li>
                                    <Link to={item.url} className={'title-a'}>
                                      {item.title}
                                    </Link>
                                    {item.items && item.items.length > 0
                                      ? item.items.map((data: any, index: number) => {
                                          return (
                                            <div key={index} className={'title-a-content'}>
                                              {<Link to={data.url}>{data.title}</Link>}
                                            </div>
                                          )
                                        })
                                      : null}
                                  </li>
                                </ul>
                              )
                            })
                          : null}
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
      <Footer />
    </>
  )
}
// tableOfContents(maxDepth: 2)
export const query = graphql`
  query ($slug: String!, $relativeDirectory: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          rawBody
          body
          frontmatter {
            title
            template
          }
          tableOfContents
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: $relativeDirectory } }) {
      edges {
        node {
          fields {
            gitLogLatestAuthorName
            gitLogLatestAuthorEmail
            gitLogLatestDate
          }
          relativeDirectory
        }
      }
    }
  }
`
export default DocsPage
