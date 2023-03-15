import React from "react";
import SearchIcon from "../icons/SearchIcon";
import { ButtonProps } from "./Button";

const SearchButton:React.FC<ButtonProps> = ({disabled=false}) => {
  return (
    <button data-button="search-button" disabled={disabled}>
      <SearchIcon color="white"/>{""}
    </button>
  );
};

export default SearchButton;
