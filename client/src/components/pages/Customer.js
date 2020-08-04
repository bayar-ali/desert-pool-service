import React, { useState, useEffect } from "react";
import "./Customer.css";
import ResultsList from "../resultslist/ResultsList"
import API from "../../utils/API"
import Checkbox from '@material-ui/core/Checkbox';

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
                        select: (<Checkbox id={response.data[i]._id}/>),
                        name: response.data[i].Name,
                        address: response.data[i].Address,
                        phone: response.data[i].Phone_Num,
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