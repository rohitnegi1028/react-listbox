import React, { useState } from 'react';
import List from './List';

const ListBox = ({ title, options, onItemClick }) => {
  return (
    <div>
      <h3> {title} </h3>
      <List options={options} onItemClick={onItemClick} />
    </div>
  );
};

export default ListBox;
