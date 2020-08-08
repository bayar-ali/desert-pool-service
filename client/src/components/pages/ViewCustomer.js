import React, { useState, useEffect } from "react";
import "./ViewCustomer.css";
import "../../utils/API";
import CustomerCard from "../customercard/CustomerCard";
// import GoogleApiWrapper from "../mapApi/Maps";
import { MDBRow, MDBCol } from 'mdbreact';
import API from "../../utils/API";

function ViewCustomer(props) {
    console.log(props.match.params.id)

    let [result, setResult] = useState({})
    let [nonEditable, setNonEditable] = useState(true)
    // let [customerData, setCustomerData] = useState({})

    useEffect(() => {
        loadCustomer()
    }, [])

    const handleChange = (event) => {
        // event.preventDefault();
        const { name, value } = event.target;
        setResult({ ...result, [name]: value });
    }

    const handlePush = () => {
        setNonEditable(false);
    }

    const handleSave = () => {
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
                next_date_of_service: result.next_date_of_service
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
                // let customerRecord = [];
                // for (let i = 0; i < response.data.length; i++) {
                // let customer = {
                //     // select: (<button name="Submit" onClick= {() => handleSubmit(response.data[i]._id)}>Submit</button>),
                //     name: response.data.Name,
                //     address: response.data.Address,
                //     phone: response.data.phone_num,
                //     email: response.data.Email
                // }
                // customerRecord.push(customer)
                // console.log("This is the customer record ", customerRecord)

                setResult({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    street: response.data.address.street,
                    city: response.data.address.city,
                    state: response.data.address.state,
                    zipcode: response.data.address.zipcode,
                    phone_num: response.data.phone_num,
                    email: response.data.email,
                    salt_pool: response.data.workOrders.salt_pool,
                    filter: response.data.workOrders.filter
                });
                console.log(response.data);
                // setCustomerData(response.data);

            })
    }
    return (
        <>
            <h1>View Customer</h1>

            <MDBRow>
                <MDBCol lg="4">
                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: 500 }}>
                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                            style={{ border: 0 }} allowFullScreen title="Customer Map"></iframe>
                    </div>
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
                </MDBCol>

            </MDBRow>
            <MDBRow>

                <MDBCol>

                </MDBCol>
            </MDBRow>
        </>
    )
}

export default ViewCustomer;