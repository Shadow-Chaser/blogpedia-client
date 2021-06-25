import React from 'react';
import './BlogCard.css'
const BlogCard = (props) => {
    const { title, content, image } = props.blog;
    return (

        <div className="card">
            <img src={`data:image/png;base64,${image.img}`} alt="" className='card-img' />
            <h1 className="card-title">{title}</h1>
            <p className='card-text' >{content.slice(0, 140)} ... </p>
        </div>

    );
};

export default BlogCard;