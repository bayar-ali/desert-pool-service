import React from "react";
import "./CustomerCard.css"
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import "./CustomerCard.css"

function CustomerCard(props) {
    return (
        <>
            <form className="formatForm">
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            className="formatInput"
                            label='Customer Name'
                            name="name"
                            value={props.name}
                            // onChange={this.handleChange}
                            icon='user'
                            group
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
                                    name="address"
                                    value={props.address}
                                    // onChange={this.handleChange}
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
                                    name="address"
                                    value={props.city}
                                    // onChange={this.handleChange}
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
                                    name="state"
                                    value={props.city}
                                    // onChange={this.handleChange}
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
                                    name="zipCode"
                                    value={props.zipCode}
                                    // onChange={this.handleChange}
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
                            name="address"
                            value={props.email}
                            // onChange={this.handleChange}
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
                            name="address"
                            value={props.phone}
                            // onChange={this.handleChange}
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