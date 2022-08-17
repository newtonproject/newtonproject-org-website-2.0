import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { getRequest } from '../utils/axiosData'
import { newsEnvUrl } from '../utils/url'
import { arrDate } from '../utils/createTime'

function CommunityData(props: any) {
  const { entryType } = props
  console.log('==类型', entryType)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    const listUrl = newsEnvUrl + 'api/v1/community/entry-list?entry_type=' + entryType
    getDate(listUrl)
  }, [])

  const getDate = (listUrl: any) => {
    const fetchData = async (listUrl: any) => {
      const res = await getRequest(listUrl)
      setData(res.data.result.data)
      setCurrentPage(res.data.result.page_id)
      setTotalPage(res.data.result.total_page)
    }
    fetchData(listUrl)
  }

  const onPageChange = (page: any) => {
    const detailUrl =
      newsEnvUrl +
      '/api/v1/community/entry-list?entry_type=' +
      entryType +
      '&language=en&page_id=' +
      page +
      '&page_size=10'
    getDate(detailUrl)
  }

  const onEntryPage = (id:any)=> {
    const listUrl = newsEnvUrl + 'api/v1/community/entry-detail?id=' + id
    const fetchData = async (listUrl: any) => {
      const res = await getRequest(listUrl)
      props.setEntryBlog(res.data.result)
    }
    fetchData(listUrl)
  }

  return (
    <div className={'container community-data'}>
      <ul className={'data-list'}>
        {data && data.length > 0
          ? data.map((item: any, index) => {
              return (
                <li key={index}>
                  <a onClick={()=>onEntryPage(item.id)}>
                    <h3>{arrDate(item.created_at)}</h3>
                    <p>{item.title}</p>
                  </a>
                </li>
              )
            })
          : null}
      </ul>
      <Pagination defaultCurrent={1} current={currentPage} total={totalPage} onChange={onPageChange} />
    </div>
  )
}
export default CommunityData
