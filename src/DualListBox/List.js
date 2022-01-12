import React, { useState } from 'react';
import './Styles/List.css';
import ListItem from './ListItem';

const List = ({ options, onLIClick }) => {
  const onKeyDown = (e) => {
    let keyCode = e.keyCode || e.which;
    const nextElement =
      keyCode === 38
        ? e.target.previousElementSibling
        : keyCode === 40
        ? e.target.nextElementSibling
        : null;
    if (nextElement) {
      e.preventDefault();
      nextElement.focus();
      nextElement.click();
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
        />
      ))}
    </ul>
  );
};

export default List;
