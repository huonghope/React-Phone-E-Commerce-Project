import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Default extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3"> 404</h1>
                        <span className="text-danger">
                            {this.props.location.pathname}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
