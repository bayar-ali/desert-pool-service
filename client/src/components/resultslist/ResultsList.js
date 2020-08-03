import React from "react";
import { MDBDataTable } from 'mdbreact';
import "./ResultsList.css"

const ResultsList = (props) => {
    const customerData = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc'
            },
            {
                label: "Address",
                field: 'address',
                sort: 'asc'
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc'
            }
            // ,
            // {
            //     label: 'Phone Number',
            //     field: 'phone',
            //     sort: 'asc'
            // }
        ],
        rows: props.customerData
    };

    return (
        <MDBDataTable className="formatTable"
            striped
            bordered
            responsive
            small
            entriesOptions={[10, 20, 30, 40, 50, 75, 100]}
            data={customerData}
        />
    );
};

export default ResultsList;