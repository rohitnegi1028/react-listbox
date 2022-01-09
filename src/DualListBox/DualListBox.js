import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ListBox from './ListBox';

const allOptions = [
  { key: 'name', order: 2 },
  { key: 'address', order: 3 },
  { key: 'age', order: 4 },
  { key: 'phone', order: 5 },
  { key: 'id', order: 1 },
];
let selectedOptions = [{ key: 'id', order: 1 }];
let availableOptions = [];
const arrangeOptions = () => {
  allOptions.forEach((item) => {
    if (!selectedOptions.find((obj) => obj.key === item.key)) {
      availableOptions.push(item);
    }
  });
};
arrangeOptions();

const DualListBox = () => {
  const moveToRight = () => {};
  const moveToLeft = () => {};

  return (
    <Container>
      <Row>
        <Col>
          <ListBox
            id="left-list-box"
            title="Available"
            options={availableOptions}
          />
        </Col>
        <Col>
          <ListBox
            id="right-list-box"
            title="Selected"
            options={selectedOptions}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DualListBox;
