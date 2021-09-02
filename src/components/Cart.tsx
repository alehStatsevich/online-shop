import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import style from "./Cart.module.css";
import {
    addProductAC,
    addToCartAC,
    deleteAllProductAC,
    deleteProductAC,
    initialStateType
} from "../state/product-reducer";
import {ProductType} from "./Product";
import HeaderList from "../header/HeaderList";
type CartPropsType = {
    title: string
}
const Cart = (props:CartPropsType) => {
    const elementsForBasket = useSelector((state: AppRootStateType) => state.products.elementsForBasket)

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        const totalPrice = elementsForBasket.reduce((acc,curr) => {
            return acc + +curr.product.price.priceFormatted.slice(1) * curr.count
        }, 0);
        setTotal(totalPrice)

    }, [elementsForBasket])


    console.log('elementsForBasket', elementsForBasket)


    return (<>
        <HeaderList title={props.title}/>
        <div>
           ${total}
        </div>
        {elementsForBasket.length ?
            <div style={{width: 500, height: 1000}} className="product">
                {elementsForBasket.map((el) => {
                    return (
                        <tr key={el.product.id}>
                            <td>{el.product.image}</td>
                            <td>{el.product.name}</td>
                            <td>
                                <button className={style.dec}
                                        onClick={() => dispatch(deleteProductAC(el.product.id))}>-
                                </button>
                                // {el.count} //

                                <button className={style.inc}
                                        onClick={() => dispatch(addProductAC(el.product.id))}>+</button>
                            </td>
                            <td>{`$ ${+el.product.price.priceFormatted.slice(1) * el.count}`}</td>
                            <td>
                                <button className={style.del} onClick={() => dispatch(deleteAllProductAC(el.product.id))}>x</button>
                            </td>
                        </tr>
                    )
                })}

            </div> : <div>j</div>
        }

    </>);
};

export default Cart;