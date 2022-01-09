import React, { useState } from 'react';
import './Styles/List.css';
import ListItem from './ListItem';

const List = ({ options, onLIClick }) => {
  return (
    <ul>
      {options.map((option, i) => (
        <ListItem
          key={option.key}
          option={option}
          onLIClick={onLIClick}
          index={i}
        />
      ))}
    </ul>
  );
};

export default List;
