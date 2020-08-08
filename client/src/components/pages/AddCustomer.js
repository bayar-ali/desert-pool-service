import React, { useState } from "react";
import API from "../../utils/API";
import { MDBRow, MDBCol } from 'mdbreact';
import CustomerCard from "../customercard/CustomerCard"
import "./AddCustomer.css";


function AddCustomer() {

    let [result, setResult] = useState(
        {
            firstName: "",
            lastName: "", city: "",
            state: "",
            zip: "",
            phone_num: "",
            email: ""
        })
    // const [formObject, setFormObject] = useState({})
    // useEffect(() => {
    //     loadCustomer()
    // }, [])
    function handleInputChange(event) {
        const { name, value } = event.target;
        setResult({ ...result, [name]: value })
    };

    //   const handlePush = () => {
    //     setEditable(false);
    // }
    function clearFields() {
        // result.firstName="",
        // result.lastName="",
        // result.street="",
        // result.city="",
        // result.state="",
        // result.zipcode="",
        // result.phone_num="",
        // result.email=""
    };

    function handleAdd() {
        API.addCustomer({
            firstName: result.firstName,
            lastName: result.lastName,
            address: {
                street: result.street,
                city: result.city,
                state: result.state,
                zipcode: result.zipcode
            },
            phone_num: result.phone_num,
            email: result.email
        })
            .then(response => {
                clearFields();
                alert("Customer added.");
            })
            .catch(error => console.log(error))
    };

    // function addCustomer() {
    //     API.addCustomer({
    //         firstName: result.firstName,
    //         lastName: result.lastName,
    //         address: {
    //             street: result.street,
    //             city: result.city,
    //             state: result.state,
    //             zip: result.zip
    //         },
    //         phone_num: result.phone,
    //         email: result.email
    //     })
    //         .then(response => clearFields())
    //         .catch(error => console.log(error));
    //     // setResult( customerRecord );
    // };

    return (
        <>
            <h1>Add Customer</h1>

            <MDBRow>

                <MDBCol lg="12">
                    <CustomerCard CustomerRecord={result} handleChange={handleInputChange} nonEditable={false} />}
                </MDBCol>
            </MDBRow>
            <MDBRow>

                <MDBCol lg="12">
                    <button
                        className="formatButton"
                        onClick={handleAdd}
                    >Save</button>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default AddCustomer;