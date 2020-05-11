import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { storeProducts, detailProduct } from './data'

const ProductContent = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
	static propTypes = {
		prop: PropTypes
	}
	state = {
		products: [], // list products
		detailProduct: detailProduct, // deital product
		cart: [], // list cart
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0
	}
	componentDidMount(){
		this.setProducts();
	}
	setProducts = () => {
		let products = [];
		storeProducts.forEach(product => {
			const singleItem = {...product};
			products = [...products, singleItem];
		})
		this.setState(() => {
			return {products,cart:products}
		})
	}
	
	// get product by id
	getItem = (id) => {
		const product = this.state.products.find(item => item.id === id)
		return product;
	}
	// detail product click
	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return {detailProduct: product}
		})
	}
	// add product to cart
	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		// change product with tempProducts
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(() => {
			return {
				products: tempProducts,
				cart: [...this.state.cart, product]
				}
		},() => {
			console.log('add to cart', this.state.cart)
		})
	}
	// open Modal
	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return {modalProduct:product, modalOpen:true}
		})
	}
	// close Modal
	closeModal = () => {
		this.setState(() => {
			return{modalOpen:false}
		})
	}
	increment = id => {
		const product = this.getItem(id);
	}
	decrement = id => {
		const product = this.getItem(id);
	}
	removeItem = id => {
		const product = this.getItem(id);
	}
	clearCart = () => {
		this.setState(() => {
			return {cart: []}
		})
	}
	render() {
		return (
			<ProductContent.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				openModal: this.openModal,
				closeModal: this.closeModal,
				increment: this.increment,
				decrement: this.decrement,
				removeItem: this.removeItem,
				clearCart: this.clearCart
			}}>
				{this.props.children}
			</ProductContent.Provider>
		)
	}
}

const ProductConsumer = ProductContent.Consumer;

export { ProductProvider, ProductConsumer };
