import React from 'react'
import { testimonials } from '../data/dummydata'
import { FormatQuote } from '@mui/icons-material'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

export const Testimonials = () => {
    const Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <>
        <div className="testimonials-box home-screen">
            <div className="main-box">
                <Slider {... Settings}>
                {testimonials.map((val) =>(
                    <div className="card-box">
                        <i data-aos="slide-up">
                            <FormatQuote/>
                            </i>
                            <p data-aos="slide-down">{val.text}</p>
                            <div className="image-box">
                                <img src={val.image} alt="" data-aos="flip-down"/>
                            </div>
                            <h3 data-aos="flip-up">{val.name}</h3>
                            <label data-aos="flip-up">{val.post}</label>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </>
  )
}
