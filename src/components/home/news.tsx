import React, { useEffect, useState } from 'react'
import axios from "axios"
import arrDate from '../../hooks/createTime'

interface childProps {
    title: string
}
const News: React.FC<childProps> = (props) =>  {
    const { title } = props;
    const [newsItem, setNewsItem] = useState([])
    useEffect(() => {
        axios.get(
            'https://www.newtonproject.org/api/v1/press/latest/'
        ).then((res) => {
            setNewsItem(res.data.result);
        }).catch((err) => {
            console.log(err)
        })
    },[])
    return (
        <>
            <div className={'news'}>
                <h2>{title}</h2>
                <ul>
                    {
                        newsItem.map((item: any, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.url} target='_blank' key={index}>
                                        <div className={'news-img'} >
                                            <img src={'https://www.newtonproject.org/filestorage/' + item.image}  alt='img' />
                                        </div>
                                        <div className={'news-title'}>
                                            <h3>{item.title}</h3>
                                            <p>{arrDate(item.published_at)}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={'news-more'}><a href='https://www.newtonproject.org/press/' target='_blank'>More</a></div>
            </div>
        </>
    )
}

export default News
