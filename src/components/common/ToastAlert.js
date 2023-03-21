import { ToastContainer, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function ToastAlert(props) {
    const {visible, message, setVisibleAlert, variant} = props;    
    const toggleShow = () => setVisibleAlert(!visible);  

    return (
        <ToastContainer className="p-3" position="top-end">
            <Toast show={visible} 
                onClose={toggleShow} 
                position="top-end" 
                className="d-inline-block m-1" 
                bg={variant ? variant : 'light'}
                delay={3000} 
                autohide
            >
                <Toast.Header>
                    <FontAwesomeIcon icon={ faCircleExclamation } className="mr-1"/>

                    <strong className="me-auto">Alert</strong>
                </Toast.Header>
                <Toast.Body className="text-black text-left">{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}