import React, { Component } from 'react'

export default class InputValue extends Component {
  render() {
    return (
        <div className='mb-3' >
            <label>{this.props.title}:</label>
            <input 
                className='rounded'
                required
                placeholder='Type something'
                value={this.props.value} 
                onChange={(event)=>this.props.setValue(event.target.value)} />
        </div>
    )
  }
}
