import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import React, { useEffect, useState } from 'react';

export default function List() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63fda22fcd13ced3d7bb4e52.mockapi.io/react/curd/api/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);      

    return (
        <Table striped bordered hover variant="dark" size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {APIData.map((data) => {
                    return (
                        <tr>
                            <td>{ data.id }</td>
                            <td>
                                <Image src={data.avatar} roundedCircle width={100}></Image>
                            </td>
                            <td>{ data.name }</td>
                            <td>{ data.company }</td>
                            <td>{ data.createdAt }</td>
                        </tr>                            
                    )
                })}
            </tbody>
        </Table>
    )
}