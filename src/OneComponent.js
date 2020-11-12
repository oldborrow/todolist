import React, { Component } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

  export default class OneComponent extends Component {
    handleClick = () => {
      this.props.update(this.props.id)
    }
    render() {
      return (
      <div class = "onetask">
        <div class = "name">{this.props.name}</div>
        <div>{this.props.description}</div>
        <div>{String(this.props.completed)}</div>
        <button onClick = {this.handleClick}>
          Change status
        </button>
      </div>
      )
    }
  }
  