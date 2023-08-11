import { Fragment } from 'react';
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements,} from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import About from'./Pages/About';
import Services from './Pages/Services';
import Doctors from './Pages/Doctors';

const router =createBrowserRouter(
 createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="services" element={<Services />} />
      <Route path="doctors" element={<Doctors/>}/>
     
    </Route>
    
)
);
  function App() {
  return (
    <Fragment>
   <RouterProvider router={router}/>
    </Fragment>
  );
}

export default App;
