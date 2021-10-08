import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import TagManager from 'react-gtm-module';

import './index.css';
import App from './App';

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
