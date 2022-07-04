import React from "react"
import NormalLayout from '../components/NormalLayout'
import { PageModelTitle } from '../hooks/PageModel'
import MdContent  from './docs'

// export default ({ pageContext: { dog } }:any) => (
//   <section>
//     {dog.name} - {dog.breed}
//   </section>
// )

export default MdpageBox

function MdpageBox() {
  let pageModel = new PageModelTitle('Community', 'community-html')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}

function Main() {
  return (
    <>
    <MdContent />
    </>
    
  )
}

