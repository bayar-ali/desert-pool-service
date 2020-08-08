import React from "react";
import "./CustomerCard.css"
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
// import { MDBDatePicker } from 'mdbreact';
// import DatePicker from "react-bootstrap-date-picker";
// var DatePicker = require("react-bootstrap-date-picker");
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { SingleDatePicker } from 'react-dates';
// import Icon from '../icon/Icon';
import { Form } from 'react-bootstrap';

function CustomerCard({ CustomerRecord, handleChange, nonEditable }) {

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
                            disabled={nonEditable}
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
                            disabled={nonEditable}
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
                            disabled={nonEditable}
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
                            disabled={nonEditable}
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
                            disabled={nonEditable}
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
                            disabled={nonEditable}
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
                            disabled={nonEditable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Email Address"
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            className="formatInput"
                            label='Phone Number'
                            name="phone_num"
                            value={CustomerRecord.phone_num}
                            onChange={handleChange}
                            icon='phone'
                            group
                            disabled={nonEditable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Phone Number"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        {/* <MDBInput
                            className="formatInput"
                            label='Salt Pool'
                            name="salt_pool"
                            value={CustomerRecord.Salt_Pool}
                            onChange={handleChange}
                            icon='swimming-pool'
                            group
                            disabled={nonEditable}
                            type='dropdown'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Salt Pool - True or False"
                        /> */}
                        <select name="salt_pool" class="browser-default custom-select">
                            <option selected>Select True of False</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                            <p>Salt Pool</p>
                    </MDBCol>
                    <MDBCol>
                        {/* <MDBInput
                            className="formatInput"
                            label='Filter Type'
                            name="filter"
                            value={CustomerRecord.Filter}
                            onChange={handleChange}
                            icon='swimming-pool'
                            group
                            disabled={nonEditable}
                            type='text'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Enter Filter Type"
                        /> */}
                        <select name="salt_pool" class="browser-default custom-select">
                            <option selected>Select Filter Type</option>
                            <option 
                            value="cartridge"
                            onChange={handleChange}
                            disabled={nonEditable}
                            >Cartride</option>
                            <option value="DE" name="salt_pool" disabled={nonEditable}>DE</option>
                            <option value="Sand"  name="salt_pool" disabled={nonEditable}>Sand</option>
                        </select>
                            <p>Salt Pool</p>
                    </MDBCol>
                    <MDBCol>
                        {/* <MDBInput
                            className="formatInput"
                            label='Scheduled Date'
                            name="sheduled_date"
                            value={CustomerRecord.scheduled_date}
                            onChange={handleChange}
                            icon='calendar-alt'
                            group
                            disabled={nonEditable}
                            type='calendar'
                            validate
                            error='wrong'
                            success='right'
                            placeHolder="Select Date"
                        /> */}
                        <Form.Group controlId="dob">
                            <Form.Control
                                className="formatInput"
                                type="date"
                                name="next_date_of_service"
                                placeHolder="Next Service Date"
                                disabled={nonEditable}
                                onChange={handleChange}
                            />
                            <Form.Label>Select Next Service Date</Form.Label>
                        </Form.Group>
                    </MDBCol>
                </MDBRow>
            </form >
        </>
    )
}

export default CustomerCard;