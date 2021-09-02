import React from 'react';
import HeaderList from "../header/HeaderList";

type ContactPropsType = {
    title: string
}

const Contact = (props:ContactPropsType) => {
    return (<>
        <HeaderList title={props.title}/>
        <div>
            CONTACT
        </div>
    </>
    );
};

export default Contact;