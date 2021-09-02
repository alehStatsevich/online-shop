import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'
import {PATH} from "./Routes";

const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to={PATH.HOME}   className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Home</NavLink>
            <NavLink to={PATH.PRODUCTS} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Products</NavLink>
            <NavLink to={PATH.BLOG} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Blog</NavLink>
            <NavLink to={PATH.CART} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Cart</NavLink>
            <NavLink to={PATH.CONTACT} className={style.link} activeStyle={{
                color: "#FB2E86"
            }}>Contact</NavLink>
        </div>
    );
};

export default Nav;