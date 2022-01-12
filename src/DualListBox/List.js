import React, { useState } from 'react';
import './Styles/List.css';
import ListItem from './ListItem';

const List = ({ options, onLIClick }) => {
  const arrowAction = (index, direction) => {};
  const onKeyDown = (e) => {
    let keyCode = e.keyCode || e.which;
    if (keyCode == 38 || keyCode == 40) {
      e.preventDefault();
      console.log('here');
      console.log(e);
    }
  };
  return (
    <ul onKeyDown={onKeyDown} tabindex="0 ">
      {options.map((option, i) => (
        <ListItem
          key={option.key}
          option={option}
          onLIClick={onLIClick}
          index={i}
          arrowAction={arrowAction}
        />
      ))}
    </ul>
  );
};

export default List;
