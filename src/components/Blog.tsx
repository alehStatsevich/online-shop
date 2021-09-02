import React from 'react';
import HeaderList from "../header/HeaderList";

type BlogPropsType = {
    title: string
}

const Blog = (props: BlogPropsType) => {
    return (<>
            <HeaderList title={props.title}/>
            <div>
                BLOG
            </div>
    </>

    );
};

export default Blog;