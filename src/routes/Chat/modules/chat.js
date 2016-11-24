// ------------------------------------
// Constants
// ------------------------------------
export const CHANGECHATINPUT = 'CHAT_CHANGE_CHATINPUT'

export const SENDMESSAGE = 'CHAT_SEND_MESSAGE'
export const RECEIVEMESSAGE = 'CHAT_RECEIVE_MESSAGE'

export const CHATENDED = 'CHAT_ENDED'
export const CHATSTARTED = 'CHAT_STARTED'

// ------------------------------------
// Actions
// ------------------------------------
export const changeChatInput = (event) => ({
  type    : CHANGECHATINPUT,
  payload : event.target.value
})

export function sendMessage (socket, value) {
  socket.emit('newMessage', value)
  return {
    type    : SENDMESSAGE,
    payload: {
      messageToSend: value,
      messageToSave: `me: ${value}`
    }
  }
}

export function receiveMessage (message) {
  return {
    type    : RECEIVEMESSAGE,
    payload: `other: ${message}`
  }
}

export function chatStart () {
  return {
    type: CHATSTARTED
  }
}

export function chatEnd () {
  return {
    type: CHATENDED
  }
}

export const actions = {
  changeChatInput,
  sendMessage,
  receiveMessage,
  chatStart,
  chatEnd
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGECHATINPUT] : (state, action) => ({
    ...state,
    inputValue: action.payload
  }),
  [SENDMESSAGE] : (state, action) => ({
    ...state,
    inputValue: '',
    messages: [
      ...state.messages,
      action.payload.messageToSave
    ]
  }),
  [RECEIVEMESSAGE] : (state, action) => ({
    ...state,
    messages: [
      ...state.messages,
      action.payload
    ]
  }),
  [CHATSTARTED] : (state, action) => ({
    ...state,
    started: true
  }),
  [CHATENDED] : (state, action) => ({
    ...state,
    ended: true
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { inputValue: '', messages: [], started: false, ended: false }
export default function chatReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
