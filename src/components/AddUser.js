import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import AddEditUserPopUp from './AddEditUserPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default function AddUser(props) {
    const {refreshData} = props;

    const [id] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [avatar, setAvatar] = useState('https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg');

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false)
    }
    
    const setPopupValue = (value, prop) => {
        if(prop === 'name') {
            setName(value)
        } else if(prop === 'company') {
            setCompany(value)
        } else if(prop === 'avatar') {
            setAvatar(value)
        }
    }

    return (
        <div>
            <Button variant="primary" className='float-right mb-2' onClick={setShowModal}>
                <FontAwesomeIcon icon={ faPlusCircle } className="mr-1"/>
                Add User
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
