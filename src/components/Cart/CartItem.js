import React from 'react'
import CartColumns from './CartColumns';

export default function CartItem({item, value}) {
    const { id, title, img, price,total, count } = item;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style = {{width:"5rem", height:"5rem"}}alt="" srcset=""
                className="img-fluid"
                alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> product :</span>
                    {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> price :</span>
                    {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    
                </div>
            </div>
        </div>
    )
}