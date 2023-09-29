import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
// import CustomCursor from '../CustomCursor/CustomCursor';


const Layout = ({ isLoading, phoneNumber }) => {
 
  return (
    <>
      {isLoading ? <Preloader /> : (
        <div>
          {/* <CustomCursor /> */}
          <Header phoneNumber={phoneNumber}/>
          <Outlet />
          <Footer />
        </div>
      )
      }
    </>
  )
}
export default Layout;
