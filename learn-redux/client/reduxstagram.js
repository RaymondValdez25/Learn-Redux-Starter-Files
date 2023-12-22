import React from 'react';
import { render } from 'react-dom';
//import css
import css from'./styles/style.styl'
//Import Components
import Main from './components/Main'

render(<Main><p>Hello</p></Main>, document.getElementById('root'));