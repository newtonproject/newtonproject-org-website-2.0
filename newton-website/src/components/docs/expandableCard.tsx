import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { DocsProps } from '../../model/PageModel'
import { Disclosure } from '@headlessui/react'

const ExpandableCard: React.FC<DocsProps> = ({ children, title, contentPreview }: any) => {
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
                      src="../../static/images/docs/docs-top.png"
                    />
                  ) : (
                    <StaticImage
                      placeholder="blurred"
                      className={'card-img'}
                      alt="card-top"
                      src="../../static/images/docs/docs-bottom.png"
                    />
                  )}
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className={'card'}>{children}</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default ExpandableCard
