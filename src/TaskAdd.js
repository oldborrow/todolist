import React, { Component } from 'react'
import OneComponent from './OneComponent.js'
export default class TaskAdd extends Component {
    state = {
        name: '',
        descrp: '',
        hideTask: false
    }
    handleNameChange = event => {
        const {value} = event.target
        this.setState({name: value})
    }
    handleDescriptionChange = event => {
        const {value} = event.target
        this.setState({descrp: value})
    }
    handleClick = () => {
        this.setState(curState => ({
            hideTask: !curState.hideTask
        }))
    }
    render() {
        return (
            <div>
                {!this.state.hideTask && <input value = {this.state.name} onChange = {this.handleNameChange}/>}
                {!this.state.hideTask && <input value = {this.state.descrp} onChange = {this.handleDescriptionChange}/>}
                {!this.state.hideTask && <button onClick = {this.handleClick}>Submit</button>}
                {this.state.hideTask && <OneComponent id = {42} name = {this.state.name} description = {this.state.descrp} completed = {false}/>}
            </div>
        )
    }
}
