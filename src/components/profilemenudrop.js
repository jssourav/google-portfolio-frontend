import './profilemenudrop.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState('false');
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className='profile dropdown'
      onClick={handleToggle}
      ref={wrapperProfileRef}>
      <img
        className='profile-pic dropbtn'
        src='https://media-exp1.licdn.com/dms/image/C4D03AQF2FS_o4ot-TA/profile-displayphoto-shrink_100_100/0/1623087550885?e=1657152000&v=beta&t=gYptAXwo17K65qEOLf2-7oZKhe5yVmq5RpknzjBi_bA'
        alt='profile'
      />
      <div className='profile-hightlight-dropdown'>
        <p> Portfolio Website </p>
        <p> Sourav Nag </p>
        <p> sn.sourav1993@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? 'profile-details-dropdown dropdown-hide'
            : 'profile-details-dropdown dropdown-show'
        }>
        <div className='first-detail'>
          <img
            className=''
            src='https://media-exp1.licdn.com/dms/image/C4D03AQF2FS_o4ot-TA/profile-displayphoto-shrink_200_200/0/1623087550885?e=1657152000&v=beta&t=HnQ4ckEIk31GxN8SZBtk58vrJxPrxhulEVrrCZFh1kc'
            alt='profile'
          />
          <p className='detail-text'> Sourav Nag </p>
          <p className='detail-text'> sn.sourav1993@gmail.com </p>
          <a href='https://www.examaasaanhai.com/'>
            {' '}
            View Another Website Design{' '}
          </a>
        </div>
        <Link className='second-detail' to='/about'>
          <FontAwesomeIcon className='fa-user-plus' icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className='third-detail'>
          <a href='https://github.com/jssourav'> GitHub</a>
        </div>
        <div className='fourth-detail'>
          <a href='https://github.com/jssourav'> View code </a> <span> • </span>
          <Link to='/blog'> Blog & news </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
