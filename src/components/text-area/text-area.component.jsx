import React from 'react';

import './text-area.styles.scss'

const TextArea = ({ handleChange, label, ...otherProps }) => (
  <div className='form-group'>
    <textarea className='text-area' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default TextArea;