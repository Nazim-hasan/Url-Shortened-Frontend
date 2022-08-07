import React from "react";
import { Container } from "react-bootstrap";
function Body() {
  return (
    <Container className="d-flex justify-content-center">
      <Container className="mx-5">
        <div className="mx-5 form-control">
          <h3 className="fw-bold text-center">Paste the URL to be shortened</h3>
          <input
            type="text"
            class="form-control"
            placeholder="Paste Here"
          ></input>
          <div className="d-flex justify-content-center mt-2">
            <button type="submit" class="btn btn-primary mb-3">
              Shorten URL
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Body;
