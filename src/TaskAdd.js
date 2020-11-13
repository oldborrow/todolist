import React, { Component } from 'react'
import OneComponent from './OneComponent.js'
export default class TaskAdd extends Component {
    state = {
        id: 0,
        name: '',
        descrp: ''
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
        this.props.update(this.state.id, this.state.name, this.state.descrp, this.state.completed = false)
    }
    render() {
        return (
            <div class = "onetask">
                {<input value = {this.state.name} onChange = {this.handleNameChange}/>}
                {<input value = {this.state.descrp} onChange = {this.handleDescriptionChange}/>}
                {<button onClick = {this.handleClick}>Submit</button>}
            </div>
        )
    }
}
