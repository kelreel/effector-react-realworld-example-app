import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './router';
import { Root } from './root';

export const App: React.FC = () => (
  <Router history={history}>
    <Root />
  </Router>
);