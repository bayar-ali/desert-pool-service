import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { MDBRow, MDBCol } from 'mdbreact';
import CustomerCard from "../customercard/CustomerCard"
import "./AddCustomer.css";


function AddCustomer() {

    let [result, setResult] = useState([])
    const [formObject, setFormObject] = useState({})
    // useEffect(() => {
    //     loadCustomer()
    // }, [])
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

      function clearFields () {
        // formObject.Name="",
        // formObject.Address="",
        // formObject.Phone="",
        // formObject.Email=""
      }

    function addCustomer() {
        API.addCustomer({
            name: formObject.Name,
            address: formObject.Address,
            phone_num: formObject.Phone,
            email: formObject.Email
        })
            .then(response => clearFields())
            .catch(error => console.log(error));

    };
    return (
        <>
            <h1>Add Customer Page</h1>

            <MDBRow>

                <MDBCol lg="12">
                    <CustomerCard customerRecord={result} />
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default AddCustomer;