import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import { SliderData } from '../Carousel/SliderData';
import ProductData from '../Productpage/ProductData'
const Mainpage = ({setProd}) => {
  return (
    <>
        <Header/>
        <Carousel slides={SliderData} />
        <ProductData setProd={setProd}/>
        <Footer/>
    </>
  )
}

export default Mainpage