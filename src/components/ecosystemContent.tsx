import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import bannerEcosystem from '../static/images/ecosystem/ecosystem-banner.png'
import bannerEcosystemH5 from '../static/images/ecosystem/ecosystem-banner-h5.png'

const EcosystemContent = () => (
    <div id={'ecosystem'}>
        <div className={'getnew-banner'}>
            <img className={'ecosystem-banner-pc'} src={bannerEcosystem} alt='img' />
            <img className={'ecosystem-banner-h5'} src={bannerEcosystemH5} alt='img' />
            <h2>ECOSYSTEM</h2>
        </div>
        <div className={'ecosystem-content ecosystem-container container'}>
            <dl>
                <dt><i></i>NFT</dt>
                <dd className={'new-mall'}>
                    <a href=''>
                        <StaticImage alt='new-mall' src='../static/images/ecosystem/new-mall.png' />
                        <span>Leading NFT Market</span>
                    </a>
                </dd>
                <dd className={'new-asset'}>
                    <a href=''>
                        <StaticImage alt='new-asset' src='../static/images/ecosystem/new-asset.png' />
                        <span>Token Generator Tool on NewChain</span>
                    </a>
                </dd>
            </dl>
            <dl>
                <dt><i></i>Wallet</dt>
                <dd className={'new-mall'}>
                    <a href=''>
                        <StaticImage alt='new-pay' src='../static/images/ecosystem/new-pay.png' />
                        <span>Decentralized Digital Wallet Of Newton Community Economy</span>
                    </a>
                </dd>
                <dd className={'new-mask'}>
                    <a href=''>
                        <StaticImage alt='new-mask' src='../static/images/ecosystem/new-mask.png' />
                        <span>An extension for accessing NewChain enabled distributed applications</span>
                    </a>
                </dd>
            </dl>
            <dl>
                <dt><i></i>DEX</dt>
                <dd className={'new-swap'}>
                    <a href=''>
                        <StaticImage alt='new-swap' src='../static/images/ecosystem/new-swap.png' />
                        <span>Decentralized Exchange Protocol on NewChain</span>
                    </a>
                </dd>
            </dl>
            <dl>
                <dt><i></i>Metaverse</dt>
                <dd className={'andverse'}>
                    <a href=''>
                        <StaticImage alt='andverse' src='../static/images/ecosystem/andverse.png' />
                        <span>A decentralized multigalactic metaverse.</span>
                    </a>
                </dd>
            </dl>
            <dl>
                <dt><i></i>Cross-chain</dt>
                <dd className={'new-bridge'}>
                    <a href=''>
                        <StaticImage alt='new-bridge' src='../static/images/ecosystem/new-bridge.png' />
                        <span>Supports Inter-Chain token transfer between NewChain and others </span>
                    </a>
                </dd>
            </dl>
        </div>
        <div className={'ecosystem-submit'}>
            <a href='https://github.com/newtonproject/ecosystem-projects' target='_blank'>
                <i className={'submit'}>Submit Your project</i>
                <span className={'add-content'}>Create a Newton Community With Us</span>
                <i className={'add-community'}>Add Community</i>
            </a>
        </div>
    </div>
)

export default EcosystemContent
