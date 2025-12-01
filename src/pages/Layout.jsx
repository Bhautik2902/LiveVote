import React from 'react';
import '../styles/Layout.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="layout">
      <Header isLoggedIn={true}/>
      <div className="layout__container">
        {/* <Sidebar /> */}
        <main className='content'>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Layout;
