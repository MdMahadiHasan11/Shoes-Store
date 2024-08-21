import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Routes from './routes/Routes';
// import Router from './routes/router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className='max-w-screen-xl mx-auto'> */}

      <RouterProvider router={Routes} />

    {/* </div> */}
  </React.StrictMode>,
)