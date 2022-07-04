import React from "react"
export default ({ pageContext: { redirects } }:any) => (
  <section>
    {redirects.name} - {redirects.breed}
  </section>
)



// const MdContent = ({ pageContext: { dog } }: any) => {
//   return(
//     <section>
//       {dog.name} - {dog.breed}
//     </section>
//   )
// }
// export default MdContent
