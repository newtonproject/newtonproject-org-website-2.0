import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Centent() {
    return (
        <>
            <div className={'centent-community'}>
                <h2>Newton's Community Economy</h2>
                <ul>
                    <li>
                        <div><StaticImage className={'community-img'} alt='img' src='../../static/images/home/index-icon1.png' /></div>
                        <h5><i></i>Users Own Their Own Data</h5>
                        <p>Users secure and control their personal data through cryptography, and manage their personal credit and share profits produced by their data in a pre-agreed manner.</p>
                    </li>
                    <li>
                        <div><StaticImage className={'community-img'} alt='img' src='../../static/images/home/index-icon2.png' /></div>
                        <h5><i></i>Better Incentive Mechanisms</h5>
                        <p>Replacing middlemen with technology reduces transaction costs and rewards anyone who contributes to the transaction, whether they're service providers, consumers or others connected by the value-based internet.</p>
                    </li>
                    <li>
                        <div><StaticImage className={'community-img'} alt='img' src='../../static/images/home/index-icon3.png' /></div>
                        <h5><i></i>New Organization &amp; Cooperation</h5>
                        <p>The community economy managed by non-profit foundations will replace the monopolies of middlemen managed by traditional for-profit organizations. Based on open, fair, and rational rules, every contributor will benefit from, and become part of this economy.</p>
                    </li>
                </ul>
            </div>

            <div className={'centent-build'}>
                <ul>
                    <li>
                        <h2>Start Building</h2>
                        <p>Newton's technology framework consists the basic technology layer, the hyper exchange protocol layer, and the application layer. All Newton’s products will be on NewChain-TestNet first for public testing before official launching. The Technical Documentation provides developers with a comprehensive development guide. </p>
                        <div className={'building'}>
                            <Link to='/'>Start Building</Link>
                            <Link to='/'>Listing</Link>
                        </div>
                    </li>
                    <li>
                        <div><StaticImage className={'stake-img'} alt='img' src='../../static/images/home/build-img.png' /></div>
                    </li>
                </ul>
            </div>
            <div className={'centent-build'}>
                <ul>
                    <li>
                        <div> <StaticImage className={'stake-img'} alt='img' src='../../static/images/home/stake-img.png' /></div>
                    </li>
                    <li>
                        <h2>Stake on Newton</h2>
                        <p>NewChain nodes are the key co-constructers of Newton infrastructure. Newton NewChain Testnet and Mainnet are opened to the community, individual can deploy Testnet and Mainnet according to the instructions specified in this repo. Afer deploying the NewChai Mainnet, the Mainnet ledger nodes can produce blocks and get NEW as the transaction fees from every transaction.</p>
                        <div className={'build-become'}>
                            <Link to='/'>Stake</Link>
                            <Link to='/'>Become a validator</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <CentenMobile />
        </>
    )
}

const CentenMobile = () => {
    return (
        <div className={'build-box'}>
            <div className={'build'}>
                <div>
                    <h2>Start Building</h2>
                    <div><StaticImage className={'stake-img'} alt='img' src='../../static/images/home/build-img.png' /></div>
                    <p>Newton's technology framework consists the basic technology layer, the hyper exchange protocol layer, and the application layer. All Newton’s products will be on NewChain-TestNet first for public testing before official launching. The Technical Documentation provides developers with a comprehensive development guide. </p>
                    <div className={'build-a'}>
                        <Link to='/'>Start Building</Link>
                        <Link to='/'>Listing</Link>
                    </div>
                </div>
            </div>
            <div className={'build build-item'}>
                <div>
                    <h2>Stake on Newton</h2>
                    <div> <StaticImage className={'stake-img'} alt='img' src='../../static/images/home/stake-img.png' /></div>
                </div>
                <p>NewChain nodes are the key co-constructers of Newton infrastructure. Newton NewChain Testnet and Mainnet are opened to the community, individual can deploy Testnet and Mainnet according to the instructions specified in this repo. Afer deploying the NewChai Mainnet, the Mainnet ledger nodes can produce blocks and get NEW as the transaction fees from every transaction.</p>
                <div className={'build-a build-become'}>
                    <Link to='/'>Stake</Link>
                    <Link to='/'>Become a validator</Link>
                </div>
            </div>
        </div>
    )
}
