import React, { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search-form">
      <img className="form-img" src="./breakfast.svg" alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="meal" className="search-label">
          What would you like to cook today?
        </label>
        <br />
        <input
          autoFocus
          className="search-input"
          type="text"
          name="meal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
