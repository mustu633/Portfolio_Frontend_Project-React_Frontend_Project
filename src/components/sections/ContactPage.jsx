import React from 'react'
import { PageTitle } from '../commonSections/PageTitle'
import { contact } from '../data/dummydata'

export const ContactPage = () => {
  return (
    <>
    <div className="contact-box">
        <div className="main-box">
            <PageTitle title="Keep In Touch"/>
            <div className="content-box s-btw-flex">
                <div className="box-right">
                    <form data-aos="flip-down">
                        <div className="flex-box">
                            <input type="text" placeholder='Name' data-aos="flip-up"/>
                            <input type="email" placeholder='Email'data-aos="flip-up"/>
                        </div>
                        <input type="text" placeholder='Subject' data-aos="flip-down"/>
                        <textarea  name="" id="" cols="30" rows="8" data-aos="flipdown-down"></textarea>
                        <button data-aos="slide-down">Submit</button>
                    </form>
                </div>
                <div className="box-left">
                    {contact.map((item) =>(
                        <div className="card-box" data-aos="zoom-in-down">
                            <i>{item.icon}</i>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
