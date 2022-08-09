import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const DashboardHome = () => {
  const [waitingTime, setWaitingTime] = useState(0);
  const [Time, setTime] = useState(0);
  const [hits, setHits] = useState(0);
  const history = useHistory();

  const [spammingLimit, setSpammingLimit] = useState(0);
  const logout = () => {
    sessionStorage.removeItem("admin");
    history.push("/login");
  };
  const loadData = () => {
    axios
      .get("https://desolate-shelf-39003.herokuapp.com/api/spammingLimit")
      .then((res) => {
        setSpammingLimit(res.data);
      });

    axios
      .get("https://desolate-shelf-39003.herokuapp.com/api/waitingTime")
      .then((res) => {
        setWaitingTime(res.data);
      });

    // setErrorLogin(response);
  };
  const modifyWaitingTime = (e) => {
    setTime(e.target.value);
    var obj = { time: Time };
    console.log(obj);
    e.preventDefault();
    axios
      .post("https://desolate-shelf-39003.herokuapp.com/api/waitingTime", obj)
      .then((resp) => {
        console.log(resp.data);
        setWaitingTime(Time);
        alert("Updated waiting time for blocked user");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const modifySpammingTime = (e) => {
    setHits(e.target.value);
    var obj = { limit: hits };
    console.log(obj);
    e.preventDefault();
    axios
      .post("https://desolate-shelf-39003.herokuapp.com/api/spammingLimit", obj)
      .then((resp) => {
        console.log(resp.data);
        setSpammingLimit(hits);
        alert("Updated spamming limit for blocked user");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    //passing getData method to the lifecycle method
    loadData();
  }, [waitingTime, spammingLimit, setTime, setHits]);
  return (
    <Container className="mt-3">
      <div>
        <h4>Admin Dashboard</h4>
        <div className="mt-3 me-2">
          <div>
            <small>Current waiting Time : {waitingTime} Minutes</small>
            <div className="d-inline ms-3">
              {waitingTime > 0 ? (
                <input
                  type="number"
                  defaultValue={waitingTime}
                  min="0"
                  max="30"
                  className="d-inline mx-2"
                  onInput={(e) => setTime(e.target.value)}
                />
              ) : (
                ""
              )}
              <input
                type="submit"
                className="btn btn-danger btn-sm"
                value="Modify waiting time"
                onClick={modifyWaitingTime}
              />
            </div>
          </div>
          <div className="mt-4">
            <small>Spamming Limit : {spammingLimit} times</small>
            <div className="d-inline ms-3">
              {spammingLimit > 0 ? (
                <input
                  type="number"
                  defaultValue={spammingLimit}
                  min="0"
                  max="30"
                  className="d-inline mx-2"
                  onInput={(e) => setHits(e.target.value)}
                />
              ) : (
                ""
              )}

              <input
                type="submit"
                className="btn btn-secondary btn-sm"
                value="modify waiting time"
                onClick={modifySpammingTime}
              />
            </div>
          </div>
        </div>
      </div>
      <Button className="btn btn-warning btn-sm mt-3" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
};

export default DashboardHome;
