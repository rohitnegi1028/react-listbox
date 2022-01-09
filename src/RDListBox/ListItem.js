import React, { useState } from 'react';
const listStyle = { color: 'blue', fontSize: '23px', cursor: 'pointer' };

const ListItem = ({ value, onItemClick, index }) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectItem = (event) => {
    setIsSelected(!isSelected);
    onItemClick(index, false, false);
  };

  return (
    <li style={listStyle} onClick={selectItem}>
      {value}
    </li>
  );
};

export default ListItem;
