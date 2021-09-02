import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import Contact from "../components/Contact";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Cart from "../components/Cart";
import Products from "../components/Products";
import Header from "./Header";

export const PATH = {
    HOME: '/home',
    PRODUCTS: '/products',
    BLOG: '/blog',
    CART: '/cart',
    CONTACT: '/contact',
}
const Routes = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() =><Redirect to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} render={() => <Home title={'Home'}/>}/>
                <Route path={PATH.PRODUCTS} render={() => <Products title={'Product List'}/>}/>
                <Route path={PATH.BLOG} render={() => <Blog title={'Blog'}/>}/>
                <Route path={PATH.CART} render={() => <Cart title={'Shopping Cart'}/>}/>
                <Route path={PATH.CONTACT} render={() => <Contact title={'Contact'}/>}/>
            </Switch>
        </div>
    );
};

export default Routes;