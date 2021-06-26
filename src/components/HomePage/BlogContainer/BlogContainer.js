import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../../App';
import BlogCard from '../BlogCard/BlogCard';


const BlogContainer = () => {

    const [blogsData, setBlogsData] = useContext(BlogContext)

    useEffect(() => {
        fetch('https://still-crag-23570.herokuapp.com/blogs')
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