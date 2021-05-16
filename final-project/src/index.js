import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Routes from './routes';

const App = hot(Routes);
// Add Modal.setAppElement('#root') to fix warning React-modal: App element is not defined
Modal.setAppElement('#root');
ReactDOM.render(<App />, document.getElementById('root'));