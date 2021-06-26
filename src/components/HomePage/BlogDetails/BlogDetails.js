import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { BlogContext } from '../../../App'
import Navigator from '../../Shared/Navigator/Navigator';
import './BlogDetails.css'

const BlogDetails = () => {
    const [blogsData, setBlogsData] = useContext(BlogContext)
    const { blogId } = useParams();
    const blog = blogsData.find(b => b._id === blogId);
    // console.log(blog);

    return (
        <>
            <Navigator></Navigator>
        <div className='blog-details'>
                <img className='blog-img' src={`data:image/png;base64,${blog.image.img}`} alt="" />
                <h1 className='blog-title'>{blog.title}</h1>
                <pre className='blog-content'>{blog.content}</pre>

        </div>
        </>
    );
};

export default BlogDetails;