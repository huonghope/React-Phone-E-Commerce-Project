import React from 'react'
import PropTypes from 'prop-types'

function EmptyCart(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    your cart is currrently empty
                </div>
            </div>
        </div>
    )
}

EmptyCart.propTypes = {

}

export default EmptyCart

