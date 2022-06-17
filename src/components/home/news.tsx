import React, { useEffect, useState } from 'react'
import axios from "axios"
import { arrDate } from '../../hooks/createTime'
import { NewschildProps } from '../../hooks/PageModel'

const News: React.FC<NewschildProps> = (props) =>  {
    const { title } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios(
          "https://www.newtonproject.org/api/v1/press/latest/"
        );
        setData(res.data.result);
      };
      fetchData();
    }, []);

    return (
        <>
            <div className={'news'}>
                <h2>{title}</h2>
                <ul>
                    {
                        data.map((item: any, index) => {
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
