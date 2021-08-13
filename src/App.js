import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootsrap.min.css';
import {Button, Alert,Breadcrumb,card} from 'react-bootstrap/Button';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const Button = document.createElement('Button');
  ReactDOM.render(<App />, div,Button);
  ReactDOM.unmountComponentAtNode(div);

  
});
