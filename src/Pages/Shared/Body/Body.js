import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
const Body = () => {
  let [url, setUrl] = useState("");
  const [ip, setIP] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, SetUsername] = useState(0);
  const history = useHistory();

  // let [anonymousCounter, setAnonymousCounter] = useState(1);
  const [count, setCount] = useState(0);
  var pageView = sessionStorage.getItem("pageView");

  const [isLogin, setIsLogin] = useState(false);
  // const [needLogin, setNeedLogin] = useState(false);
  const [email, setEmail] = useState("");

  const isLoginComplete = () => {
    if (userEmail === null) {
      return false;
    }
    if (userEmail !== null) {
      return true;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const hitCount = () => {
    if (pageView == null) {
      // Initialize page views count
      pageView = 1;
    } else {
      // Increment count
      pageView = Number(pageView) + 1;
    }
    // Update session storage
    sessionStorage.setItem("pageView", pageView);

    setCount(pageView);
  };
  const onSubmit = (data) => {
    console.log(data);
    data.clientIP = ip;

    data.clientEmail = userEmail;
    if (data.clientEmail === undefined) {
      hitCount();
    }
    // if(isLogin  )
    if (pageView > 5 && !isLogin) {
      // setNeedLogin(true);
      console.log("need login");
      return;
    }
    axios
      .post("https://desolate-shelf-39003.herokuapp.com/api/short", data)
      .then((resp) => {
        console.log(resp);

        var result = resp?.data;

        setUrl(result);

        hitCount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org?format=json");
    console.log(res);
    setIP(res.data.ip);
  };
  useEffect(() => {
    //passing getData method to the lifecycle method
    setUserEmail(JSON.parse(sessionStorage.getItem("client"))?.clientEmail);

    isLoginComplete();

    if (JSON.parse(sessionStorage.getItem("client"))?.clientEmail) {
      setIsLogin(true);
    }

    getData();

    SetUsername(sessionStorage.getItem("clientName"));
  }, [userEmail, username]);
  const logout = () => {
    sessionStorage.removeItem("client");
    sessionStorage.removeItem("clientName");
    history.push("login");
    alert("Logged out");
  };
  return (
    <div>
      <Container className="text-end mb-3">
        {username ? (
          <div>
            <p className="text-end d-inline me-3">Welcome, {username}</p>
            <Button className="btn btn-warning" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          ""
        )}
      </Container>
      <Container className="d-flex justify-content-center">
        <Container className="mx-sm-5">
          <div className="mx-md-5 form-control ms-lg-1 ">
            <div className="d-flex">
              <div className="">
                <h4 className="fw-bold text-center fs-md-6 d-inline">
                  Paste the URL to be shortened
                </h4>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("mainUrl", { required: true })}
                className="form-control"
              />
              {errors.mainUrl && (
                <span className="text-danger">Please paste a URL First</span>
              )}
              <div className="d-flex justify-content-center mt-2">
                {pageView > 4 && !isLogin ? (
                  <Link to="/login">Please Login to use more</Link>
                ) : (
                  <input type="submit" className="btn btn-primary mb-3" />
                )}
              </div>
            </form>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Body;
