import React from "react";
import PoolImage2 from "../../assets/images/1.jpg";
import PoolImage3 from "../../assets/images/WadingPool.jpg";
import PoolImage4 from "../../assets/images/a.jpg";
import { Button } from "react-bootstrap";
import { MDBRow, MDBCol, MDBFooter } from "mdbreact";
import "./LandingPage.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

function LandingPage() {
  return (
    <>
      <MDBRow className="section1">
        <MDBCol md="2" className=""></MDBCol>
        <MDBCol md="8" className="">
          <p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="poolservice">
              <h1>Need weekly or seasonal service? Get a FREE Estimate Now!</h1>
            </p>
            <a href="#moreInfo" className="learn-more">
              <Button
                className="moreinfo"
                type="submit"
                onClick="infobutton"
              >
                More Info
              </Button>
            </a>
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" fluid="true" className="text-center formatPic">
          <p id="moreInfo"></p>
          <div
            data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            <img
              fluid
              src={PoolImage4}
              alt="Gazebo Pool"
              width="100%"
              height="100%"
            ></img>
          </div>
        </MDBCol>

        <MDBCol md="6" fluid="true" className="imageBKGR text-center" id="#infobutton">
          <br></br>
          <h2>Your Local pool professional</h2>
          <h4>We enjoy what we do so you can enjoy your pool!</h4>
          <br></br>
          <h6 className="H6FontFormat">
            Desert Pool Service is the premier Gilbert pool repair service
            company. We maintain reasonable prices and spend the necessary time
            making sure we get the job done the first time around. If you've
            been delaying much-needed repairs or service for your swimming pool,
            look no further than Desert Pool Service. As an established service
            and repair company in Gilbert, our goal is to provide you with
            quality products and services at affordable prices.
          </h6>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6" className="imageBKGR">
          <p id="services"></p>
          <h3>Chemicals</h3>
          <ul>
            <li>
              <h6>
                We use the highest professional grade chemicals available each
                week at every pool.
              </h6>
            </li>
            <li>
              <h6>
                You've heard the phrase "one size fits all" most likely, but
                unfortunately that's not always the case. That's especial true
                when it comes to keeping water balanced and the amount of
                chemical and time to make that happen. Your pool is a large
                investment, would you want a handyman to take care it that kind
                of knows what they're doing? Or do you want a professional that
                will be honest with how much it's going to cost, and take the
                time to care for that body of water, it's equipment, and keep
                your family safe?.
              </h6>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="6" className="text-center formatPic">
          <div
            fluid="true"
            data-aos="zoom-in-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            <img
              fluid="true"
              src={PoolImage3}
              alt="Wading Pool"
              width="100%"
              height="100%"
              padding-top="10"
            ></img>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="text-center formatPic">
          <div
            data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            <img
              fluid="true"
              src={PoolImage2}
              alt="Wading Pool"
              width="100%"
              height="100%"
              padding-top="10"
            ></img>
          </div>
        </MDBCol>
        <MDBCol md="6" className="imageBKGR">
          <ul>
            <h3>Weekly service includes</h3>

            <li>
              <h5>Brushing walls and steps</h5>
            </li>

            <li>
              <h5>Empty all baskets</h5>
            </li>

            <li>
              <h5>Balance chemical</h5>
            </li>

            <li>
              <h5>Skim debris from pool floor and surface</h5>
            </li>

            <li>
              <h5>Check equipment</h5>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>

      <MDBFooter className="footer">
        <MDBRow>
          <MDBCol lg="12" className="footer">
            <br></br>
            <br></br>
            <br></br>

            <h5 className="footer"> @copyright 2020. All rights Reserved</h5>
          </MDBCol>
        </MDBRow>
      </MDBFooter>
    </>
  );
}

export default LandingPage;
