import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import AddEditUserPopUp from './AddEditUserPopUp';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function EditUser(props) {
    const {userData, refreshData} = props; 

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [avatar, setAvatar] = useState('');

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setId(userData.id)
        setName(userData.name)
        setCompany(userData.company)
        setAvatar(userData.avatar)

        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    
    const setPopupValue = (value, prop) => {
        if(prop === 'name') {
            setName(value)
        } else if(prop === 'company') {
            setCompany(value)
        } else {
            setAvatar(value)
        }
    }

    return (
        <div>
            <Button variant="primary" size="sm" className='mr-1' onClick={openModal}>
                <FontAwesomeIcon icon={ faPencil }/>
            </Button>            

            <AddEditUserPopUp 
                showModal={showModal} 
                id={id} 
                name={name} 
                company={company} 
                avatar={avatar} 
                refreshData={refreshData}
                setPopupValue={setPopupValue} 
                closeModal={closeModal}
            />
        </div>
    )
}