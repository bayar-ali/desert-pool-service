import React from "react";
import "./ViewCustomer.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import GoogleApiWrapper from "../mapApi/Maps";

function ViewCustomer() {
    return (
        <>
            <h1>View Customer Page</h1>
          
            <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: 500 }}>
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    style={{ border:0 }} allowfullscreen></iframe>
            </div>

           

        </>
    )
}

export default ViewCustomer;