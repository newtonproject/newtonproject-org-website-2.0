/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-12 16:45:12
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-12 16:45:39
 * @FilePath: /newtonproject-org-website-2.0/newton-website/src/customMdx/tableblock.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

const Tableblock = ({ children }: any) => (
  <div className={'table-block'}>
    <table>{children}</table>
  </div>
)

export default Tableblock
