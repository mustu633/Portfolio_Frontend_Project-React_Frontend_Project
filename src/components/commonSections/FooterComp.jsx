import React from 'react'
import { social } from '../data/dummydata'

export const FooterComp = () => {
  return (
    <>
    <div className="footer" data-aos="slide-up">
        {social.map((item, index) => (
            <>
            <a
            key={index} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            >
            <i>{item.icon}</i>
            </a>
            </>
        ))}
        <p> All Rights Reserved. Design by Mustafa @ 2025</p>
    </div>
    </>
  )
}
