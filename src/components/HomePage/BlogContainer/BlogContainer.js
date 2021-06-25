import React, { useContext, useEffect, useState } from 'react';
import { BLogContext } from '../../../App';
import BlogCard from '../BlogCard/BlogCard';


const BlogContainer = () => {

    const [blogsData, setBlogsData] = useContext(BLogContext)

    useEffect(() => {
        fetch('http://localhost:8080/blogs')
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, [])
    console.log(blogsData);

    return (
        <div className='row d-flex justify-content-center mt-5'>
            {
                blogsData.map(blog => <BlogCard blog={blog} ></BlogCard>)
            }
        </div>
    );
};

export default BlogContainer;