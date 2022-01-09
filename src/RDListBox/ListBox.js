import React, { useState } from 'react';
import './ListItem.css';
import ListItem from './ListItem';
const ulStyle = {
  border: '2px solid grey',
  padding: '5px',
  listStyleType: 'none',
};
const List = ({ items, onItemClick }) => {
  return (
    <ul style={ulStyle}>
      {items.map((item, i) => (
        <ListItem
          key={item.order}
          value={item.key}
          onItemClick={onItemClick}
          index={i}
        />
      ))}
    </ul>
  );
};

const ListBox = ({ title, options }) => {
  let selectedItems = [];

  const selectItem = (index, removeAll, isRemove) => {
    if (removeAll) {
      selectedItems = [];
    }
    selectedItems.push(options[index]);
    console.log(selectedItems);
  };

  return (
    <div>
      <h3> {title} </h3>
      <List items={options} onItemClick={selectItem} />
    </div>
  );
};

export default ListBox;
