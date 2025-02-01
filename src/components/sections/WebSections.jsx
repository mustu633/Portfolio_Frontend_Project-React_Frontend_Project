import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ServicesPage } from "../homeSection/ServicesPage";
import { PortfolioPage } from "./PortfolioPage";
import { Testimonials } from "./Testimonials";
import { BlogPage } from "./BlogPage";
import { FooterComp } from "../commonSections/FooterComp";
import { Navbar } from "../commonSections/Navbar";
import { HomePage } from "../homeSection/HomePage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";

export const WebSections = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" exact component={AboutPage}></Route>
          <Route path="/services" exact component={ServicesPage}></Route>
          <Route path="/portfolio" exact component={PortfolioPage}></Route>
          <Route path="/testimonials" exact component={Testimonials}></Route>
          <Route path="/blog" exact component={BlogPage}></Route>
          <Route path="/contact" exact component={ContactPage}></Route>
        </Switch>
        <FooterComp />
      </Router>
    </>
  );
};
