import { useEffect, useState } from "react";
import { Card, Table, Button, ButtonGroup } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContactDto, CreateUpdateContactDto } from "../dto/contact";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import ModalEdit from "./ModalEdit";
import {deleteContact, getContacts, updateContact} from "../services/contact";
import Swal from "sweetalert2";

function ListContact() {
    const [contacts, setContacts] = useState([]);
    const [editContactData, setEditContactData] = useState({});
    const [showModal, setShowModal] = useState(false);
    
    // const contactss : ContactDto[] = [
    //     {id: "b3abd640-c92b-11e8-b02f-cbfa15db428b", firstName: "Josua", lastName: "Joni", age: 20, photo: "asd"},
    //     {id: "d7a65e50-5560-11ee-b9a3-ebe37265f8d9", firstName: "Yohana", lastName: "Cris", age: 22, photo: "asd"},
    //     {id: "d7a65e50-5560-11ee-b9a3-ebe37265f8d9", firstName: "Leo", lastName: "Martin", age: 21, photo: "asd"},
    //     {id: "d7a65e50-5560-11ee-b9a3-ebe37265f8d9", firstName: "Dias", lastName: "Salosa", age: 25, photo: "asd"}
    // ];
    // setContacts(contactss);

    useEffect(() => {
        getContacts((res: any) => {
            setContacts(res.data);
        });
    },[])

    const ActionButton = (rowData: ContactDto) => {
        return (
            <ButtonGroup>
                <Button variant="primary" href={`/view/${rowData.id}`}>View</Button >
                <Button variant="warning" onClick={() => {
                    setShowModal(true);
                    setEditContactData(rowData);
                }}>Edit</Button>
                <Button variant="danger" onClick={() => {
                    HandleDeleteContact(rowData)
                }}>Delete</Button>
            </ButtonGroup>
        );
    }

    const HandleDeleteContact = (rowData: ContactDto) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete '${rowData.firstName}'?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteContact(rowData.id)
                getContacts((res: any) => {
                    setContacts(res.data);
                });                
            } 
        })
    }

    return (
        <>
            <div className="col col-12 col-md-8">
                <Card>
                    <Card.Header as="h5">
                        Contact List
                    </Card.Header>
                    <Card.Body>
                        <Table striped id="contact-list">
                            <DataTable value={contacts} paginator rows={4} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ width: "" }}>
                                <Column field="firstName" header="First Name" style={{ width: '25%' }}></Column>
                                <Column field="lastName" header="Last Name" style={{ width: '25%' }}></Column>
                                <Column field="age" header="Age" style={{ width: '25%' }} />
                                <Column field="" header="" style={{ width: '25%' }} body={ActionButton} />
                            </DataTable>
                        </Table>
                    </Card.Body>
                </Card>
                <ModalEdit contact={editContactData} showModal={showModal} onClose={() => setShowModal(false)} onSave={(id: string, contact: CreateUpdateContactDto) => {
                    updateContact(id,contact, ()=> {
                        getContacts((res: any) => {
                            setContacts(res.data);
                        });
                        setShowModal(false);
                    }, ()=>{})
                }} />
            </div>
        </>
    )
}

export default ListContact