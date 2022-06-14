import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


export default function Footer() {
    return (
        <>
            <div className={'footer-box'}>
                <div className={'footer'}>
                    <div className={'footer-img'}>
                        <Link to='/'>
                            <StaticImage alt='logo' src='../static/images/logo.png' />
                        </Link>
                    </div>
                    <div className={'footer-content'}>
                        <dl>
                            <dt>COMMUNITY</dt>
                            <dd><a href='https://neps.newtonproject.org/' target='_blank'>Newton Evolution Proposal</a></dd>
                            <dd><a href='https://www.newtonproject.org/announcement/' target='_blank'>Announcements</a></dd>
                            <dd><a href='https://www.newtonproject.org/blog/' target='_blank'>Blog</a></dd>
                            <dd><a href='https://developer.newtonproject.org/' target='_blank'>Developer</a></dd>
                            <dd><a href='https://www.newtonproject.org/newstatus/' target='_blank'>NewStatus</a></dd>
                            <dd><a href='https://www.newtonproject.org/faq/' target='_blank'>FAQ</a></dd>
                        </dl>
                        <dl>
                            <dt>ABOUT</dt>
                            <dd><Link to='/getnew'>Economy</Link></dd>
                            <dd><a href='https://www.newtonproject.org/technology/' target='_blank'>Technology</a></dd>
                            <dd><a href='https://www.newtonproject.org/solutions/' target='_blank'>Industry</a></dd>
                            <dd><a href='https://www.newtonproject.org/joinus/' target='_blank'>Join Us</a></dd>
                            <dd><a href='https://www.newtonproject.org/contact/' target='_blank'>Contact Us</a></dd>
                            <dd><a href='https://www.newtonproject.org/mediakit/' target='_blank'>Media Kit</a></dd>
                            <dd><a href='https://www.newtonproject.org/roadmap/' target='_blank'>Roadmap</a></dd>
                        </dl>
                        <dl>
                            <dt>SERVICE TERMS</dt>
                            <dd><a href='https://www.newtonproject.org/copyright/' target='_blank'>Copyright</a></dd>
                            <dd><a href='https://www.newtonproject.org/terms-of-use/' target='_blank'>Terms of Use</a></dd>
                            <dd><a href='https://www.newtonproject.org/privacy/' target='_blank'>Privacy Policy</a></dd>
                        </dl>
                    </div>
                </div>
                <div className={'footer-copyright'}>
                    <div>
                        <div>
                            <StaticImage alt='logo' src='../static/images/footer/footer.png' />
                            Paying tribute to Sir Isaac Newton — the great scientist who made a significant impact on our lives!</div>
                    </div>
                    <p>Copyright © 2022 Newton Foundation. All Rights Reserved.</p>
                </div>
            </div>
            <FooterMobile />
        </>
    )
}

const FooterMobile = () => {
    return (
        <div className={'footer-mobile'}>
            <div className={'footer-content'}>
                <dl className={'footer-item1'}>
                    <dt>COMMUNITY</dt>
                    <dd><a href='https://neps.newtonproject.org/' target='_blank'>Newton Evolution Proposal</a></dd>
                    <dd><a href='https://www.newtonproject.org/announcement/' target='_blank'>Announcements</a></dd>
                    <dd><a href='https://www.newtonproject.org/blog/' target='_blank'>Blog</a></dd>
                    <dd><a href='https://developer.newtonproject.org/' target='_blank'>Developer</a></dd>
                    <dd><a href='https://www.newtonproject.org/newstatus/' target='_blank'>NewStatus</a></dd>
                    <dd><a href='https://www.newtonproject.org/faq/' target='_blank'>FAQ</a></dd>
                </dl>
                <dl className={'footer-item2'}>
                    <dt>ABOUT</dt>
                    <dd><Link to='/getnew'>Economy</Link></dd>
                    <dd><a href='https://www.newtonproject.org/technology/' target='_blank'>Technology</a></dd>
                    <dd><a href='https://www.newtonproject.org/solutions/' target='_blank'>Industry</a></dd>
                    <dd><a href='https://www.newtonproject.org/joinus/' target='_blank'>Join Us</a></dd>
                    <dd><a href='https://www.newtonproject.org/contact/' target='_blank'>Contact Us</a></dd>
                    <dd><a href='https://www.newtonproject.org/mediakit/' target='_blank'>Media Kit</a></dd>
                    <dd><a href='https://www.newtonproject.org/roadmap/' target='_blank'>Roadmap</a></dd>
                </dl>
                <dl className={'footer-item3'}>
                    <dt>SERVICE TERMS</dt>
                    <dd><a href='https://www.newtonproject.org/copyright/' target='_blank'>Copyright</a></dd>
                    <dd><a href='https://www.newtonproject.org/terms-of-use/' target='_blank'>Terms of Use</a></dd>
                    <dd><a href='https://www.newtonproject.org/privacy/' target='_blank'>Privacy Policy</a></dd>
                </dl>
            </div>
            <div className={'footer'}>
                <div className={'footer-img'}>
                    <Link to='/'>
                        <StaticImage alt='logo' src='../static/images/logo.png' />
                    </Link>
                </div>
                <div className={'footer-copyright'}>
                    <div>
                        <div>
                            <StaticImage alt='logo' src='../static/images/footer/footer.png' />
                        Paying tribute to Sir Isaac Newton<br />the great scientist who made a significant impact on our lives!</div>
                    </div>
                    <p>Copyright © 2022 Newton Foundation. All Rights Reserved.</p>
                </div>
            </div>

        </div>
    )
}
