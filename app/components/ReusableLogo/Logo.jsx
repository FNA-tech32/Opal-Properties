import React from 'react';
import Styles from './Logo.module.css';
import Image from 'next/image';

function Logo({srcImg}) {
  return (
    <>
        {
          srcImg
          ?
          <Image src={srcImg} alt="Opal Properties" title="Opal Properties" className={Styles.globalLogo} />
          :
          <h4 className='h4'>Your Logo here</h4>
        }
    </>
  )
}

export default Logo;