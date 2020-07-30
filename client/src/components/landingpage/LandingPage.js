import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PoolImage from "../../assets/images/gunite-spa-inground-pool.jpg"
import PoolImage2 from "../../assets/images/WaterfallPool.jpeg"
import PoolImage3 from "../../assets/images/LuxuryPool.jpeg"
function FirstSection() {
    return (

        <Container id="firstSection">
            <Row>
                <Col lg={6} className="text-center">
                    <img
                        fluid
                        src={PoolImage}
                        width="100%"
                        height="100%"
                    ></img>
                </Col>
                <Col lg={6} className="text-center">

                </Col>
            </Row>
            <Row>
                <Col lg={6} className="text-center">

                </Col>
                <Col lg={6} className="text-center">
                    <img
                        fluid
                        src={PoolImage2}
                        width="100%"
                        height="90%"
                    ></img>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className="text-center">
                    <img
                        fluid
                        src={PoolImage3}
                        width="100%"
                        height="86%"
                    ></img>
                </Col>
                <Col lg={6} className="text-center">

                </Col>
            </Row>
        </Container>

        
    )
};


export default FirstSection; 