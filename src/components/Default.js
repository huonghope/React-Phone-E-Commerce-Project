import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Default extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <div>
                page not found
            </div>
        )
    }
}
