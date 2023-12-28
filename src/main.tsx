import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import '/css/search_bar.css';
import '/css/my_style.css';
import '/css/delete_button.css';
import './components/BreadCrumbs.css';

import NavigationAndSearchBar from './components/NaviBar';
import BreadCrumbs from './components/BreadCrumbs.tsx';
import CargoList from './components/CargoList.tsx';
import ExactCargo from './components/CargoDetails';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/cargo/" element={
        <>
          <NavigationAndSearchBar />
          <BreadCrumbs />
          <CargoList />
        </>
      } />
      <Route path="/cargo/:id_cargo/" element={
        <>
          <NavigationAndSearchBar />
          <BreadCrumbs />
          <ExactCargo />
        </>
      } />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
