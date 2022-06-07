import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import GitHub from '../../static/images/index/github.png'

let GlobalImg = [
    {
        title: 'Telegram',
        url: '../static/images/index/telegram.png'
    },
    {
        title: 'Twitter',
        url: '../static/images/index/twitter.png'
    },
    {
        title: 'Facebook',
        url: '../static/images/index/facebook.png'
    },
    {
        title: 'Medium',
        url: '../static/images/index/medium.png'
    },
    {
        title: 'Google Group',
        url: '../static/images/index/group.png'
    },
    {
        title: 'Reddit',
        url: '../static/images/index/reddit.png'
    },
    {
        title: 'GitHub',
        url: '../static/images/index/github.png'
    }
]

const Global = () => (
    <div className={'global'}>
        <h2>Global Community</h2>
        <ul>
            {
                GlobalImg.map((item, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <StaticImage alt={item.title} src={item.url} />
                            </div>
                            <h5>{item.title}</h5>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)

export default Global
