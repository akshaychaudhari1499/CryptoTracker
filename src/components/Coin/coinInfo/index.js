import React from 'react'
import './styles.css'
function CoinInfo({heading,desc}) {
  return (
    <div className='grey-wrapper'><h2 className='coinInfo-heading'>{heading}</h2><p className='coinInfo-desc' dangerouslySetInnerHTML={{__html:desc}}/></div>
  )
}

export default CoinInfo