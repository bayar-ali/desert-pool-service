import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import PoolImage from "../../assets/images/gunite-spa-inground-pool.jpg";
import PoolImage2 from "../../assets/images/GazeboPool.jpg";
import PoolImage3 from "../../assets/images/WadingPool.jpg";
import { Row, Col } from 'mdbreact';
import "./LandingPage.css";

function LandingPage() {
    return (

        <Container id="firstSection">
            <Row>
                <Col lg={6} className="text-center">
                    <img
                        fluid="true"
                        src={PoolImage}
                        alt="Granite Spa Inground Pool"
                        width="100%"
                        height="100%"
                    ></img>
                </Col>
                <Col lg={6} className="text-center">
                    <br></br>
                    <h1>Your Local pool professional</h1>
                    <h4>We enjoy what we do so you can enjoy your pool</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>

                    <h3>Chemicals</h3>
                    <ul>
                        <li>We use the highest professional grade chemicals available each week at every pool.</li>

                        <li>Check out our home page, or give us call for more details.</li>
                    </ul>

                </Col>
                <Col lg={6} className="text-center">
                    <img
                        fluid
                        src={PoolImage2}
                        alt="Gazebo Pool"
                        width="100%"
                        height="100%"
                    ></img>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className="text-center">
                    <img
                        fluid
                        src={PoolImage3}
                        alt="Wading Pool"
                        width="100%"
                        height="100%"
                    ></img>
                </Col>
                <Col lg={6}>
                    <ul>
                        <h3>Weekly service includes</h3>

                        <li>Brushing walls and steps</li>

                        <li>Empty all baskets</li>

                        <li>Balance chemical</li>

                        <li>Skim debris from pool floor and surface</li>

                        <li>Check equipment</li>
                    </ul>
                </Col>
            </Row>
        </Container>


    )
};


export default LandingPage; 