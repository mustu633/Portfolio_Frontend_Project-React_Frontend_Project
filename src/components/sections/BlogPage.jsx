import React from "react";
import { PageTitle } from "../commonSections/PageTitle";
import { blog } from "../data/dummydata";

export const BlogPage = () => {
  return (
    <>
      <section className="blog-box">
        <div className="main-box">
          <PageTitle title="Blog" />
          <div className="content-box box-grid-3r">
            {blog.map((item) => (
              <div className="card-box" data-aos="slide-up">
                <div className="image-box" data-aos="slide-up">
                  <img src={item.cover} alt="" data-aos="slide-down" />
                </div>
                <div className="text-box">
                  <h3 data-aos="slide-up">{item.title}</h3>
                  <label data-aos="slide-up">
                    By {item.author}
                  </label>
                  <p data-aos="slide-up">{item.desc}</p>
                  <a href={item.bloglink} target="#" rel="noopener noreferrer">
                    <button className="normal-btn">Read more</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
