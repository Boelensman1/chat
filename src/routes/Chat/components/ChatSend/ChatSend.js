import React from 'react'

export const ChatSend = ({ send }) => (
  <button onClick={send}>
    Send
  </button>
)

ChatSend.propTypes = {
  send: React.PropTypes.func.isRequired
}

export default ChatSend
