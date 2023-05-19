import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { GrFilter } from 'react-icons/gr';
import css from '../Filter/Filter.module.css';

const options = [
  { label: 'show all', value: 'all' },
  { label: 'follow', value: 'follow' },
  { label: 'followings', value: 'followings' },
];

const Dropdown = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className={css.filters}>
      <GrFilter />
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        hasSelectAll={false}
      />
    </div>
  );
};

export default Dropdown;
