// ------------------------------------
// Constants
// ------------------------------------
export const CHANGECHATROOMINPUT = 'CHAT_CHANGE_CHATROOMINPUT'

// ------------------------------------
// Actions
// ------------------------------------
export const changeChatRoomInput = (event) => ({
  type    : CHANGECHATROOMINPUT,
  payload : event.target.value
})

export const actions = {
  changeChatRoomInput
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGECHATROOMINPUT] : (state, action) => ({
    ...state,
    chatRoom: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { chatRoom: '' }
export default function chatReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
