import React from 'react'
import './styles.css'
import Button from '../../Common/Button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
function MainComponent() {
  return (
    <div className='flex-info'>
<div className='left-component'>
<h1 className='track-heading'>Track</h1>
<h1 className='track-heading'>Crypto</h1>
<h1 className='realtime-heading'>Real Time.</h1>
<p className='info-text'>Track crypto thorugh a public API in real time . Visit the dashboard to do so.</p>
<div className='btn-flex'>
    <Button text='Dashboard' />
    <Button text='Share' outlined={true} />
</div>
</div>
<div className='phone-component'>
<img src={iphone} className='iphone'/>
<img src={gradient} className='gradient'/>
</div>

    </div>
  )
}

export default MainComponent