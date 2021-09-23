/* eslint-disable no-console */
import { arrayOf, string } from 'prop-types';
import React from 'react';

import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export default function ProjectCard({ projects }) {
  return (
    <section className={styles.projectList}>
      {console.log(projects)}
      {projects.map(({
        images, summary, displayName, url, githubUrl,
      }) => {
        const image = images[0].resolutions.mobile.url;
        return (
          <div key={url} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={image} alt="My project sample" />
            </div>

            <div className={styles.projectDescription}>
              <h3>{displayName}</h3>
              <p>{summary}</p>

              <div className={styles.buttonContainer}>
                <button type="button">
                  <a href={url} rel="noreferrer" target="_blank">
                    Aplicação
                  </a>
                </button>

                <button type="button">
                  <a href={githubUrl} rel="noreferrer" target="_blank">
                    <FaGithub className={styles.reactIcon} />
                    Código fonte
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

ProjectCard.propTypes = {
  projects: arrayOf({
    images: arrayOf({}),
    url: string,
    displayName: string,
    summary: string,
  }),
}.isRequired;
