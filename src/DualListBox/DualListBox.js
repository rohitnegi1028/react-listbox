import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ListBox from './ListBox';
import './Styles/DualListBox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

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

const findIndexOfOption = (options, option) => {
  return options.findIndex((opt) => opt.key === option.key);
};

const DualListBox = () => {
  let selectedAvailable = [];
  let selectedSelecteds = [];
  const onAvailableLIClick = (option, index, isSelected) => {
    if (isSelected) {
      selectedAvailable = [option];
    } else {
      // remove from selected
      let index = findIndexOfOption(selectedAvailable, option);
      selectedAvailable.splice(index);
    }
    console.log(selectedAvailable);
    setUpdateVar(!updateVar);
  };
  const onSelectedLIClick = (option, index, isSelected) => {
    if (isSelected) {
      selectedSelecteds = [option];
    } else {
      // remove from selected
      let index = findIndexOfOption(selectedAvailable, option);
      selectedSelecteds.splice(index, 1);
    }
    setUpdateVar(!updateVar);
  };

  const moveOptions = (sourceList, destinationList, options) => {
    options.forEach((option) => {
      //append to destinationList
      destinationList.push(option);
      //remove from source list
      let index = findIndexOfOption(sourceList, option);
      sourceList.splice(index, 1);
    });
  };

  const [updateVar, setUpdateVar] = useState(false);

  const moveToSelected = () => {
    moveOptions(availableOptions, selectedOptions, selectedAvailable);
    setUpdateVar(!updateVar);
    selectedAvailable = [];
  };
  const moveToAvailable = () => {
    moveOptions(selectedOptions, availableOptions, selectedSelecteds);
    setUpdateVar(!updateVar);
    selectedSelecteds = [];
  };

  return (
    <Container>
      <Row>
        <Col>
          <ListBox
            id="left-list-box"
            title="Available"
            options={availableOptions}
            onLIClick={onAvailableLIClick}
            isFilterAble={true}
          />
        </Col>
        <Col xs={2} className="action-container">
          <button onClick={moveToAvailable}>
            <FontAwesomeIcon icon={faAngleLeft} /> <br />
          </button>
          <button onClick={moveToSelected}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </Col>
        <Col>
          <ListBox
            id="right-list-box"
            title="Selected"
            options={selectedOptions}
            onLIClick={onSelectedLIClick}
          />
        </Col>
        <Col xs={2} className="action-container">
          <button>
            <FontAwesomeIcon icon={faAngleDoubleUp} />{' '}
          </button>
          <br />
          <button>
            <FontAwesomeIcon icon={faAngleUp} /> <br />
          </button>
          <button>
            <FontAwesomeIcon icon={faAngleDown} /> <br />
          </button>
          <br />
          <button>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DualListBox;
