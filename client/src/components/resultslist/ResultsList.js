import React from "react";
// import { MDBDataTable } from 'mdbreact';
import "./ResultsList.css"
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBDataTable, MDBTableBody, MDBTableHead } from 'mdbreact';
const ResultsList = (props) => {
    const customerData = {
        columns: [
            {
                label: "Select",
                field: "select",
                sort: "disabled"
            },
            {
                label: [<i key="name" className="fa fa-swimmer mr-2 blue-text" aria-hidden="true"></i>, 'Name'],
                field: 'name',
                sort: 'asc'
            },
            {
                label: [<i key="addtess" className="fa fa-address-book mr-2 blue-text" aria-hidden="true"></i>, "Address"],
                field: 'address',
                sort: 'asc'
            },
            {
                label: [<i key="email" className="fa fa-envelope-open-text mr-2 blue-text" aria-hidden="true"></i>, 'Email'],
                field: 'email',
                sort: 'asc'
            }
            ,
            {
                label: [<i key="phone" className="fa fa-phone-volume mr-2 blue-text" aria-hidden="true"></i>, 'Phone Number'],
                field: 'phone',
                sort: 'asc'
            }
        ],
        rows: props.customerData
    };

    return (

        <MDBCard narrow>
            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                <div>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                        <i className="fas fa-times mt-0"></i>
                    </MDBBtn>
                </div>
                <a href="#" className="white-text mx-3 formatHeader">Desert Pool Service Customer Database</a>
                <div>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                        <i className="fa fa-info-circle mt-0"></i>
                    </MDBBtn>
                </div>
            </MDBCardHeader>
            <MDBCardBody cascade>
                {/* <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable> */}
                <MDBDataTable className="formatTable"
                    striped
                    bordered
                    responsive
                    small
                    entriesOptions={[10, 20, 30, 40, 50, 75, 100]}
                    data={customerData} />
            </MDBCardBody>
        </MDBCard>



        // <MDBDataTable className="formatTable"
        //     striped
        //     bordered
        //     responsive
        //     small
        //     entriesOptions={[10, 20, 30, 40, 50, 75, 100]}
        //     data={customerData}
        // />
    );
};

export default ResultsList;