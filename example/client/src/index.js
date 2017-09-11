import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Tracker from './tracker';

Tracker('http://localhost:8888');
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
