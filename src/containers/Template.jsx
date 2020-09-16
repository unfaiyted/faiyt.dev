import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {ComponentLibrary} from "../pages/ComponentLibrary";
import {FakeBlog} from "../pages/FakeBlog";

export const Template = ({title}) => {
  return (
    <div className="page-container">

      <Header/>


      <div className="page-content-container">
        <FakeBlog/>
      <ComponentLibrary/>
      </div>

      <Footer/>


    </div>);
}
