/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-07-28 17:46:40
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-28 19:46:35
 * @FilePath: /newtonproject-org-website-2.0/newton-website/src/components/NormalLayout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Header from './header'
import Footer from './footer'
// import ScrollTop from './scrollTop'
import Seo from './seo'
import { PageModelTitle } from '../model/PageModel'

export default function NormalLayout(children: React.ReactNode, pageModel: PageModelTitle): JSX.Element {
  return (
    <div className={pageModel.name}>
      <Seo title={pageModel.title} description={''} meta={[]} lang={''} />
      <Header />
      {children}
      <Footer />
      {/* <ScrollTop /> */}
    </div>
  )
}
