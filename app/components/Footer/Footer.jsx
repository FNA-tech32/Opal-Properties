'use client';
import styles from './Footer.module.css';
import LogoImage from '@/app/assets/logo-w.png';
import Logo from '../ReusableLogo/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">

          <div className={`col-lg-4 col-md-6 ${styles.col1}`}>
            <Logo srcImg={LogoImage} />
            <p className={styles.description}>Opal Properties lists homes across Pakistan and answers from our Karachi office and Lahore viewing desk.</p>
          </div>

          <div className={`col-lg-2 col-md-3 ${styles.col2}`}>
            <h5 className={styles.title}>EXPLORE</h5>
            <ul className={styles.navList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/login">List a property</Link></li>
            </ul>
          </div>

          <div className={`col-lg-2 col-md-3 ${styles.col2}`}>
            <h5 className={styles.title}>CONTACT</h5>
            <ul className={styles.navList}>
              <li><a href="tel:+9221111672257">+92 21 111 672 257</a></li>
              <li><a href="tel:+924235784410">+92 42 3578 4410</a></li>
              <li><a href="mailto:enquiries@opalproperties.pk">enquiries@opalproperties.pk</a></li>
              <li>DHA Phase 6, Karachi</li>
            </ul>
          </div>

          <div className={`col-lg-4 col-md-12 ${styles.col3}`}>
            <h5 className={styles.title}>NEWSLETTER</h5>
            <p className={styles.description}>For new listings in Karachi or Lahore, send a note from the contact page and the sales desk will reply.</p>
            <Link href="/contact" className={styles.newsletterLink}>Contact the office</Link>
          </div>

          <div className={`col-12 ${styles.col4}`}>
            <p>&copy; 2026 Opal Properties. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
