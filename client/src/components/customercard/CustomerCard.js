import React from "react";
import "./CustomerCard.css"
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import "./CustomerCard.css"

function CustomerCard({CustomerRecord, handleChange, editable}) {

   
    return (
        <>
            <form className="formatForm">
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            className="formatInput"
                            label='Customer Name'
                            name="Name"
                            value={CustomerRecord.Name}
                            onChange={handleChange}
                            icon='user'
                            group
                            disabled={editable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Customer Name"
                        />
                        <MDBRow>
                            <MDBCol lg="6">
                                <MDBInput
                                    className="formatInput"
                                    label='Customer Address'
                                    name="Address"
                                    value={CustomerRecord.Address}
                                    onChange={handleChange}
                                    icon='address-book'
                                    group
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
                                    label='Customer City'
                                    name="City"
                                    value={CustomerRecord.City}
                                    onChange={handleChange}
                                    icon='city'
                                    group
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
                                    label='Customer State'
                                    name="State"
                                    value={CustomerRecord.State}
                                    onChange={handleChange}
                                    icon='flag-usa'
                                    group
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
                                    label='Customer Zip Code'
                                    name="Zip"
                                    value={CustomerRecord.Zip}
                                    onChange={handleChange}
                                    icon='plane'
                                    group
                                    type='text'
                                    validate
                                    error='wrong'
                                    success='right'
                                    placeHolder="Enter Zop Code"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput
                            className="formatInput"
                            label='Customer Email Address'
                            name="Email"
                            value={CustomerRecord.Email}
                            onChange={handleChange}
                            icon='envelope-open-text'
                            group
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Email Address"
                        />
                        <MDBInput
                            className="formatInput"
                            label='Customer Phone Number'
                            name="Phone_Num"
                            value={CustomerRecord.Phone_Num}
                            onChange={handleChange}
                            icon='phone'
                            group
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Phone Number"
                        />
                    </MDBCol>
                </MDBRow>
            </form>
        </>
    )
}

export default CustomerCard;