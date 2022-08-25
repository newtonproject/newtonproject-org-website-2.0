import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useIntl, Link } from 'gatsby-plugin-intl-v6'
import { newsEnvUrl } from '../utils/url'

export default function Footer() {
  const intl = useIntl()

  return (
    <>
      <div className={'footer-box'}>
        <div className={'footer'}>
          <div className={'footer-img'}>
            <Link to="/">
              <StaticImage placeholder="blurred" alt="logo" src="../static/images/logo.png" />
            </Link>
          </div>
          <div className={'footer-content'}>
            <dl>
              <dt>{intl.formatMessage({ id: 'COMMUNITY' })}</dt>
              <dd>
                <a href="https://neps.newtonproject.org/" target="_blank">
                  {intl.formatMessage({ id: 'Newton Evolution Proposal' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/announcement/'} target="_blank">
                  {intl.formatMessage({ id: 'Announcements' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/blog/'} target="_blank">
                  {intl.formatMessage({ id: 'Blog' })}
                </a>
              </dd>
              <dd>
                <Link to="/developers/docs/">{intl.formatMessage({ id: 'Developers' })}</Link>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/newstatus/'} target="_blank">
                  {intl.formatMessage({ id: 'NewStatus' })}
                </a>
              </dd>
              <dd>
                <Link to="/faq/">{intl.formatMessage({ id: 'FAQ' })}</Link>
              </dd>
            </dl>
            <dl>
              <dt>{intl.formatMessage({ id: 'DEVELOPERS' })}</dt>
              <dd>
                <Link to="/faucet/">{intl.formatMessage({ id: 'Get Faucet' })}</Link>
              </dd>
            </dl>
            <dl>
              <dt>{intl.formatMessage({ id: 'ABOUT' })}</dt>
              <dd>
                <Link to="/getnew/">{intl.formatMessage({ id: 'Economy' })}</Link>
              </dd>
              {/* <dd>
                <a href={newsEnvUrl + '/technology/'} target="_blank">
                  {intl.formatMessage({ id: 'Technology' })}
                </a>
              </dd>
              <dd>
                <a href={newsEnvUrl + '/solutions/'} target="_blank">
                  {intl.formatMessage({ id: 'Industry' })}
                </a>
              </dd> */}
              <dd>
                <Link to="/get-involved/">{intl.formatMessage({ id: 'Get involved' })}</Link>
              </dd>
              <dd>
                <Link to="/contact/">{intl.formatMessage({ id: 'Contact Us' })}</Link>
              </dd>
              <dd>
                {/* <a href={newsEnvUrl + '/mediakit/'} target="_blank">
                  {intl.formatMessage({ id: 'Media Kit' })}
                </a> */}
                <Link to="/mediakit/">{intl.formatMessage({ id: 'Media Kit' })}</Link>
              </dd>
              <dd>
                <Link to={'/roadmap/'} target="_blank">
                  {intl.formatMessage({ id: 'Roadmap' })}
                </Link>
              </dd>
            </dl>
            <dl>
              <dt>{intl.formatMessage({ id: 'SERVICE TERMS' })}</dt>
              <dd>
                <Link to="/copyright/">{intl.formatMessage({ id: 'Copyright' })}</Link>
              </dd>
              <dd>
                <Link to="/terms-of-use/">{intl.formatMessage({ id: 'Terms of Use' })}</Link>
              </dd>
              <dd>
                <Link to="/privacy/">{intl.formatMessage({ id: 'Privacy Policy' })}</Link>
              </dd>
            </dl>
          </div>
        </div>
        <div className={'footer-copyright'}>
          <div>
            <div>
              <StaticImage placeholder="blurred" alt="logo" src="../static/images/footer/footer.png" />
              {intl.formatMessage({
                id: 'Paying tribute to Sir Isaac Newton — the great scientist who made a significant impact on our lives!'
              })}
            </div>
          </div>
          <p>{intl.formatMessage({ id: 'Copyright © 2022 Newton Foundation. All Rights Reserved.' })}</p>
        </div>
      </div>
      <FooterMobile />
    </>
  )
}

const FooterMobile = () => {
  const intl = useIntl()
  return (
    <div className={'footer-mobile'}>
      <div className={'footer-content'}>
        <dl className={'footer-item1'}>
          <dt>{intl.formatMessage({ id: 'COMMUNITY' })}</dt>
          <dd>
            <a href="https://neps.newtonproject.org/" target="_blank">
              {intl.formatMessage({ id: 'Newton Evolution Proposal' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/announcement/'} target="_blank">
              {intl.formatMessage({ id: 'Announcements' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/blog/'} target="_blank">
              {intl.formatMessage({ id: 'Blog' })}
            </a>
          </dd>
          <dd>
            <Link to="/developers/docs/">{intl.formatMessage({ id: 'Developers' })}</Link>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/newstatus/'} target="_blank">
              {intl.formatMessage({ id: 'NewStatus' })}
            </a>
          </dd>
          <dd>
            <Link to="/faq/">{intl.formatMessage({ id: 'FAQ' })}</Link>
          </dd>
        </dl>
        <dl className={'footer-item4'}>
          <dt>{intl.formatMessage({ id: 'DEVELOPERS' })}</dt>
          <dd>
            <Link to="/faucet/">{intl.formatMessage({ id: 'Get Faucet' })}</Link>
          </dd>
        </dl>
        <dl className={'footer-item2'}>
          <dt>{intl.formatMessage({ id: 'ABOUT' })}</dt>
          <dd>
            <Link to="/getnew/">{intl.formatMessage({ id: 'Economy' })}</Link>
          </dd>
          {/* <dd>
            <a href={newsEnvUrl + '/technology/'} target="_blank">
              {intl.formatMessage({ id: 'Technology' })}
            </a>
          </dd>
          <dd>
            <a href={newsEnvUrl + '/solutions/'} target="_blank">
              {intl.formatMessage({ id: 'Industry' })}
            </a>
          </dd> */}
          <dd>
            <Link to="/get-involved/">{intl.formatMessage({ id: 'Get involved' })}</Link>
          </dd>
          <dd>
            <Link to="/contact/">{intl.formatMessage({ id: 'Contact Us' })}</Link>
          </dd>
          <dd>
            {/* <a href={newsEnvUrl + '/mediakit/'} target="_blank">
              {intl.formatMessage({ id: 'Media Kit' })}
            </a> */}
            <Link to="/mediakit/">{intl.formatMessage({ id: 'Media Kit' })}</Link>
          </dd>
          <dd>
            <Link to={'/roadmap/'} target="_blank">
              {intl.formatMessage({ id: 'Roadmap' })}
            </Link>
          </dd>
        </dl>
        <dl className={'footer-item3'}>
          <dt>{intl.formatMessage({ id: 'SERVICE TERMS' })}</dt>
          <dd>
            <Link to="/copyright/">{intl.formatMessage({ id: 'Copyright' })}</Link>
          </dd>
          <dd>
            <Link to="/terms-of-use/">{intl.formatMessage({ id: 'Terms of Use' })}</Link>
          </dd>
          <dd>
            <Link to="/privacy/">{intl.formatMessage({ id: 'Privacy Policy' })}</Link>
          </dd>
        </dl>
      </div>
      <div className={'footer'}>
        <div className={'footer-img'}>
          <Link to="/">
            <StaticImage placeholder="blurred" alt="logo" src="../static/images/logo.png" />
          </Link>
        </div>
        <div className={'footer-copyright'}>
          <div>
            <div>
              <StaticImage placeholder="blurred" alt="logo" src="../static/images/footer/footer.png" />
              {intl.formatMessage({ id: 'Paying tribute to Sir Isaac Newton' })}
              <br />
              {intl.formatMessage({ id: 'the great scientist who made a significant impact on our lives!' })}
            </div>
          </div>
          <p>{intl.formatMessage({ id: 'Copyright © 2022 Newton Foundation. All Rights Reserved.' })}</p>
        </div>
      </div>
    </div>
  )
}
