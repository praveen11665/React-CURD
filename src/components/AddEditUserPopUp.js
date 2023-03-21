import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ToastAlert from './common/ToastAlert';
import Container from 'react-bootstrap/Container';
import { Button, Form, Image,Row, Col } from 'react-bootstrap';

export default function AddEditUserPopUp(props) {
    //For Alert message
    const [visible, setVisibleAlert] = useState(false);
    const [message, setMessage] = useState('');

    //Popup data
    const {showModal, id, name, company, avatar, setPopupValue, refreshData, closeModal} = props;    

    const updateValue = (value, prop) => {
        setPopupValue(value, prop)
    }   

    const checkValidation = () => {
        if(!name) {
            setVisibleAlert(true)
            setMessage('Name field is required.')

            return true
        }

        if(!company) {
            setVisibleAlert(true)
            setMessage('Company field is required.')

            return true
        }

        if(!avatar) {
            setVisibleAlert(true)
            setMessage('Avatar field is required.')

            return true
        }

        return false
    }

    const postData = () => {
        let validation = checkValidation();

        if(validation) return false

        if(id) {
            axios.put(`https://63fda22fcd13ced3d7bb4e52.mockapi.io/react/curd/api/users/`+id, {
                name,
                company,
                avatar
            }).then(() => {
                closeModal();  
                refreshData();

                setVisibleAlert(true)
                setMessage('User updated successfully.')
            })

            return;
        }

        axios.post(`https://63fda22fcd13ced3d7bb4e52.mockapi.io/react/curd/api/users`, {
                name,
                company,
                avatar
            }).then(() => { 
                closeModal();  
                refreshData();

                setVisibleAlert(true)
                setMessage('User created successfully.')
            })
    }

    return (
        <div>
            <Modal show={showModal} backdrop="static" size="lg" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{id ? 'Update' : 'Create'} User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        id &&
                        <Container>
                            <Row>
                                <Col>
                                    <Image src={ avatar } width={ 100 } roundedCircle className='float-right'></Image>
                                </Col>
                            </Row>
                        </Container>
                    }
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" value={name} onChange={(e) => updateValue(e.target.value, 'name')} required/>                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCompany">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter company name" value={company} onChange={(e) => updateValue(e.target.value, 'company')} required/>                            
                        </Form.Group>
                        {
                            !id &&
                            <Form.Group className="mb-3" controlId="formImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text"  placeholder="Enter image URL" value={avatar} onChange={(e) => updateValue(e.target.value, 'avatar')} required/>                            
                            </Form.Group>
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={postData}>
                        {id ? 'Update' : 'Create'}
                    </Button>
                </Modal.Footer>
            </Modal> 
            <ToastAlert visible={visible} message={message} setVisibleAlert={setVisibleAlert}/>           
        </div>
    )
}