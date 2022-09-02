/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-02 13:20:05
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-02 13:39:59
 * @FilePath: /newtonproject-org-website-2.0/newton-website/src/components/home/loading.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import loadingImg from '../../static/images/loading-logo.png'

export default function Loading() {
  let arr: any = [1, 2, 3]
  return (
    <>
      {arr.map((item: any, index: any) => {
        return (
          <li className={'news-loading'} key={index}>
            <div className={'news-img'}>
              <img src={loadingImg} />
            </div>
            <div className={'news-title'}>
              <h3></h3>
              <h3 className={'title-less'}></h3>
              <p></p>
            </div>
          </li>
        )
      })}
    </>
  )
}
