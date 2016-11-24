import { injectReducer } from '../../store/reducers'
import redirectTo from '../redirectTo'

export default (store) => ({
  path : 'chat',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      if (!store.getState().home || !store.getState().home.chatRoom.length > 0) {
        cb(null, redirectTo('/'))
      } else {
        /*  Webpack - use require callback to define
          dependencies for bundling   */
        const Chat = require('./containers/ChatContainer').default
        const reducer = require('./modules/chat').default

        /*  Add the reducer to the store on key 'chat'  */
        injectReducer(store, { key: 'chat', reducer })

        /*  Return getComponent   */
        cb(null, Chat)
      }
      /* Webpack named bundle   */
    }, 'chat')
  }
})
