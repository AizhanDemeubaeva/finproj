import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import Users from './pages/Users';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';

const NotFound = lazy(() => import('./pages/NotFound'));


function App() {
  return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Main />}  path='/' />
            <Route element={<Contacts />} path='/contacts' />
            <Route element={<Users />} path='/users' />
            <Route element={<Checkout />} path='/checkout' />
            <Route element={<Login />} path='/login' />
            <Route element={<NotFound />} path='/*' />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;