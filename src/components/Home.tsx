import React from 'react';
import HeaderList from "../header/HeaderList";

type HomePropsType = {
    title: string
}
const Home = (props:HomePropsType) => {
    return (<>
            <HeaderList title={props.title}/>
            <div>
                HOME
            </div>
        </>
    );
};

export default Home;