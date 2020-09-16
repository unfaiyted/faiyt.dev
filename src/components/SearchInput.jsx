import React, {useRef} from "react";
import "../styles/components/search-input.scss";

export const SearchInput = () => {

  const searchInput = useRef(null);

  const handleSearchIconClick = () => {
    searchInput.current.focus();
  }


  return (
    <form className="search-form">
    <label htmlFor="search-bar">
      <img src="./search.svg" onClick={handleSearchIconClick}/>
      <span className="text">Search</span>
      <input ref={searchInput} name="search-bar" placeholder="Search"/>
    </label>
    </form>
  )
}
