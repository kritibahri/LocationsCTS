import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddLocationForm from './components/AddLocationForm';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AddLocationForm />, document.getElementById('root'));
registerServiceWorker();
