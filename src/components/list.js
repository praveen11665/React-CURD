import axios from 'axios';
import Swal from 'sweetalert2';
import AddUser from './AddUser';
import EditUser from './EditUser';
import React, { useEffect, useState } from 'react';
import {Image, Table, Button } from 'react-bootstrap';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function List() {
    const [usersList, setUserData] = useState([]);
    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        axios.get(`https://63fda22fcd13ced3d7bb4e52.mockapi.io/react/curd/api/users`)
            .then((response) => {
                setUserData(response.data);
            })
    }

    const onDelete = (id) => {
        Swal.fire({
            title: "Delete User",
            text: "Are you sure you want to delete this user?",
            icon: "question",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            showCancelButton: true,
        }).then(function (result) {
            if(result.isConfirmed) {
                axios.delete(`https://63fda22fcd13ced3d7bb4e52.mockapi.io/react/curd/api/users/${id}`)
                .then(() => {
                    getData();
                })
            }
        });
    }    

    return (
        <div className='col-12'>
            <AddUser refreshData={getData}/>

            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersList.length ?
                            usersList.map((user, index) => {
                                return (
                                    <tr key={ user.id }>
                                        <td>{ index + 1 }</td>
                                        <td>
                                            <Image src={ user.avatar } width={ 100 } roundedCircle></Image>
                                        </td>
                                        <td>{ user.name }</td>
                                        <td>{ user.company }</td>
                                        <td>{ user.createdAt }</td>
                                        <td className='d-flex justify-content-center'>
                                            <EditUser 
                                                userData={user}
                                                refreshData={getData} 
                                            />
                                            <div>
                                                <Button variant="danger" size="sm" onClick={() => onDelete(user.id)}>
                                                    <FontAwesomeIcon icon={ faTrash }/>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>                            
                                )
                            })
                        : <tr>
                            <td className='text-muted text-center' colSpan="5"> ---No records found---</td>
                           </tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}