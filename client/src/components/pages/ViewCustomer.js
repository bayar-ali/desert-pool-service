import React, { useState, useEffect } from "react";
import "./ViewCustomer.css";
import "../../utils/API";
import CustomerCard from "../customercard/CustomerCard";
// import GoogleApiWrapper from "../mapApi/Maps";
import { MDBRow, MDBCol } from 'mdbreact';
import API from "../../utils/API";

function ViewCustomer(props) {
    console.log(props.match.params.id)

    let [result, setResult] = useState([])

    useEffect(() => {
        loadCustomer()
    }, [])

    function loadCustomer() {
        API.getCustomer(props.match.params.id)
            .then(response => {
                console.log("Customer Info ", response);
                let customerRecord = [];
                for (let i = 0; i < response.data.length; i++) {
                    let customer = {
                        // select: (<button name="Submit" onClick= {() => handleSubmit(response.data[i]._id)}>Submit</button>),
                        name: response.data[i].Name,
                        address: response.data[i].Address,
                        phone: response.data[i].Phone_Num,
                        email: response.data[i].Email
                    }
                    customerRecord.push(customer)
                    // console.log("This is the customer record ", customerRecord)

                }
                setResult(customerRecord);
            })
    }
    return (
        <>
            <h1>View Customer Page</h1>

            <MDBRow>
                <MDBCol lg="4">
                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: 500 }}>
                        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                            style={{ border: 0 }} allowFullScreen title="Customer Map"></iframe>
                    </div>
                </MDBCol>
                <MDBCol lg="8">
                    <CustomerCard customerRecord = {result} />
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default ViewCustomer;