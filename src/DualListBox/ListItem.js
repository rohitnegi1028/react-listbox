import React, { useState } from 'react';
import './Styles/ListItem.css';

const ListItem = ({ option, index, onLiClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectItem = (event) => {
    setIsSelected(!isSelected);
    onLiClick(option, index);
  };

  return (
    <li  onClick={selectItem}>
      {option.key}
    </li>
  );
};

export default ListItem;
