import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import CustomCursor from '../CustomCursor/CustomCursor';


const Layout = ({ phoneNumber }) => {
 
  return (
    <>
      <div>
        {/* <CustomCursor /> */}
        <Header phoneNumber={phoneNumber}/>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
export default Layout;
