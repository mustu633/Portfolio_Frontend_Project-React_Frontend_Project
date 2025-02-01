import { Link, List } from "@mui/material";
import React, { useState } from "react";
import { portfolio } from "../data/dummydata";
import { Visibility } from "@mui/icons-material";
import { PageTitle } from "../commonSections/PageTitle";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]

export const PortfolioPage = () => {

  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    if(category === "all"){
        setList(portfolio);
    }
  }
  return (
    <>
      <article className="portfolio-box">
        <div className="container">
        <PageTitle title='Portfolio'/>
          <div className="selection-btn">
            {category.map((category) => (
                <button onClick={() => filterItems(category)} data-aos="slide-up">{category}</button>
            ))}
          </div>
          <div className="content-box box-grid-3r">
            {list.map((items) => (
              <div className="card-box" data-aos="slide-down">
                <div className="image-box">
                  <img src={items.cover} alt="" />
                </div>
                <div className="card-disc">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
            
          </div>
          {""}
        </div>
      </article>
    </>
  );
};
