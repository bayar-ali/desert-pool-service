import React, { useState, useEffect } from "react";
import "./ViewCustomer.css";
import "../../utils/API";
import CustomerCard from "../customercard/CustomerCard";
import { MDBRow, MDBCol } from 'mdbreact';
import API from "../../utils/API";
import Card from 'react-bootstrap/Card';
import GoogleApiWrapper from "../mapApi/Maps";
import moment from "moment";


function ViewCustomer(props) {
    console.log(props.match.params.id)

    let [result, setResult] = useState({})
    let [nonEditable, setNonEditable] = useState(true)

    useEffect(() => {
        loadCustomer()
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setResult({ ...result, [name]: value });
    }

    const handlePush = () => {
        setNonEditable(false);
    }

    const handleDelete = () => {
        API.deleteCustomer(props.match.params.id)
            .then(response => {
                alert("Customer Deleted!")
                setResult({
                    firstName: "",
                    lastName: "",
                    street: "",
                    city: "",
                    state: "",
                    zipcode: "",
                    phone_num: "",
                    email: "",
                    salt_pool: "",
                    filter: "",
                    next_date_of_service: ""
                });
            })
    }

    const handleSave = () => {
        console.log("Filter ", result.filter)
        console.log("Pool ", result.salt_pool)
        API.updateCustomer(props.match.params.id, {
            firstName: result.firstName,
            lastName: result.lastName,
            address: {
                street: result.street,
                city: result.city,
                state: result.state,
                zipcode: result.zipcode
            },
            phone_num: result.phone_num,
            email: result.email,
            workOrders: {
                salt_pool: result.salt_pool,
                filter: result.filter,
                next_date_of_service: moment(result.next_date_of_service).toISOString()
            }
        })
            .then(response => {
                setNonEditable(true);
                alert("Customer data updated.");
            })
            .catch(error => console.log(error))
    }

    function loadCustomer() {
        API.getCustomer(props.match.params.id)
            .then(response => {
                console.log("Get Customer Info ", response);
                const lastIndex = response.data.workOrders.length - 1;
                setResult({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    street: response.data.address.street,
                    city: response.data.address.city,
                    state: response.data.address.state,
                    zipcode: response.data.address.zipcode,
                    phone_num: response.data.phone_num,
                    email: response.data.email,
                    salt_pool: response.data.workOrders[lastIndex].salt_pool,
                    filter: response.data.workOrders[lastIndex].filter,
                    next_date_of_service: response.data.workOrders[lastIndex].next_date_of_service,
                    coords: response.data.coords
                });
                console.log(response.data);
            })
    }
    return (
        <>
            <h1>View Customer</h1>

            <MDBRow>
                <MDBCol lg="4" responsive="true">
                    <Card className="formatCard card-cascade narrower">
                        <Card.Title className="formatTitle view view-cascade gradient-card-header blue-gradient">
                            <h2 className="mb-0">Regular map</h2>
                        </Card.Title>
                        <Card.Body className="card-body-cascade text-center">
                            <GoogleApiWrapper customer={result} id="map-container-google-8" className="z-depth-1-half map-container-5" style={{ height: 500 }}>
                            </GoogleApiWrapper>
                        </Card.Body>
                    </Card>
                </MDBCol>
                <MDBCol lg="8">
                    <CustomerCard CustomerRecord={result} handleChange={handleChange} nonEditable={nonEditable} />
                    {nonEditable ? <button
                        className="formatButton"
                        onClick={handlePush}
                    >Edit</button> :
                        <button
                            className="formatButton"
                            onClick={handleSave}
                        >Save</button>}
                    <button
                        className="formatButton"
                        onClick={handleDelete}
                    >Delete Customer</button>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default ViewCustomer;