import React, { useState } from 'react';
import List from './List';
import Filter from './Filter';
const ListBox = ({ title, options, onLIClick, isFilterAble }) => {
  let filterValue;
  const onFilterChange = (event) => {
    console.log(event);
  };

  return (
    <div>
      <h3> {title} </h3>
      {isFilterAble && (
        <Filter filterValue={filterValue} onFilterChange={onFilterChange} />
      )}
      <List options={options} onLIClick={onLIClick} />
    </div>
  );
};

export default ListBox;
