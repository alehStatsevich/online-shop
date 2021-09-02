import React from 'react';
import style from './HeaderList.module.css'

type HeaderPropsType = {
    title?: string
}

const HeaderList = (props: HeaderPropsType) => {
    return (
        <div className={style.headerList}>
            <h1 className={style.headingList}>{props.title}</h1>
        </div>
    );
};

export default HeaderList;