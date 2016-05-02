import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import AboutSection from "./components/AboutSection/AboutSection";
import BlogSection from "./components/BlogSection/BlogSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Layout from "./pages/Layout";
import HomeSection from "./components/HomeSection/HomeSection";
import PortafolioSection from "./components/PortafolioSection/PortafolioSection";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import TeamSection from "./components/TeamSection/TeamSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute path="/home" component={HomeSection}></IndexRoute>
      <Route path="home" component={HomeSection}></Route>
      <Route path="about" component={AboutSection}></Route>
      <Route path="resume" component={ResumeSection}></Route>
      <Route path="portafolio" component={PortafolioSection}></Route>
      <Route path="team" component={TeamSection}></Route>
      <Route path="testimonial" component={TestimonialSection}></Route>
      <Route path="blog" component={BlogSection}></Route>
      <Route path="contact" component={ContactSection}></Route>
    </Route>
  </Router>,
  app);
