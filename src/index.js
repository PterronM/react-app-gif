import React from 'react';
import {createRoot} from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './index.css';

// ReactDOM.render(
//   <GifExpertApp />,
//   document.getElementById('root')
// );


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<GifExpertApp/>, divRoot);

