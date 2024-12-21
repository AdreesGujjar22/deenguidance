"use client"
// Import necessary modules
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const HomePageComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Online Quran</h1>
      <h2 className={styles.subtitle}>Classes For Kids</h2>
      <div className={styles.card}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.icon}></span>
            Reading The Quran With Tajweed
          </li>
          <li className={styles.listItem}>
            <span className={styles.icon}></span>
            Tafseer The Quran
          </li>
          <li className={styles.listItem}>
            <span className={styles.icon}></span>
            Easy To Learn From Home
          </li>
        </ul>
      </div>
      <button className={styles.button}>Register Now</button>
      <div className={styles.footer}>
        <p>More Information</p>
        <p className={styles.link}>www.QuranEasy.com</p>
      </div>
    </div>
  );
};

export default HomePageComponent;

// Create a new CSS file: HomePageComponent.module.css
/* HomePageComponent.module.css */
