import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './Stopwatch';
import './index.css';

const stopwatch_data = {
  pStatus: 'im timing, nothing gets past me',
  pNeedReset: 'i need a reset, bruddah',
  pPeanutGallery:  ['oh, very fast', 'damn, super fast', 'shit hot fast']
}

ReactDOM.render(
  <Stopwatch />,
  stopwatch_data,
  document.getElementsById('root')
);
