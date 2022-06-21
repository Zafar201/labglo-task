import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Navbars from "../components/Navbars";
import { useNavigate } from "react-router-dom";
import { listUser } from "../actions/generalActions";

function HomeScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.users);
  const { loading, error, users } = userDetails;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(listUser());
  }, [userInfo]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <Navbars />
          <Container mt={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {users.data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td style={{cursor:"pointer"}} onClick={() => navigate(`/single/${user.id}`)}>edit</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </div>
  );
}

export default HomeScreen;
