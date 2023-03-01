import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function AddUser(props) {
    const {getData} = props;
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [avatar, setAvatar] = useState('https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg');
    const [showModal, setShowModal] = useState(false);    
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const postData = () => {
        axios.post(`https://63fda22fcd13ced3d7bb4e52.mockapi.io/react/curd/api/users`, {
            name,
            company,
            avatar
        }).then(() => { 
            setShowModal(false);  
            getData();
        })
    }

    return (
        <div>
            <Button variant="primary" className='float-right mb-2' onClick={handleShow}>
                <FontAwesomeIcon icon={ faPlusCircle } className="mr-1"/>
                Add User
            </Button>
            <Modal show={showModal} backdrop="static" size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" value={name} onChange={(e) => setName(e.target.value)}/>                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter company name" value={company} onChange={(e) => setCompany(e.target.value)}/>                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text"  placeholder="Enter image URL" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>                            
                        </Form.Group>                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={postData}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}