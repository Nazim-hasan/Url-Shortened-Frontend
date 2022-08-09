import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Header = () => {
  return (
    <div style={{ height: "80px" }}>
      <Container className="ps-1 pe-1">
        <Row className="justify-content-lg-center">
          <Col>
            <h2 className="text-primary fw-bold mt-2 shadow py-3 mb-5 bg-body rounded text-center">
              Short URL
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
