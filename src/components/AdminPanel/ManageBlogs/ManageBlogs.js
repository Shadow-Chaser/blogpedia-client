import React, { useContext, useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { FcFullTrash } from 'react-icons/fc'
import './ManageBlogs.css'
import { BLogContext } from '../../../App';

const ManageServices = () => {
    // const [blogsData, setBlogsData] = useState([]);

    // useEffect(() => {

    //     fetch('http://localhost:8080/blogs')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBlogsData(data);
    //         })

    // }, [])

    const [blogsData, setBlogsData] = useContext(BLogContext);


    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:8080/deleteBlog/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newBlogsData = blogsData.filter(service => service._id !== id);
                    setBlogsData(newBlogsData)
                }
            })
    }

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10'>
                <h2 className="text-info mt-3 mb-3" style={{ marginLeft: '105px' }}>Manage Blogs</h2>

                <Table striped bordered hover style={{ width: "80%", margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th>Blog Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogsData.map(blog =>
                                <tr>
                                    <td>{blog.title}</td>
                                    <td><FcFullTrash onClick={() => handleDelete(blog._id)} style={{ cursor: 'pointer' }} /> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>


            </div>
        </div>
    );
};

export default ManageServices;