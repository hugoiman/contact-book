import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Card, Form } from "react-bootstrap"
import { getContact } from '../../services/contact';
import { ContactDto } from '../../dto/contact';

function DetailContact() {
    const { id = "" } = useParams();
    const [contact, setContact] = useState<ContactDto>({
        id: "",
        firstName:"",
        lastName:"",
        age:0,
        photo:"",
    });
    // const [photo, setPhoto] = useState(contact.photo);

    useEffect(() => {
        getContact((res: ContactDto) => {
            setContact(res);
            // console.log(res.data);
        }, id);
        // setPhoto(contact.photo);
    }, [id])

    return (
        <>
            <div className="col col-12 col-md-8 offset-md-2">
                <Card>
                    <Card.Header as="h5">
                        User Info
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                 <Form.Label htmlFor="firstName">First Name</Form.Label>
                                <Form.Control type="text" id="firstName" value={contact.firstName} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="lastName" className="form-label">Last Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="lastName" value={contact.lastName} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="age" className="form-label">Age</Form.Label>
                                <Form.Control type="number" className="form-control" id="age" value={contact.age} disabled />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default DetailContact