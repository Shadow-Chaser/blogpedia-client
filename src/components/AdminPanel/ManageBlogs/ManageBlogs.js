import React, { useContext, useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { BsFillTrashFill } from 'react-icons/bs'
import './ManageBlogs.css'
import { BlogContext } from '../../../App';

const ManageServices = () => {
    // const [blogsData, setBlogsData] = useState([]);

    // useEffect(() => {

    //     fetch('https://still-crag-23570.herokuapp.com/blogs')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBlogsData(data);
    //         })

    // }, [])

    const [blogsData, setBlogsData] = useContext(BlogContext);


    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://still-crag-23570.herokuapp.com/deleteBlog/${id}`, {
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
                <h2 className=" mt-3 mb-3" style={{ marginLeft: '105px', color: '#83B799' }}>Manage Blogs</h2>

                <Table striped bordered hover style={{ width: "80%", margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th className='text-center'>Blog Title</th>
                            <th className='text-center'> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogsData.map(blog =>
                                <tr>
                                    <td className='text-center'>{blog.title}</td>
                                    <td className='text-center'><BsFillTrashFill onClick={() => handleDelete(blog._id)} style={{ cursor: 'pointer', color: 'red' }} /> </td>
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