
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollTop from '../components/scrollTop'
import Seo from '../components/seo'

class PageModel {
    title: string
    constructor(title: string) {
      this.title = title
    }
}

export default function NormalLayout(children: React.ReactNode, pageModel: PageModel): JSX.Element {
    return (
        <>
            <Seo title={pageModel.title} description={''} meta={[]} lang={''}  />
            <Header />
            {children}
            <Footer />
            <ScrollTop />
        </>
    )
}
