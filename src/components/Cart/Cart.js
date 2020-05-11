import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../context'
import  CartList from './CartList'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'
export default class Cart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <section>
            <ProductConsumer>
                {(value) => {
                    const {cart} = value;
                    console.log(cart)
                    if(cart.length>0){
                        return (
                            <React.Fragment>
                                <Title name = "your" title ="cart"/>
                                <CartColumns/>
                                <CartList cart={cart} />
                            </React.Fragment>
                        )
                    }
                    return <EmptyCart/>
                }}
            </ProductConsumer>
            </section>
        )
    }
}
