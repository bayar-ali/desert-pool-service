import React from "react";
import "./CustomerCard.css"
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { Form } from 'react-bootstrap';
import moment from "moment";

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
                        <select name="salt_pool"
                            className="browser-default custom-select"
                            value={CustomerRecord.salt_pool}
                            onChange={handleChange}
                            disabled={nonEditable}
                            default=""
                        >
                            <option value="">Select True of False</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                        <p>Salt Pool</p>
                    </MDBCol>
                    <MDBCol>
                        <select
                            name="filter"
                            className="browser-default custom-select"
                            value={CustomerRecord.filter}
                            onChange={handleChange}
                            disabled={nonEditable}
                            default=""
                            >
                            <option value="">Select Filter Type</option>
                            <option value="cartridge">Cartridge</option>
                            <option value="DE">DE</option>
                            <option value="Sand">Sand</option>
                        </select>
                        <p>Filter Type</p>
                    </MDBCol>
                    <MDBCol>
                        <Form.Group controlId="next_date_of_service">
                            <Form.Control
                                className="formatInput"
                                type="date"
                                // value= {new Date()}
                                value={moment(CustomerRecord.next_date_of_service).format("YYYY-MM-DD")}
                                onChange={handleChange}
                                name="next_date_of_service"
                                placeHolder="Next Service Date"
                                disabled={nonEditable}
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