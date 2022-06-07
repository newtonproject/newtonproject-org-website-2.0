import React from 'react'
import { Link } from 'gatsby'

let bannerlist = [
    {
        title: 'NewPay',
        centent: 'Decentralized digital wallet',
        url: ''
    },
    {
        title: 'Get New',
        centent: 'Earned from the Ecosystem',
        url: ''
    },
    {
        title: 'NewExplorer',
        centent: 'Explorer & Analytics platform',
        url: ''
    },
    {
        title: 'NewBridge',
        centent: 'Realize asset exchange',
        url: ''
    }
];

const Banner = () => (
    <div  className='container mx-auto py-6 px-12'>
        <div className='text-xs text-blueW'>
            <p className='mb-2'>Newton Weekly<span className='ml-4 text-blueS'>03/07/2022 - 03/13 • 03/4</span></p>
            <p>Mining Instructions<span className='ml-4 text-blueS'>14/04/2021</span></p>
        </div>
        <div>
            <div className='text-6xl font-bold md:font-bold'>
            Infrastructure<br />For The<br />Community<br />Economy
            </div>
        </div>
        <div className='flex flex-row text-center'>
            {
                bannerlist.map((item,index)=> {
                    return (
                        <Link to={item.url} key={index} className='flex-1 bg-banner-a-bg bg-cover bg-center'>
                            <p className='text-xl text-blueT font-bold mb-0 mt-6'>{item.title}</p>
                            <p className='text-sm text-blueW'>{item.centent}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
)

export default Banner
