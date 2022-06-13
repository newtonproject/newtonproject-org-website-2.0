import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { createThrottle } from '../hooks/createThrottle'

export default function ScrollTop() {

    const [show, switchShow] = useState(false);
    useEffect(()=>{
      const listener = createThrottle(()=>{
        if (window.scrollY > window.innerHeight) {
            switchShow(true);
        } else {
            switchShow(false);
        }  
      }, 500) as EventListener;
      document.addEventListener('scroll', listener);
      return () => document.removeEventListener('scroll', listener);
    }, [show])
    
    return show ? (
        <div  onClick={() => window.scrollTo(0, 0)} className={'scroll-top'}>
          <StaticImage alt='scroll-top' src='../static/images/scroll-top.png' />
        </div>
    ): null
}







