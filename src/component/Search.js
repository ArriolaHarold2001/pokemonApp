import React from "react";
import "../index.css";

const Search = ({ fetchPoke }) => {
  return (
    <>
      <input
        type="text"
        className="poke-search"
        placehold="Enter Pokemon Name"
      ></input>
      <button onClick={fetchPoke}>Submit</button>
    </>
  );
};

export default Search;
