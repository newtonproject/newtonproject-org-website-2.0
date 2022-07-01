import React from "react"
export default ({ pageContext: { dog } }:any) => (
  <section>
    {dog.name} - {dog.breed}
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
