import React from 'react'
import { browserHistory } from 'react-router'
import './HomeView.scss'

import Input from 'components/Input'

const submitForm = (event) => {
  event.preventDefault()
  browserHistory.push('/chat')
}

export const HomeView = (props) => (
  <div>
    <h4>Welcome!</h4>
    <form onSubmit={submitForm}>
      <Input
        value={props.chatRoom}
        placeholder='Chatroom'
        onChange={props.changeChatRoomInput}
      />
      <br />
      <button>
        submit
      </button>
    </form>
  </div>
)

HomeView.propTypes = {
  chatRoom: React.PropTypes.string.isRequired,
  changeChatRoomInput: React.PropTypes.func.isRequired
}

export default HomeView
