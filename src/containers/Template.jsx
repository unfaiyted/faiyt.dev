import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {ComponentLibrary} from "../pages/ComponentLibrary";
import {FakeBlog} from "../pages/FakeBlog";
import {Blog} from "../pages/Blog";

export const Template = ({title}) => {
  return (
    <div className="page-container">

      <Header/>


      <div className="page-content-container">
        <FakeBlog/>
      <ComponentLibrary/>
      <Blog/>
      </div>

      <Footer/>


    </div>);
}
