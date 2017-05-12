import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx';

import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'
import './index.css'

useStrict(true);

ReactDOM.render(<App /> , document.getElementById('root'))
