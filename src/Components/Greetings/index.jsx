import React from 'react';
import Typed from 'react-typed';

import styles from './styles.module.scss';

export default function Greetings() {
  return (
    <section className={styles.greetings}>
      <h1>👋🏽Olá, meu nome é Lucas Neves</h1>
      <Typed
        className={styles.message}
        strings={[
          'Desenvolvedor Full-Stack',
          'Principais Tecnologias:',
          'MongoDB',
          'Express',
          'React',
          'NodeJS',
          'Python',
        ]}
        typeSpeed={30}
        backSpeed={20}
        loop
      />
    </section>
  );
}
