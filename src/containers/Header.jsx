import React from "react";
import Helmet from "react-helmet";
import {Nav} from "../components/Nav";

export const Header = ({title}) => {
  return (<div className="app-header">

    <Helmet htmlAttributes>
      <html lang="en" />
      <title>{title || "Faiyt.dev"}</title>
      <meta name="description" content="Personal playground for creating tutorials, news, blogs, self learning" />
    </Helmet>

    <Nav/>

  </div>)
};
