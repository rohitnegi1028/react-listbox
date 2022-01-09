import React from 'react';

const Filter = ({ filterValue, onFilterChange }) => {
  const id = 'i-f1';
  const controlKey = 'input-filter';
  return (
    <div className="rdl-filter-container">
      {/* <label
        className="rdl-control-label rdl-sr-only"
        htmlFor={`${id}-filter-${controlKey}`}
      >
        Search
      </label> */}
      <input
        className="rdl-filter"
        data-key={controlKey}
        id={`${id}-filter-${controlKey}`}
        placeholder="search"
        type="text"
        value={filterValue}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
