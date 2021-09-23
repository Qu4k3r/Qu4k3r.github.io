import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './Components/Header';
import About from './Pages/About';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { ProjectProvider } from './Contexts';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <main>
      <Header />

      <ProjectProvider>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ProjectProvider>

      <section>
        <Footer />
      </section>
    </main>
  );
}
