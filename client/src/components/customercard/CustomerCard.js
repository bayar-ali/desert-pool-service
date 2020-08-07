import React from "react";
import "./CustomerCard.css"
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import "./CustomerCard.css"

function CustomerCard({ CustomerRecord, handleChange, editable }) {

console.log("CustomerRecord on CustomerCard : ", CustomerRecord)
    return (
        <>
            <form className="formatForm">
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            className="formatInput"
                            label='First Name'
                            name="firstName"
                            value={CustomerRecord.firstName}
                            onChange={handleChange}
                            icon='user'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Customer First Name"
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            className="formatInput"
                            label='Last Name'
                            name="lastName"
                            value={CustomerRecord.lastName}
                            onChange={handleChange}
                            icon='user'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Customer Last Name"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol lg="6">
                        <MDBInput
                            className="formatInput"
                            label='Street Address'
                            name="street"
                            value={CustomerRecord.street}
                            onChange={handleChange}
                            icon='address-book'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Customer Address"
                        />
                    </MDBCol>
                    <MDBCol lg="3">
                        <MDBInput
                            className="formatInput"
                            label='City'
                            name="city"
                            value={CustomerRecord.city}
                            onChange={handleChange}
                            icon='city'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter City"
                        />
                    </MDBCol>
                    <MDBCol lg="1">
                        <MDBInput
                            className="formatInput"
                            label='State'
                            name="state"
                            value={CustomerRecord.state}
                            onChange={handleChange}
                            icon='flag-usa'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="State"
                        />
                    </MDBCol>
                    <MDBCol lg="2">
                        <MDBInput
                            className="formatInput"
                            label='Zip Code'
                            name="zipcode"
                            value={CustomerRecord.zipcode}
                            onChange={handleChange}
                            icon='plane'
                            group
                            disabled={editable}
                            type='number'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Zip Code"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            className="formatInput"
                            label='Email Address'
                            name="email"
                            value={CustomerRecord.email}
                            onChange={handleChange}
                            icon='envelope-open-text'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Email Address"
                        />
                        <MDBInput
                            className="formatInput"
                            label='Phone Number'
                            name="phone_num"
                            value={CustomerRecord.phone_num}
                            onChange={handleChange}
                            icon='phone'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Phone Number"
                        />
                    </MDBCol>
                </MDBRow>
            </form >
        </>
    )
}

export default CustomerCard;