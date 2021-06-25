import React from 'react';
import { useHistory } from 'react-router';
import './BlogCard.css'
const BlogCard = (props) => {
    const { _id, title, content, image } = props.blog;

    const history = useHistory();
    const readBlog = (blogId) => {
        const url = `/blog/${blogId}`;
        history.push(url)
    }

    return (

        <div className="card" onClick={() => readBlog(_id)}>
            <img src={`data:image/png;base64,${image.img}`} alt="" className='card-img' />
            <h1 className="card-title">{title}</h1>
            <p className='card-text' >{content.slice(0, 140)} ... </p>
        </div>

    );
};

export default BlogCard;