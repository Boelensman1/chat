import React from 'react'
import Message from '../Message'

export const MessageList = (props) => (
  <div>
    {props.messages.map((message, key) => (
      <Message key={key} contents={message} />
    ))}
  </div>
)

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default MessageList
