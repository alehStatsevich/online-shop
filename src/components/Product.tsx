import React, {useCallback, useEffect, useRef, useState} from 'react';
import style from './Product.module.css';
import photoBasket from '../common/img/rk.png'
import {useDispatch} from "react-redux";
import {addToCartAC} from "../state/product-reducer";


type PriceType = {
    amount: number,
    priceFormatted: string
}
type pricePromotialType = {
    amount: number,
    priceFormatted: string
}
type ProductsType = {
    id: string,
    name: string,
    price: PriceType,
    pricePromotial?: pricePromotialType,
    decimal: number,
    image: any

}
export type ProductType = {
    product: ProductsType
}

const Product = (props: ProductType) => {
    const dispatch = useDispatch()
    const addToCart = useCallback(function () {
            const action = addToCartAC(props.product.id)
            dispatch(action)
        }, [])
console.log(addToCart)
    return (
        <div className={style.block}>
            <div>
                <div className={style.icon}>
                    <img src={photoBasket}  className={style.basket} onClick={addToCart} alt="photoBasket"/>
                    <img src={props.product.image} className={style.image}/>
                </div>
                <div className={style.workInfo}>
                    <h3 className={style.productTitle}>{props.product.name}</h3>
                    <span className={style.description}>{props.product.price.priceFormatted}</span>
                    <span className={style.productDescription}>{props.product.pricePromotial?.priceFormatted}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;