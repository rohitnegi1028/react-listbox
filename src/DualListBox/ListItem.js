import React, { useState } from 'react';
import './Styles/ListItem.css';

const ListItem = ({ option, index, onLIClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectItem = (event) => {
    onLIClick(option, index, !isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <li className={isSelected ? 'selected' : ''} onClick={selectItem}>
      {option.key}
    </li>
  );
};

export default ListItem;
