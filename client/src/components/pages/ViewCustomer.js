import React from "react";
import "./ViewCustomer.css";
// import GoogleApiWrapper from "../mapApi/Maps";
// import { MDBRow, MDBCol } from 'mdbreact';

function ViewCustomer(props) {
    console.log(props.match.params.id)
    return (
        <>
            <h1>View Customer Page</h1>
          
            <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: 500 }}>
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    style={{ border:0 }} allowfullscreen title="Customer Map"></iframe>
            </div>

           

        </>
    )
}

export default ViewCustomer;