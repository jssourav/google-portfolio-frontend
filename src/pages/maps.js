import React, { useState } from 'react';
import { Content } from '../data/content';
import { StrictMode } from 'react';
import Layout from '../components/header';
import AllResultsCard from '../components/allResultsCard';
import Header from '../components/header';
import Footer from '../components/footer';
import FilterMenu from '../components/filtermenu';

function About() {
  const about = Content.filter((item) => item.category === 'about');
  return (
    <div className='main'>
      <Header />
      <FilterMenu />
      <div className='all-results-container'>
        <p className='result-count'>
          About {about.length} results (0.43 seconds)
        </p>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.6911421214611!2d88.36794212917306!3d22.77411683561737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89bd34221b39d%3A0xab93283bcd34d75b!2sThe%20Cake%20House!5e0!3m2!1sen!2sin!4v1651923452999!5m2!1sen!2sin'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
      <Footer />
    </div>
  );
}
export default About;
