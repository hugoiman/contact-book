import { useState, useEffect } from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function ModalEdit({ contact, showModal, onClose, onSave }: any) {
    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [age, setAge] = useState(contact.age);
    const [photo, setPhoto] = useState(contact.photo);

    const handleOnSave = () => {
        onSave(contact.id, {
            firstName,
            lastName,
            age,
            photo
        });
        
    }

    useEffect(() => {
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setAge(contact.age);
        setPhoto(contact.photo ? contact.photo : 'N/A');
    }, [contact])

    
    return (
        <>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="firstName">First Name</Form.Label>
                            <Form.Control type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="lastName" className="form-label">Last Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="age" className="form-label">Age</Form.Label>
                            <Form.Control type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                            
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="photo" className="form-label">Link Photo</Form.Label>
                            <Form.Control type="text" className="form-control" id="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary" onClick={handleOnSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit;