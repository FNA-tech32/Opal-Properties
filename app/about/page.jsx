import styles from './page.module.css';
import Image from 'next/image';
import notFoundImg from '@/app/assets/not-found.png'; // place your image in public/images
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Title from '../components/Title/Title';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className={`container ${styles.aboutPage}`}>
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <Title title="About Opal Properties" />
          <p className={styles.subtitle}>
            Opal Properties is a Karachi-based real estate desk helping families and investors find homes they can visit, compare, and buy with confidence.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <Image src={notFoundImg} alt="Our Mission" className={`img-fluid ${styles.image}`} />
        </div>
        <div className="col-md-6">
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.text}>
            Our mission is to make property search in Pakistan straightforward: honest listings, clear prices, and a sales team you can reach by phone or email.
          </p>
        </div>
      </div>

      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-6">
          <Image src={notFoundImg} alt="Our Vision" className={`img-fluid ${styles.image}`} />
        </div>
        <div className="col-md-6">
          <h2 className={styles.heading}>Our Vision</h2>
          <p className={styles.text}>
            We want every buyer to see the same details our agents see — location, price, and a direct contact — so choosing a home feels calm and informed.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <Image src={notFoundImg} alt="Our Team" className={`img-fluid ${styles.image}`} />
        </div>
        <div className="col-md-6">
          <h2 className={styles.heading}>Our Team</h2>
          <p className={styles.text}>
            Advisors at our DHA Phase 6 office and our Lahore viewing desk work with owners to list homes and walk buyers through each property in person.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
