'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Title from '../components/Title/Title';
import axios from 'axios';
import toast from 'react-hot-toast';
import Message from '../components/Message/Message';

const officeContacts = [
  {
    label: "Head office",
    value: "14-B, Khayaban-e-Shahbaz, DHA Phase 6, Karachi",
  },
  {
    label: "Sales desk",
    value: "+92 21 111 672 257",
    href: "tel:+9221111672257",
  },
  {
    label: "Lahore viewing line",
    value: "+92 42 3578 4410",
    href: "tel:+924235784410",
  },
  {
    label: "Email",
    value: "enquiries@opalproperties.pk",
    href: "mailto:enquiries@opalproperties.pk",
  },
  {
    label: "Hours",
    value: "Monday–Saturday, 10:00 AM – 7:00 PM",
  },
];

const ContactPage = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBtnLoading(true);
    const dataObj = {fullName, email, message};
    try {
      const response = await axios.post("/api/messages", dataObj, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(response?.data?.message || "Message sent successfully");
      setFullName("");
      setEmail("");
      setMessage("");
      setLoading(false);
      setBtnLoading(false);
      if(response?.data?.success)
      {
        setTimeout(() => {
          setThankYou(true);
        }, 1000);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "failed sending message");
    }
  };

  return (
    <>
    <Navbar/>
    <div className={`container ${styles.contactPage}`}>
      <div className="row align-items-center">

        {/* Left Form Section */}
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Title title="Contact Us" />
          <p className={styles.subtitle}>
            Call the Opal Properties sales desk, or send a note and we will reply from the Karachi office.
          </p>

          {
            !thankYou
            ?
            (
              <form className={styles.form} onSubmit={submitHandler}>
                <fieldset disabled={loading}>
                <div className="mb-3">
                  <input type="text" className='inputField' placeholder='Enter full name' onChange={e => setFullName(e.target.value)} value={fullName} required />
                </div>

                <div className="mb-3">
                    <input type="email" className='inputField' placeholder='Enter email' onChange={e => setEmail(e.target.value)} value={email} required />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="inputField"
                    placeholder="Write your message"
                    onChange={e => setMessage(e.target.value)} value={message}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="unBtn lgBtn">
                  {btnLoading ? "Message sending..." : "Send Message"}
                </button>
                </fieldset>
              </form>
            )
            :
            (
              <>
              <Message message="Thank you for contacting us. We will be in touch with you shortly." />
              </>
            )
          }
          
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>Office details</h2>
            <p className={styles.detailsIntro}>
              Two lines are open for listings and viewings. The Lahore number is for scheduled visits in Punjab.
            </p>
            <ul className={styles.detailList}>
              {officeContacts.map((item) => (
                <li key={item.label} className={styles.detailItem}>
                  <span className={styles.detailLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.detailValue}>{item.value}</a>
                  ) : (
                    <span className={styles.detailValue}>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
