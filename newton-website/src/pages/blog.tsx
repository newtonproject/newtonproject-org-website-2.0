import React,{useState,createContext} from 'react'
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../model/PageModel'
import CommunityTab from '../components/communityTab'
import CommunityData from '../components/communityData'

// export const Context = createContext('')

export default Blog

function Blog() {
  let pageModel = new PageModelTitle('Blog', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

// export default class Ceshi extends Component <any>
function Main() {
  const [entryBlog,setEntryBlog] = useState();
  console.log('伏组件',entryBlog)

  function changeValue(value:any) {
    setEntryBlog(value);
  }


  return (
    <>
      <CommunityTab />
      <CommunityData entryType={'blog'} setEntryBlog={setEntryBlog} />
      </ >
  )
}
