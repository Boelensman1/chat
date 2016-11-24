import React from 'react'
import { browserHistory } from 'react-router'

/**
 * Redirect a route
 *
 * @param {string} destination Where to redirect to (relative)
 * @returns {object} The component
 */
export default function RedirectTo(destination) {
  // eslint-disable-next-line react/prefer-es6-class
  const component = React.createClass({
    componentDidMount() {
      browserHistory.push(destination)
    },
    render: () => (null),
  })
  return (component)
}
