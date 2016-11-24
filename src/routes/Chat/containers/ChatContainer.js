import { connect } from 'react-redux'
import {
  changeChatInput,
  sendMessage,
  receiveMessage,
  chatStart,
  chatEnd
} from '../modules/chat'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the chat:   */

import ChatView from '../components/ChatView'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  sendMessage: (chatRoom, value) => sendMessage(chatRoom, value),
  receiveMessage: (message) => receiveMessage(message),
  changeChatInput: changeChatInput,
  chatStart: chatStart,
  chatEnd: chatEnd
}

const mapStateToProps = (state) => ({
  chatInputValue : state.chat.inputValue,
  messages: state.chat.messages,
  chatStarted: state.chat.started,
  chatEnded: state.chat.ended,
  chatRoom: state.home.chatRoom
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const chat = (state) => state.chat
    const tripleCount = createSelector(chat, (count) => count * 3)
    const mapStateToProps = (state) => ({
      chat: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)
