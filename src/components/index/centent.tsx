import React from 'react'
// import { Link } from 'gatsby'
// import '../../static/css/style.css';

const Banner = () => (
    <div className='container mx-auto px-12'>
        <h3 className='text-center mt-36 mb-12'>Newton's Community Economy</h3>
        <ul className='flex flex-row text-center ml-0'>
            <li className='flex-1'>
                <div></div>
                <h5 className='text-left mb-6 text-xl'>
                    <i className='w-1 h-5 inline-block bg-blueT mr-3 align-text-bottom'></i>
                   Users Own Their Own Data</h5>
                <p className='text-left tracking-wide'>Users secure and control their personal data through cryptography, and manage their personal credit and share profits produced by their data in a pre-agreed manner.</p>
            </li>
            <li className='flex-1 mx-12'>
                <div></div>
                <h5 className='text-left mb-6 text-xl'>
                    <i className='w-1 h-5 inline-block bg-blueT mr-3 align-text-bottom'></i>
                   Better Incentive Mechanisms
                </h5>
                <p className='text-left tracking-wide'>Replacing middlemen with technology reduces transaction costs and rewards anyone who contributes to the transaction, whether they're service providers, consumers or others connected by the value-based internet.</p>
            </li>
            <li className='flex-1'>
                <div></div>
                <h5 className='text-left mb-6 text-xl'>
                    <i className='w-1 h-5 inline-block bg-blueT mr-3 align-text-bottom'></i>
                    New Organization & Cooperation
                </h5>
                <p className='text-left tracking-wide'>The community economy managed by non-profit foundations will replace the monopolies of middlemen managed by traditional for-profit organizations. Based on open, fair, and rational rules, every contributor will benefit from, and become part of this economy.</p>
            </li>
        </ul>
    </div>
)

export default Banner
