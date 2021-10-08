import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4';

import './index.css';
import App from './App';

ReactGA.initialize('G-VXNLE0WQGC');
ReactGA.send({ hitType: 'pageview', page: '/#' });

const tagManagerArgs = {
  gtmId: 'GTM-57N79LK',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
