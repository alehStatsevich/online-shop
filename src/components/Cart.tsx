import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import style from "./Cart.module.css";
import {
    addProductAC,
    deleteAllProductAC,
    deleteProductAC,
} from "../state/product-reducer";
import HeaderList from "../header/HeaderList";
import styleContainer from "../common/Conteiner.module.css";

type CartPropsType = {
    title: string
}
const Cart = (props: CartPropsType) => {
    const elementsForBasket = useSelector((state: AppRootStateType) => state.products.elementsForBasket)

    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        const totalPrice = elementsForBasket.reduce((acc, curr) => {
            return acc + +curr.product.price.priceFormatted.slice(1) * curr.count
        }, 0);
        setTotal(totalPrice)

    }, [elementsForBasket])


    console.log('elementsForBasket', elementsForBasket)


    return (<>
        <HeaderList title={props.title}/>
        {elementsForBasket.length ?
            <div className={`${styleContainer.container} ${style.cart}`}>
                {elementsForBasket.map((el) => {
                    return (
                            <tr key={el.product.id} className={style.cartBlock}>
                                <td>{el.product.image}</td>
                                <td>{el.product.name}</td>
                                <td className={style.block}>
                                    <div className={style.dec}
                                            onClick={() => dispatch(deleteProductAC(el.product.id))}>-
                                    </div>
                                    <div className={style.num}>
                                        {el.count}
                                    </div>
                                    <div className={style.inc}
                                            onClick={() => dispatch(addProductAC(el.product.id))}>+
                                    </div>
                                </td>
                                <td>{`$ ${+el.product.price.priceFormatted.slice(1) * el.count}`}</td>
                                <td>
                                    <div className={style.del}
                                         onClick={() => dispatch(deleteAllProductAC(el.product.id))}>x
                                    </div>
                                </td>
                            </tr>
                    )
                })}
                <div>
                    Total ${total}
                </div>
            </div> : <div>your basket empty</div>
        }

    </>);
};

export default Cart;