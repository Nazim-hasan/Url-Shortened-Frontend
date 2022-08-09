import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [errorLogin, setErrorLogin] = useState("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://desolate-shelf-39003.herokuapp.com/api/register", data)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data === "registered") {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="d-flex justify-content-center w-50 mt-5">
      <Container className="mx-sm-5">
        <div className="mx-md-5 form-control ms-lg-1">
          <h4 className="fw-bold text-center fs-md-6">Please Register</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="d-flex justify-content-center my-3">
              <input
                {...register("name", { required: true })}
                className="form-control d-inline w-75"
                placeholder="Enter Name"
              />
              {errors.email && (
                <span className="text-danger">Please Name your email</span>
              )}
            </p>
            <p className="d-flex justify-content-center my-3">
              <input
                {...register("email", { required: true })}
                className="form-control d-inline w-75"
                placeholder="Enter Email"
              />
              {errors.email && (
                <span className="text-danger">Please Enter your email</span>
              )}
            </p>

            <p className="d-flex justify-content-center my-3">
              <input
                {...register("password", { required: true })}
                className="form-control d-inline w-75"
                placeholder="Enter Password"
              />
              {errors.password && (
                <span className="text-danger">Please Enter your password</span>
              )}
            </p>
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-success mb-3 mx-auto"
                value="Register"
              />
            </div>
            <p className="text-center ">
              Already Registered?{" "}
              <Link to={"/login"} className="text-decoration-none">
                Click Here
              </Link>
            </p>
            {/* <div className="d-flex justify-content-center mt-2"></div> */}
            <div className="d-flex justify-content-center mt-2">
              <p className="text-danger">{errorLogin}</p>
            </div>
          </form>
        </div>
      </Container>
    </Container>
  );
};

export default Register;
