import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import { 
  BrowserRouter as Router,
  Route,
  Routes,
   } from 'react-router-dom'

// user imports
import '/css/search_bar.css';
import '/css/my_style.css';
import '/css/delete_button.css';

import CargoList from './components/CargoList.tsx';
import ExactCargo from './components/CargoDetails'
import BreadCrumbs from './components/BreadCrumbs.tsx'
import './components/BreadCrumbs.css'
import NavigationAndSearchBar from './components/NaviBar';

// const router = createBrowserRouter([
//   {
//     path: '/cargo/',
//     element:  <>
//         <NavigationAndSearchBar />
//         <BreadCrumbs />
//         <CargoList />
        

//       </>
//   },
//   {
//     path: '/cargo/:id_cargo/',
//     element: <>
//     <NavigationAndSearchBar />
//     <BreadCrumbs />
//     <ExactCargo />
    
//     </>

//   },
//   {
//     path: '/orders',

//   },
// ]);



// async function renderApp() {
 
//   ReactDOM.render(
//     <React.StrictMode>
      
//       <RouterProvider router={router} />
 
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// renderApp();

import {HashRouter} from "react-router-dom";


ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/cargo/" element={<>
    <NavigationAndSearchBar />
    <BreadCrumbs />
    <ExactCargo />
    
    </>}/>
      <Route path="/cargo/:id_cargo/" element={
      <>
    <NavigationAndSearchBar />
    <BreadCrumbs />
    <ExactCargo />
    
    </>
  }/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);