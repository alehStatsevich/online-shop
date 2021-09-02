import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {initialStateType} from "../state/product-reducer";
import Product from "./Product";
import styleContainer from '../common/Conteiner.module.css'
import HeaderList from "../header/HeaderList";

type ProductsPropsType = {
    title: string
}

const Products = (props: ProductsPropsType) => {
    const products = useSelector<AppRootStateType, initialStateType>(state => state.products)
    console.log(products)
    return (<>
            <HeaderList title={props.title}/>
            <div className={styleContainer.container}>

                {
                    products.elements.map((ps) => <Product key={ps.id}
                                                           product={ps}/>)
                }
            </div>
    </>

    );

};

export default Products;