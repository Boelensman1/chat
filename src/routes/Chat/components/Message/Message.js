import React from 'react'

export const Message = (props) => (
  <div>
    {props.contents}
  </div>
)

Message.propTypes = {
  contents: React.PropTypes.string.isRequired
}

export default Message
