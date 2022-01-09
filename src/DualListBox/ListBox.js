import React, { useState } from 'react';
import List from './List';

const ListBox = ({ title, options, onLIClick }) => {
  return (
    <div>
      <h3> {title} </h3>
      <List options={options} onLIClick={onLIClick} />
    </div>
  );
};

export default ListBox;
