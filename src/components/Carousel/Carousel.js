import React,{useState}from 'react';
import { SliderData } from './SliderData';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import './carousel.css';

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length =slides.length

    const nextSlide=()=>{
        setCurrent(current === length-1 ? 0 : current+1)
        
    }
    setTimeout(nextSlide,3000)
    

    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }


    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }

    


    return (
        <>
        <section className="slider">
            <FaAngleLeft className='left-arrow' onClick={prevSlide}/>
            <FaAngleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide,index)=>{
            return(
                <div className={index===current ? 'slide-active' : 'slide'} keys={index}>
                {index ===current && (<img src={slide.image} alt='shopping' className='sliderimages'/>)}
                
                </div>
            )
        })}
        </section>
        
            
        </>
    )
}

export default Carousel