import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddBlog = () => {
    const [blogData, setBlogData] = useState({})
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newData = { ...blogData };
        newData[e.target.name] = e.target.value;
        setBlogData(newData);
    }
    // console.log(blogData);

    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('content', blogData.content);
        formData.append('file', file);
        formData.append('title', blogData.title)

        fetch('http://localhost:8080/addBlog', {
            method: 'POST',
            body: formData

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Blog added successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })


        e.preventDefault()
    }


    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10">
                <div className='d-flex justify-content-center'>
                    <Form className='w-75 mt-5' onSubmit={handleSubmit}>
                        <h1 className="mb-4 text-info">Add a new Blog</h1>
                        <Form.Group controlId="title">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='title' placeholder="Enter blog title" />
                        </Form.Group>

                        <Form.Group controlId="content">
                            <Form.Label>Blog Content</Form.Label>
                            <Form.Control onBlur={handleBlur} as="textarea" type="text" name='content' placeholder="Enter blog content" />
                        </Form.Group>



                        <Form.Group controlId="file">
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control onBlur={handleFileChange} type="file" name='' placeholder="Upload cover image" />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button className='' variant="primary" type="submit">Submit</Button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;