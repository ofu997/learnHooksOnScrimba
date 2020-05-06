import React from 'react';
import ReactDOM from 'react-dom';
import Paint from './components/Paint';
import './index.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <Paint />,
  document.getElementById('root')
);

// export default function App() {
//   return <Paint />
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import Playground from './components/Playground'; 
// import Paint from './components/Paint';
