import React, {useState} from "react";
import "../styles/components/nav.scss"
import {SearchInput} from "./SearchInput";

export const Nav = ({title, links}) => {


  const handleLogoClick = () => {
    window.location.assign("https://faiyt.dev");
  }

  return (
    <div className="nav">

    <div className="logo">
      <img src="./logo.svg" alt="Faiyt.dev Logo" onClick={handleLogoClick}/>
      <span className="text" onClick={handleLogoClick}>Faiyt.dev</span>
     </div>

    <div className="links">
      <NavLink displayText="Blog" location={"/blog"} />
      <NavLink displayText="Projects" location={"/projects"} />
      <NavLink displayText="Tutorials" location={"/tutorials"} />
      <NavLink displayText="About Me" location={"/about"} />
    </div>
    <div className="more">
        <SearchInput />
        <a href="http://github.com/unfaiyted">GitHub</a>
    </div>

  </div>)
};



const NavLink = ({location, displayText}) => {

  const isActive = (display) => {

    const replaced  = window.location.href.replace(/https?:\/\/[^\/]+/i, "");
    console.log(replaced)

    return (replaced.split('?')[0] === display)
  }

  return (
    <a href={location} className={isActive(location) ? "active" : ""}>{displayText}</a>
  )
}
