import React, { useState, useEffect } from "react";
import "./Customer.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import ResultsList from "../resultslist/ResultsList"
// import axios from "axios";
import API from "../../utils/API"

function Customer() {

    let [result, setResult] = useState([])

    useEffect(() => {
        loadCustomers()
    }, [])

    function loadCustomers() {
        API.getCustomers()
            .then(response => {
                console.log(response);
                let customerRecords = [];
                for (let i = 0; i < response.data.length; i++) {
                    let customer = {
                        name: response.data[i].Name,
                        address: response.data[i].Address,
                        // phone: response.data[i].Phone_Num,
                        email: response.data[i].Email
                    }
                    customerRecords.push(customer)
                    console.log(customerRecords)
                }
                setResult( customerRecords );
            })
    }

    return (
        <>
            <ResultsList customerData = {result} />
        </>
    );
};

export default Customer;