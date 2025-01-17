import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import React from 'react';
import { App } from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />);
