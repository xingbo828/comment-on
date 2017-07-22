import React from 'react';

const Radio = ({ label, value, checked=false, onCheck }) => {
  return (
    <label>
      <span>
        <input type="radio" value={value} onChange={onCheck} checked={checked} />
      </span>
      <span>
        {label}
      </span>
    </label>
  );
};

export default Radio;
