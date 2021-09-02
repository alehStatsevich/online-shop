import React from 'react';
import style from './Header.module.css'
import photo from '../common/img/search icon.svg'
import styleContainer from "../common/Conteiner.module.css";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className={''}>
            <div className={`${styleContainer.container} ${style.header}`}>
                <div className={style.blockHello}>
                    <h3 className={style.hello}>Hello World</h3>
                </div>
                <Nav/>
                <div className={style.block}>
                    <input type="text" placeholder="" className={style.search}/>
                    <img className={style.photo} src={photo} alt="photo"/>
                </div>
            </div>

        </div>
    );
};

export default Header;