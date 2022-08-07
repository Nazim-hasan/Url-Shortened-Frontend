import React from "react";
import { Row, Col } from "react-bootstrap";
function Header() {
  return (
    <div>
      <div>
        <Row className="justify-content-lg-center">
          <Col>
            <h2 className="text-primary fw-bold mt-2 shadow p-3 mb-5 bg-body rounded text-center">
              Short URL
            </h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
