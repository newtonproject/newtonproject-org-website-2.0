
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollTop from '../components/scrollTop'
import Seo from '../components/seo'
import { PageModel } from '../hooks/PageModel'
import { injectIntl } from "gatsby-plugin-intl"

export default function NormalLayout(children: React.ReactNode, pageModel: PageModel): JSX.Element {
    return (
        <div className={pageModel.name}>
            <Seo title={pageModel.title} description={''} meta={[]} lang={''}  />
            <Header />
            {children}
            <Footer />
            <ScrollTop />
        </div>
    )
}
