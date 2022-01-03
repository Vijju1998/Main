import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import { App } from './App';
const RootApp: React.FC = () => {
  return <App />;
};
ReactDOM.render(<RootApp />, document.getElementById('root'));
