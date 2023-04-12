import React from 'react'
import './styles.css'
import Button from '../../Common/Button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import {motion } from 'framer-motion'
function MainComponent() {
  return (
    <div className='flex-info'>
<div className='left-component'>
<motion.h1 className='track-heading' initial={{opacity:0.3, x:-70}} animate={{opacity:1,x:0}} transition={{duration:0.5}
}>Track</motion.h1>
<motion.h1 className='track-heading' initial={{opacity:0.3, x:70}} animate={{opacity:1,x:0}} transition={{duration:1}
}>Crypto</motion.h1>
<motion.h1 className='realtime-heading'initial={{opacity:0.3, x:-70}} animate={{opacity:1,x:0}} transition={{duration:0.5}}>Real Time.</motion.h1>
<p className='info-text'>Track crypto thorugh a public API in real time . Visit the dashboard to do so.</p>
<div className='btn-flex'>
    <Button text='Dashboard' />
    <Button text='Share' outlined={true} />
</div>
</div>
<div className='phone-component'>
<img src={iphone} alt='iphone' className='iphone'/>
<img src={gradient}  alt='gradient'className='gradient'/>
</div>

    </div>
  )
}

export default MainComponent