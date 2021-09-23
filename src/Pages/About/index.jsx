import React from 'react';
import Particles from 'react-particles-js';

import styles from './styles.module.scss';

import particlesJson from '../../Utils/particlesjs-config.json';

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <Particles
        className="particles"
        params={particlesJson}
      />

      <div className={styles.about}>
        <h1>Um pouco sobre mim</h1>

        <p>
          Sou de Brasília, Distrito Federal.
          Sou apaixonado por tecnologia, principalmente
          <b> segurança da informação (Web)</b>
          .
        </p>

        <p>
          Atualmente, sou Desenvolvedor de Software Full Stack formado pela Trybe (curso livre).
          Previsão de término: Novembro de 2021.
          Principais tecnologias: ReactJS, NodeJS, MongoDB, Express, MySQL e Python.
        </p>

        <p>
          Fique à vontade para olhar alguns de meus trabalhos realizados durante o curso.
        </p>
      </div>

      <div className={styles.aboutMePicture}>
        <img src="/images/about-me.jpeg" alt="" />
      </div>
    </section>
  );
}
