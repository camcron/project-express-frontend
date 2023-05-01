import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css'
import './index.css';
import { App } from './App';

const root = document.getElementById('root');
createRoot(root).render(<App />);