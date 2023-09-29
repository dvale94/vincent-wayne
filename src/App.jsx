import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Page404 from './components/404/Page404';
import BlogDetails from './components/Blog/BlogDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Layout2 from './components/Layout/Layout2';
import Preloader from './components/Preloader/Preloader';

import { useSanityData } from './useSanityData.hook';

function App() {
  const data = useSanityData();

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  if (!data) return <Preloader />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout phoneNumber={data?.contactData?.phone}/>}>
          <Route index element={<Home data={data}/>} />
          {/* <Route path="home-v3" element={<Home3 />} /> */}
          {/* <Route path="home-v4" element={<Home4 />} /> */}
          <Route path="*" element={<Page404 />} />
          {/* <Route path="blog/blog-details" element={<BlogDetails />} /> */}
        </Route>
        {/* <Route path="/home-v2" element={<Layout2 />}>
          <Route index element={<Home2 />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
