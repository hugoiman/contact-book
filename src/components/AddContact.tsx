import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap"
import { addContact } from "../services/contact";

function AddContact() {
    const [form, setForm] = useState({
        firstName: '', 
        lastName: '',
        age: 0,
        photo: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submitButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addContact(form, ()=> {
            resetButton()
        }, ()=> {});
    }

    const resetButton = () => {
        setForm({
            firstName: '', 
            lastName: '',
            age: 0,
            photo: '',
        });
    }
    return (
        <>
            <div className="col col-12 col-md-4">
                <Card>
                    <Card.Header as="h5">
                        Add New Contact
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="firstName">First Name</Form.Label>
                                <Form.Control type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="lastName" className="form-label">Last Name</Form.Label>
                                <Form.Control type="text" className="form-control" name="lastName" value={form.lastName} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="age" className="form-label">Age</Form.Label>
                                <Form.Control type="number" className="form-control" name="age" value={form.age} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="photo" className="form-label">Link Photo</Form.Label>
                                <Form.Control type="text" className="form-control" name="photo" value={form.photo} onChange={handleChange} />
                            </Form.Group>
                            <Button variant="primary" onClick={submitButton}>Save</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default AddContact