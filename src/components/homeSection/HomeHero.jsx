import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const HomeHero = () => {
  return (
    <>
      <section className="home-screen .flex-box">
        {home.map((val, i) => (
          <div className="home-screen-box .flex-box">
            <h3 data-aos="slide-up">{val.text}</h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.frameWork}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="flip-down">{val.desc}</p>
            <a href="https://github.com/mustu633"
            target="#"
            rel="noopener noreferrer"
            >
            <button className="normal-btn" data-aos="slide-down">Explore More</button>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};
