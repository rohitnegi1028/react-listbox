import React, { useState } from 'react';
import './ListItem.css';

const ulStyle = {
  border: '2px solid grey',
  padding: '5px',
  listStyleType: 'none',
};
const listStyle = { color: 'blue', fontSize: '23px', cursor: 'pointer' };

const ListItem = ({ value, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectItem = (event) => {
    setIsSelected(!isSelected);
  };

  return (
    <li style={listStyle} onClick={selectItem}>
      {value}
    </li>
  );
};

const List = ({ items, onItemClick }) => (
  <ul style={ulStyle}>
    {items.map((item, i) => (
      <ListItem key={item.order} value={item.key} onClick={onItemClick} />
    ))}
  </ul>
);

const ListBox = ({ title, options }) => {
  console.log(options);
  return (
    <div>
      <h3> {title} </h3>
      <List items={options} />
    </div>
  );
};

export default ListBox;
