import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { BlogContext } from '../../../App'
import './BlogDetails.css'

const BlogDetails = () => {
    const [blogsData, setBlogsData] = useContext(BlogContext)
    const { blogId } = useParams();
    const blog = blogsData.find(b => b._id === blogId);
    console.log(blog);

    return (
        <div className='blog-details'>
            <img src={`data:image/png;base64,${blog.image.img}`} alt="" />
            <h1>{blog.title}</h1>
            <pre>{blog.content}</pre>

        </div>
    );
};

export default BlogDetails;