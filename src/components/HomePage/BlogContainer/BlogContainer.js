import React, { useContext, useEffect, useState } from 'react';
import { BLogContext } from '../../../App';


const BlogContainer = () => {

    const [blogsData, setBlogsData] = useContext(BLogContext)

    useEffect(() => {
        fetch('http://localhost:8080/blogs')
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, [])
    console.log(blogsData);

    return (
        <div>

        </div>
    );
};

export default BlogContainer;