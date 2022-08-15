import React from 'react'
import { Disclosure } from '@headlessui/react'
import { useIntl, Link } from 'gatsby-plugin-intl'
import { Pagination } from 'antd'
function CommunityData() {
  const intl = useIntl()

  return (
    <div className={'container community-data'}>
      <ul className={'data-list'}>
        <li>
          <h3>July 4, 2022</h3>
          <p>Newton Weekly | 2022.07.18 - 2022.07.22</p>
        </li>
        <li>
          <h3>July 4, 2022</h3>
          <p>Newton Weekly | 2022.07.18 - 2022.07.22</p>
        </li>
        <li>
          <h3>July 4, 2022</h3>
          <p>Newton Weekly | 2022.07.18 - 2022.07.22</p>
        </li>
        <li>
          <h3>July 4, 2022</h3>
          <p>Newton Weekly | 2022.07.18 - 2022.07.22</p>
        </li>
        <li>
          <h3>July 4, 2022</h3>
          <p>Newton Weekly | 2022.07.18 - 2022.07.22</p>
        </li>
      </ul>
      <App />
    </div>
  )
}
export default CommunityData

const App = () => {
  return <Pagination defaultCurrent={6} total={100} />
}
