import React from 'react'
import { about } from '../data/dummydata'
import { PageTitle } from '../commonSections/PageTitle'

export const AboutPage = () => {
  return (
    <>
    <section className="about-box">
        <dic className="main-box flex-box">
        {about.map((val, i) => (
            <>
            <div className="box-left">
                <img src={val.cover} alt="" data-aos="slide-up"/>
            </div>
            <div className="box-right" data-aos="slide-up">
                <PageTitle title='About Me'/>
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a href="https://github.com/mustu633"
                target="#"
                rel="noopener noreferrer">
                <button>Explore More</button>
                </a>
                <a href="https://drive.google.com/file/d/1xaFo88Qy5JEPd2McfOJGfBnlT2txZu6K/view?usp=drive_link"
                target="#"
                rel="noopener noreferrer">
                <button className="normal-btn">Download CV</button>
                </a>
            </div>
            </>
        ))}
        </dic>
    </section>
    </>
  )
}
