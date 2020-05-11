import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
function CartList(props) {
    const { value } = props;
    const { cart } = props.value;
    return (
        <div className="container-fluid">
            {
                cart.map(item => {
                    return <CartItem item = {item} key ={item.id} value= {value} />
                })
            }
        </div>
    )
}
CartList.propTypes = {

}
export default CartList

