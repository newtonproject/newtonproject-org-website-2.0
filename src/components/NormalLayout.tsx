
import React from 'react'
import Header from './header'
import Footer from './footer'
import ScrollTop from './scrollTop'
import Seo from './seo'
import { PageModel } from '../hooks/pageModel'

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
