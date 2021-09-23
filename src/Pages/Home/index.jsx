import React from 'react';
import Particles from 'react-particles-js';
import Greetings from '../../Components/Greetings';

import particlesJson from '../../Utils/particlesjs-config.json';

export default function Home() {
  return (
    <section className="App">
      <Particles
        className="particles"
        params={particlesJson}
      />
      <Greetings />
    </section>
  );
}
