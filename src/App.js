import About from "./components/layout/about/About";
import Service from "./components/layout/service/Service";
import Contact from "./components/layout/contact/Contact";
import { Route, Routes, useLocation } from 'react-router-dom';
import Portfolio from "./components/layout/portfolio/Portfolio";
import Resume from "./components/layout/Resume/Resume";
import Home from "./components/layout/Home/Home";
import Navbar from "./components/partials/navBar/Navbar";
import PortfolioDetails from "./components/layout/portfolio/PortfolioDetails";
import './App.scss'


const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navbarStyle = isHome ? { backgroundColor: 'transparent' } : {};
  return (
<div className="App">
  
  <Navbar style={navbarStyle}/>
  <div className="App__main-page-content">
     <Routes>
        <Route  index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails/>} />
      
        <Route path="/contact" element={<Contact />} />

       </Routes>
  </div>

</div>
      

   
  );
}
export default App;
