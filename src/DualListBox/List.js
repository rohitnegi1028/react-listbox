import React, { useState } from 'react';
import './Styles/List.css';
import ListItem from './ListItem';

const List = ({ options, onLiClick }) => {
  return (
    <ul>
      {options.map((option, i) => (
        <ListItem option={option} onLiClick={onLiClick} index={i} />
      ))}
    </ul>
  );
};

export default List;
