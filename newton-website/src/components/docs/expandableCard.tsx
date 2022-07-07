import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { DocsProps } from '../../hooks/PageModel'
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/solid'

const ExpandableCard: React.FC<DocsProps> = props => {
  const { title, contentPreview, contentList } = props
  return (
    <div className={'expandable-card'}>
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={'card-title'}>
                <h2>{title}</h2>
                <p>{contentPreview}</p>
                <div>
                  {open ? (
                    <StaticImage
                      placeholder="blurred"
                      className={'card-img'}
                      alt="card-top"
                      src="../../static/images/docs/docs-bottom.png"
                    />
                  ) : (
                    <StaticImage
                      placeholder="blurred"
                      className={'card-img'}
                      alt="card-top"
                      src="../../static/images/docs/docs-top.png"
                    />
                  )}
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className={'card'}>
                <p>{contentList}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
export default ExpandableCard

{
  /* <div className={'expandable-card'}>
<h2>{title}</h2>
<p>{contentPreview}</p>
<div className={'card'}>
   <p>{contentList}</p> 
</div>
</div> */
}
