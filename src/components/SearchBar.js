
import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Projects..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
