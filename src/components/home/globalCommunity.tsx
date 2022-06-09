import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const GlobalCommunity = () => (
    <div className={'global'}>
        <h2>Global Community</h2>
        <ul>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='telegram' src='../../static/images/home/telegram.png' />
                </div>
                <h5>Telegram</h5>
            </li>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='twitter' src='../../static/images/home/twitter.png' />
                </div>
                <h5>Twitter</h5>
            </li>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='twitter' src='../../static/images/home/facebook.png' />
                </div>
                <h5>Facebook</h5>
            </li>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='medium' src='../../static/images/home/medium.png' />
                </div>
                <h5>Medium</h5>
            </li>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='group' src='../../static/images/home/group.png' />
                </div>
                <h5>Google Group</h5>
            </li>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='reddit' src='../../static/images/home/reddit.png' />
                </div>
                <h5>Reddit</h5>
            </li>
            <li>
                <div>
                    <StaticImage className={'global-img'} alt='github' src='../../static/images/home/github.png' />
                </div>
                <h5>Github</h5>
            </li>
        </ul>
    </div>
)

export default GlobalCommunity
