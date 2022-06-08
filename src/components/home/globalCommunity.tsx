import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import GitHub from '../../static/images/home/github.png'

let GlobalImg = [
    {
        title: 'Telegram',
        url: '../static/images/home/telegram.png'
    },
    {
        title: 'Twitter',
        url: '../static/images/home/twitter.png'
    },
    {
        title: 'Facebook',
        url: '../static/images/home/facebook.png'
    },
    {
        title: 'Medium',
        url: '../static/images/home/medium.png'
    },
    {
        title: 'Google Group',
        url: '../static/images/home/group.png'
    },
    {
        title: 'Reddit',
        url: '../static/images/home/reddit.png'
    },
    {
        title: 'GitHub',
        url: '../static/images/home/github.png'
    }
]

const GlobalCommunity = () => (
    <div className={'global'}>
        <h2>Global Community</h2>
        <ul>
            {
                GlobalImg.map((item, index) => {
                    return (
                        <li key={index}>
                            <div>
                                {/* <StaticImage alt={item.title} src={item.url} /> */}
                                <img src={GitHub} />
                                {/* <StaticImage alt='' src='../static/images/github.png'  /> */}
                            </div>
                            <h5>{item.title}</h5>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)

export default GlobalCommunity
