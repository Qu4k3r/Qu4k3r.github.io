import React from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Início</li>
          </Link>

          <Link to="/about">
            <li>
              Sobre mim
            </li>
          </Link>

          <Link to="/projects">
            <li>
              Meus projetos
            </li>
          </Link>

          <Link to="/contact">
            <li>
              Contato
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
