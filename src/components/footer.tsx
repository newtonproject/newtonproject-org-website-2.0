import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


export default function Footer() {
    return (
        <>
            <div className={'footer-box'}>
                <div className={'footer'}>
                    <div className={'footer-img'}>
                        <StaticImage alt='logo' src='../static/images/logo.png' />
                    </div>
                    <div className={'footer-content'}>
                        <dl>
                            <dt>COMMUNITY</dt>
                            <dd><Link to='/'>Newton Evolution Proposal</Link></dd>
                            <dd><Link to='/'>Announcements</Link></dd>
                            <dd><Link to='/'>Blog</Link></dd>
                            <dd><Link to='/'>Developer</Link></dd>
                            <dd><Link to='/'>NewStatus</Link></dd>
                            <dd><Link to='/'>FAQ</Link></dd>
                        </dl>
                        <dl>
                            <dt>ABOUT</dt>
                            <dd><Link to='/'>Economy</Link></dd>
                            <dd><Link to='/'>Technology</Link></dd>
                            <dd><Link to='/'>Industry</Link></dd>
                            <dd><Link to='/'>Join Us</Link></dd>
                            <dd><Link to='/'>Contact Us</Link></dd>
                            <dd><Link to='/'>Media Kit</Link></dd>
                            <dd><Link to='/'>Roadmap</Link></dd>
                        </dl>
                        <dl>
                            <dt>SERVICE TERMS</dt>
                            <dd><Link to='/'>Copyright</Link>Copyright</dd>
                            <dd><Link to='/'>Terms of Use</Link></dd>
                            <dd><Link to='/'>Privacy Policy</Link></dd>
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
                <dl>
                    <dt>COMMUNITY</dt>
                    <dd><Link to='/'>Newton Evolution Proposal</Link></dd>
                    <dd><Link to='/'>Announcements</Link></dd>
                    <dd><Link to='/'>Blog</Link></dd>
                    <dd><Link to='/'>Developer</Link></dd>
                    <dd><Link to='/'>NewStatus</Link></dd>
                    <dd><Link to='/'>FAQ</Link></dd>
                </dl>
                <dl className={'footer-item2'}>
                    <dt>ABOUT</dt>
                    <dd><Link to='/'>Economy</Link></dd>
                    <dd><Link to='/'>Technology</Link></dd>
                    <dd><Link to='/'>Industry</Link></dd>
                    <dd><Link to='/'>Join Us</Link></dd>
                    <dd><Link to='/'>Contact Us</Link></dd>
                    <dd><Link to='/'>Media Kit</Link></dd>
                    <dd><Link to='/'>Roadmap</Link></dd>
                </dl>
                <dl className={'footer-item3'}>
                    <dt>SERVICE TERMS</dt>
                    <dd><Link to='/'>Copyright</Link>Copyright</dd>
                    <dd><Link to='/'>Terms of Use</Link></dd>
                    <dd><Link to='/'>Privacy Policy</Link></dd>
                </dl>
            </div>
            <div className={'footer'}>
                <div className={'footer-img'}>
                    <StaticImage alt='logo' src='../static/images/logo.png' />
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
