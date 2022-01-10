import React from 'react';
import './style.css';
import DualListBox from './DualListBox/DualListBox';

export default function App() {
  let options = [
    {
      label: 'Level',
      value: 'level',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'ORG_LEVEL',
      isSearchable: null,
    },
    {
      label: 'ID',
      value: 'id',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: null,
      isSearchable: null,
    },
    {
      label: 'Name',
      value: 'name',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Address',
      value: 'address',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Phone',
      value: 'phone',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Fax',
      value: 'fax',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Email',
      value: 'email',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Use name',
      value: 'clientName',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_CLINAME',
      isSearchable: null,
    },
  ];
  let selected = ['name', 'id', 'level', 'address', 'email', 'clientName'];
  let labels = {
    button: {
      left: 'Remove columns from Selected Columns',
      right: 'Add columns to Selected Columns',
      top: 'Move column to the top of the list',
      up: 'Move column up one position in the list',
      down: 'Move column down one position in the list',
      bottom: 'Move column to the bottom of the list',
    },
  };
  let options = [
    {
      label: 'Level',
      value: 'level',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'ORG_LEVEL',
      isSearchable: null,
    },
    {
      label: 'ID',
      value: 'id',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: null,
      isSearchable: null,
    },
    {
      label: 'Name',
      value: 'name',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Address',
      value: 'address',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Phone',
      value: 'phone',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Fax',
      value: 'fax',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Email',
      value: 'email',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_LEVEL',
      isSearchable: null,
    },
    {
      label: 'Use name',
      value: 'clientName',
      aclKey: 'aclKey',
      type: 'text',
      lookupKey: 'BC_CLINAME',
      isSearchable: null,
    },
  ];
  let selected = ['name', 'id', 'level', 'address', 'email', 'clientName'];
  let labels = {
    button: {
      left: 'Remove columns from Selected Columns',
      right: 'Add columns to Selected Columns',
      top: 'Move column to the top of the list',
      up: 'Move column up one position in the list',
      down: 'Move column down one position in the list',
      bottom: 'Move column to the bottom of the list',
    },
  };

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
