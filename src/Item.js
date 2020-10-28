import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img className='image' src={this.props.url} alt='' />
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>Horns:{this.props.horns}</p>

            </div>
        )
    }
}
