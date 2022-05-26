import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Bottombar from './component/Bottombar'
import EventInfo from './component/EventInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<EventInfo/>}/>
    </Routes>
    </BrowserRouter>
  <Bottombar/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
