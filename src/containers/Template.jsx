import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {ComponentLibrary} from "../pages/ComponentLibrary";

export const Template = ({title}) => {
  return (
    <div className="page-container">

      <Header/>

      <ComponentLibrary/>

      <Footer/>


    </div>);
}
