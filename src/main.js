import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/card">card</Link></li>
                    <li><Link to="/test">test</Link></li>
                    <li><Link to="/app">app</Link></li>
                </ul>
            </div>)
    }
})







