import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBContainer, MDBJumbotron } from 'mdbreact';
import "./NoMatch.css"

function NoMatch() {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol lg="12" className="colFormat">
        <MDBJumbotron >

          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
              </span>
          </h1>

        </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default NoMatch;