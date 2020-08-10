import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';

import App from "./containers/app";
import { createStore } from "redux";
import  {allReducer} from "./reducers";


const initState = {
  nameValue: '',
  textValue:'',
  comments: JSON.parse(localStorage.getItem("comments")) ? JSON.parse(localStorage.getItem("comments")) : []
}

const store = createStore(allReducer, initState);

ReactDOM.render(
    <App store={store} />,
  document.getElementById('root')
);