import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://desolate-shelf-39003.herokuapp.com/api/login", data)
      .then((resp) => {
        if (resp.data === "admin") {
          history.push("/admin");
          sessionStorage.setItem("admin", "admin");
          alert("Logged in as Admin");
          return;
        }
        if (resp.data === "No user found") {
          setErrorLogin("Wrong Username or Password");
          return;
        }
        var token = resp.data?.token;
        console.log(resp.data);
        var user = { clientEmail: data.email };
        user.access_token = token.token;
        sessionStorage.setItem("clientName", resp.data?.name);

        sessionStorage.setItem("client", JSON.stringify(user));
        history.push("/");
        alert("Logged in");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createAccount = (e) => {
    console.log("create");
  };
  return (
    <Container className="d-flex justify-content-center w-50 mt-5">
      <Container className="mx-sm-5">
        <div className="mx-md-5 form-control ms-lg-1">
          <h4 className="fw-bold text-center fs-md-6">Please Login</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                value="Login"
              />
            </div>
            <p className="text-center ">
              Create account?{" "}
              <Link to={"/register"} className="text-decoration-none">
                Click Here
              </Link>
            </p>
            <p className="text-center">
              <Link to={"/"} className="text-decoration-none">
                Home
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

export default Login;
