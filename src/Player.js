import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Player.css'

class Player extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    }
    render() {
        return (
            <li className="player">
                <p className="name">{this.props.name}</p>
                <p className="score">{this.props.score} </p>
            </li>
        )
    }
}

export default Player