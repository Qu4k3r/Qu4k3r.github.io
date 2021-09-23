import React from 'react';

import {
  FaGithub, FaInstagram, FaLinkedin, FaTelegram,
} from 'react-icons/fa';

import Particles from 'react-particles-js';

import particlesJson from '../../Utils/particlesjs-config.json';

import styles from './styles.module.scss';

export default function Contact() {
  return (
    <section className={styles.contactContainer}>
      <Particles className="particles" params={particlesJson} />

      <div className={styles.contact}>
        <h1>Obrigado, por visitar minha página! 🙋🏽‍♂️</h1>

        <p>Desenvolvedor web Full-Stack</p>

        <div className={styles.iconContainer}>
          <a href="https://github.com/qu4k3r" target="_blank" rel="noreferrer">
            <FaGithub className={styles.reactIcon} />
          </a>
          <a
            href="http://instagram.com/_nevs_k"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className={styles.reactIcon} />
          </a>
          <a
            href="http://linkedin.com/in/l-neves"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.reactIcon} />
          </a>
          <a href="https://t.me/Neves_K" target="_blank" rel="noreferrer">
            <FaTelegram className={styles.reactIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
