import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
function CartList({cart}) {
    return (
        <div className="container-fluid">
            {
                cart.map(item => {
                    return <CartItem item = {item} key ={item.id} value= {cart} />
                })
            }
        </div>
    )
}
CartList.propTypes = {

}
export default CartList

