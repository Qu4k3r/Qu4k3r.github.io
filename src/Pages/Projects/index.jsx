/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import ProjectCard from '../../Components/ProjectCard';
import gitConnectedApi from '../../Services/API';

import styles from './styles.module.scss';

import particlesJson from '../../Utils/particlesjs-config.json';

export default function Projects() {
  const [myProjects, setMyProjects] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await gitConnectedApi();
        setMyProjects(projects);
        setIsloading(false);
        return true;
      } catch (error) {
        return error.message;
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className={styles.projectContainer}>
      <Particles
        className="particles"
        params={particlesJson}
      />
      <div className={styles.project}>
        <h1>Meus Projetos</h1>
        {isLoading ? (
          <h3>Carregando ...</h3>
        ) : (
          <ProjectCard projects={myProjects} />
        )}
      </div>
    </section>
  );
}
