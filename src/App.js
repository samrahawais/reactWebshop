
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import CarouselComp from './components/CarouselComp';

import Product from './components/Product';
import {useState} from 'react'
import Banners from './components/banners'
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap'
function App() {
  
  return (
    <div className="App">
       <NavbarComp/>
     <CarouselComp />
     <Container>
        <Product />  
    </Container> 
     {/* <Banners /> */}
     <Container>
     <div className="row g-0 mg-25">
      <div className="col-sm-6 full">
          <a href="#home"><Image src='banner1.png' alt='banner' style={{width: "100%"}} /></a>
      </div>
      <div className="col-sm-6 full">
          <a href="#home"><Image src='banner2.png' alt='banner' style={{width: "100%"}} /></a>
      </div>
    </div>
     </Container>
</div>
  );
}

export default App;
