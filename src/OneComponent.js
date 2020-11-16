import React, { Component } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import './styles.tasks.scss'
import classNames from 'classnames/bind'
import styles from './styles.tasks.scss'

const cx = classNames.bind(styles)

  export default class OneComponent extends Component {
    handleClick = () => {
      this.props.update(this.props.id)
    }
    render() {
      return (
      <div class = {cx("onetask", {"onetask-notcompleted" : this.props.completed})}>
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
  