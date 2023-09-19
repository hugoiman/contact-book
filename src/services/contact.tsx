import axios from "axios";
import { CreateUpdateContactDto } from "../dto/contact";
import Swal from "sweetalert2";

const getContact = (callback: any, id: string) => {
    axios.get(`https://contact.herokuapp.com/contact/${id}`)
    .then((res) => {
        if (res.status != 200) {
            Swal.fire({
                icon: 'warning',
                title: 'Failed!',
                text: `${res.data.message}`,
                showConfirmButton: true,
                showCloseButton:true,
            })
        } else {
            callback(res.data.data);
        }
    })
    .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Something went wrong! error: ${err}`,
            showConfirmButton: true,
            showCloseButton:true,
        })
    })
}

const getContacts = (callback: any) => {
    axios.get("https://contact.herokuapp.com/contact")
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Something went wrong! error: ${err}`,
            showConfirmButton: true,
            showCloseButton:true,
        })
    })
}

const addContact = (contact: CreateUpdateContactDto, onSuccess:Function, onError:Function) => {
    axios.post(`https://contact.herokuapp.com/contact`, contact)
    .then(function (res) {
        if (res.status == 201) {
            Swal.fire({
                icon: 'success',
                title: 'Created!',
                showConfirmButton: true,
                showCloseButton:true,
            })
            onSuccess()
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Failed!',
                text: `Something went wrong!`,
                showConfirmButton: true,
                showCloseButton:true,
            })
            onError()
        }
    })
    .catch(function (err) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Something went wrong! error: ${err}`,
            showConfirmButton: true,
            showCloseButton:true,
        })
        onError()
    });
}

const updateContact = (id: string, contact: CreateUpdateContactDto, onSuccess:Function, onError:Function) => {
    axios.put(`https://contact.herokuapp.com/contact/${id}`, contact)
    .then(function (res) {
        if (res.status == 201) {
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                showConfirmButton: true,
                showCloseButton:true,
            })
            onSuccess()
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Failed!',
                text: `Something went wrong!`,
                showConfirmButton: true,
                showCloseButton:true,
            });
            onError();
        }
    })
    .catch(function (err) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Something went wrong! error: ${err}`,
            showConfirmButton: true,
            showCloseButton:true,
        })
        onError();
    });
}

const deleteContact = (id: string) => {
    axios.delete(`https://contact.herokuapp.com/contact/${id}`)
    .then(function (res) {
        if (res.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                showConfirmButton: true,
                showCloseButton:true,
            })
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Failed!',
                text: `Something went wrong!`,
                showConfirmButton: true,
                showCloseButton:true,
            })
        }
    })
    .catch(function (err) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Something went wrong! error: ${err}`,
            showConfirmButton: true,
            showCloseButton:true,
        })
    });
}

export {getContact, getContacts, addContact, updateContact, deleteContact};