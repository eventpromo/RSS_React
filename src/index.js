import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

document.body.innerHTML = '<div id="root"></div>';
ReactDOM.render(<App />, document.getElementById('root'));