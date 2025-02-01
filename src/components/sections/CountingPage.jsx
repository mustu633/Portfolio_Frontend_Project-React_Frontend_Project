import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";

export const CountingPage = () => {
  return (
    <>
      <section className="home-screen count-box">
        <div className="main-box box-grid-3r box-grid-4r">
          {project.map((item, i) => (
            <div className="card-box" data-aos="slide-down">
              <i>{item.icon}</i>
              <h1 className="page-title">
                <CountUp enableScrollSpy duration={1} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
