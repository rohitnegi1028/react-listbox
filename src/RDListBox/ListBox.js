import React from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListItem = ({ value, onClick }) => <li onClick={onClick}>{value}</li>;

const List = ({ items, onItemClick }) => (
  <ul>
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
