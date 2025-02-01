import React from "react";
import { PageTitle } from "../commonSections/PageTitle";
import { services } from "../data/dummydata";

export const ServicesPage = () => {
  return (
    <>
      <section className="services-box">
        <div className="main-box">
          <PageTitle title="Services" />
          <div className="content-box box-grid-3r">
            {services.map((item, i) => (
              <div className="card-box" data-aos="slide-up">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
