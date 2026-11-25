'use client';
import React from 'react';
import HeroImg from '@/app/assets/hero.png';
import Image from 'next/image';
import Styles from './Hero.module.css';
import { useRouter } from 'next/navigation';

function Hero() {
    const router = useRouter();
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={Styles.heroTextSec}>
                    <h1 className={Styles.heroTitle}>Find Your <span>Dream</span> Home</h1>
                    <p className={Styles.heroText}>Opal Properties helps families and investors across Pakistan find homes with clear prices, trusted listings, and a local sales desk.</p>
                    <button className='unBtn mdBtn' onClick={() => router.push('/properties')}>View Properties <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className={Styles.heroImageSec}>
                    <Image src={HeroImg} className={Styles.heroImg} alt="Opal Properties homes" title="Opal Properties" />
                </div>
            </div>


        </div>
    </div>
  )
}

export default Hero;