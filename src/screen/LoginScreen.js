import React, { useState, useEffect } from "react";
import Navbars from "../components/Navbars";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../actions/generalActions";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(userInfo, "info");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div>
      <Navbars />

      <div className="form" onSubmit={submitHandler}>
        <form action="">
          <Container>
            <Row className="forms">
              <Col md={2}>Email</Col>
              <Col md={6}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="forms">
              <Col md={2}>password</Col>
              <Col md={6}>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <button>submit</button>
            </Row>
            {loading && (<h1>Loading...</h1>)}
            {error && (<h1>{error}</h1>)}
          </Container>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
