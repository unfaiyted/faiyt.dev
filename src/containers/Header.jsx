import React from "react";
import Helmet from "react-helmet";

export const Header = ({title}) => {
  return (<div>

    <Helmet htmlAttributes>
      <html lang="en" />
      <title>{title || "Faiyt.dev"}</title>
      <meta name="description" content="Personal playground for creating tutorials, news, blogs, self learning" />
    </Helmet>

  </div>)
};
