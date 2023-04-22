import React, { useState } from 'react'
import './styles.css'
function CoinInfo({heading,desc}) {
const [flag,setFlag]=useState(false)
console.log(desc)
let shortdesc=desc.slice(0,300)+"<span style='color:var(--grey) ; cursor:pointer'> Read More ...</span>"
let longdesc=desc+"<span style='color:var(--grey) ; cursor:pointer'> Read Less ...</span>";
  return (
    <div className='grey-wrapper'><h2 className='coinInfo-heading'>{heading}</h2>
    {desc.length>300 ?  <p onClick={()=>setFlag(!flag)}className='coinInfo-desc' dangerouslySetInnerHTML={{__html:flag? shortdesc:longdesc}}/>: (<p onClick={()=>setFlag(!flag)}className='coinInfo-desc' dangerouslySetInnerHTML={{__html:desc}}/>)}
    {/* <p className='coinInfo-desc' dangerouslySetInnerHTML={{__html:desc}}/> */}
   </div>
  )
}

export default CoinInfo