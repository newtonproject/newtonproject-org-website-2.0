import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const News = () => (
    <>
    <div className={'news'}>
       <h2>News</h2>
       <ul>
           <li>
               <StaticImage className={'news-img'} alt='img' src='../../static/images/news.png' />
               <h3>The Black Men in White Coats Youth Summxs White Coats Youth</h3>
               <p>March 16, 2022</p>
           </li>
           <li>
               <StaticImage className={'news-img'} alt='img' src='../../static/images/news.png' />
               <h3>The Black Men in White Coats The Black Men in White CoatsThe Black Men in White CoatsThe Black Men in White Coats</h3>
               <p>March 16, 2022</p>
           </li>
           <li>
               <StaticImage className={'news-img'} alt='img' src='../../static/images/news.png' />
               <h3>The Black Men in White Coats Youth Sum</h3>
               <p>March 16, 2022</p>
           </li>
       </ul>
    </div>
    </>
)  

export default News
