import React from 'react';

import Styles from './index.module.css';
import { NoiPH } from '../../components/Logo/NoiPH';
import { Tarsier } from '../../components/Logo/Tarsier';

const LandingPage = () => (

  <React.Fragment>
    <div className={`${Styles.top}`}>
      <svg width="100%" height="100%" viewBox="0 0 720 327" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H720V327C577.534 278.989 584 297.218 368 265.5C152 233.782 137.4 272.205 0 327V0Z" fill="#0E0E2C"/>
      </svg>
      <div className={`${Styles.wordstamp}`}>
        <h1 className={`${Styles.title}`}>Algurado</h1>
        <span className={`${Styles.subtitle}`}>Online Judge by <NoiPH className={`${Styles.noiph}`} width='50' height='17'/></span>
      </div> 
      <span><Tarsier className={`${Styles.tarsier}`} width='210' height='350'/></span>
    </div>
    <p>Hello bruh bruh bruh bruh</p>
    <svg width="100%" height="100%" viewBox="0 0 720 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M720 168.5L0 168.5L1.47306e-05 0.00127983C142.466 48.0118 135.999 29.7832 351.999 61.5013C567.999 93.2194 582.6 54.7963 719.999 0.00134277L720 168.5Z" fill="#0E0E2C"/>
    </svg>
  </React.Fragment>
);

export default LandingPage;