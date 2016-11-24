import React, { Component } from 'react'
import Input from 'components/Input'
import ChatSend from '../ChatSend'
import MessageList from '../MessageList'

import io from 'socket.io-client'

class Chat extends Component {
  constructor (props) {
    super(props)
    const { chatRoom } = props
    const socket = io('localhost:8080', { query: `chatRoom=${chatRoom}` })

    this._socket = socket
    this._sendMessage = props.sendMessage.bind(this, socket)
  }

  componentDidMount () {
    const { receiveMessage, chatStart, chatEnd } = this.props
    this._socket.on('newMessage', message => receiveMessage(message))
    this._socket.on('chatReady', chatStart)
    this._socket.on('disconnect', () => {
      // the other guy left
      this._socket.disconnect()
      chatEnd()
    })
  }

  render () {
    const {
      messages,
      chatInputValue,
      changeChatInput,
      chatStarted,
      chatEnded
    } = this.props
    return (
      <div>
        <MessageList messages={messages} />

        {chatStarted && !chatEnded &&
          <form>
            <Input value={chatInputValue} onChange={changeChatInput} />
            <ChatSend send={(event) => {
              event.preventDefault()
              this._sendMessage(chatInputValue)
            }} />
          </form>
        }

        {!chatStarted && <span>Chat not started yet.</span>}
        {chatEnded && <span>Chat ended.</span>}
      </div>
    )
  }
}

Chat.propTypes = {
  chatInputValue : React.PropTypes.string.isRequired,
  changeChatInput: React.PropTypes.func.isRequired,
  sendMessage: React.PropTypes.func.isRequired,
  receiveMessage: React.PropTypes.func.isRequired,
  chatEnd: React.PropTypes.func.isRequired,
  chatStart : React.PropTypes.func.isRequired,
  chatEnded: React.PropTypes.bool.isRequired,
  chatStarted: React.PropTypes.bool.isRequired,
  messages: React.PropTypes.array.isRequired,
  chatRoom: React.PropTypes.string.isRequired
}

export default Chat
