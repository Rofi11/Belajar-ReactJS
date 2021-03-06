import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Link } from "react-router-dom"; // import bagian BrowserRouter disini
import './index.css';
import App from './App';
import Home from './container/Home/Home';
import './container/Home/Home.css'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer  from './redux/reducer/globalReducer';
// remote github nya bernama coba-react


// store
// const storeRedux = createStore(rootReducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={storeRedux}>  // ini kalo pakai redux*/}
        {/* navigation di tambahkan di tempat merender */}
          <div className="navigation">
              <Link to="/"> BlogPost </Link>
              <Link to="/Product"> Product </Link>
              <Link to="/LifeCycleComp"> LifeCycleComp </Link>
              <Link to="/youtube-component"> Youtube </Link>
              <Link to="/Hooks"> Hooks </Link>
              
          </div>
          <Home/>
      {/* </Provider> */}
    </React.StrictMode>  
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
