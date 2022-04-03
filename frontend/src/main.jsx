import React from 'react'
import ReactDOM from 'react-dom'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import Layout from './layout/Layout'
import './sass/index.scss'
import { Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
   <Provider store={store}>
      <Layout />
    </Provider>,
  document.getElementById('root')
)
