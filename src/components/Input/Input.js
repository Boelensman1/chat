import React from 'react'

export const Input = (props) => (
  <input
    className='chatinput'
    type='text'
    {...props}
  />
)

Input.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default Input
