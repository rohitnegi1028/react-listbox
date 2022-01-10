import React from 'react';
import './style.css';
import DualListBox from './DualListBox/DualListBox';

export default function App() {
  let options = [];
  let selected = [];

  let labels = [];

  const onChange = () => {};
  const deselectColumnOrder = () => {};

  let preserveSelectedOrder = true;
  let showOrderButtons = true;
  let canFilter = true;

  return (
    <div>
      <DualListBox
        options={options}
        selected={selected}
        onChange={onChange}
        preserveSelectedOrder
        showOrderButtons
        deselectColumnOrder={deselectColumnOrder}
        canFilter
        labels={labels}
      />
    </div>
  );
}
