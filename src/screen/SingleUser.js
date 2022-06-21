import React, { useEffect } from "react";
import Navbars from "../components/Navbars";
import { Container, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleUserDetails } from "../actions/generalActions";

function SingleUser() {
  const params = useParams();
  const { id: userId } = params;
  console.log(userId);
  const dispatch = useDispatch();
  const singleUserDetail = useSelector((state) => state.singleUsers);
  const { loading, error, users } = singleUserDetail;
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch(singleUserDetails(userId));
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, dispatch]);
  return (
    <div>
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
                  <tr>
                    <td>{users.data.id}</td>
                    <td>{users.data.first_name}</td>
                    <td>{users.data.last_name}</td>
                    <td>{users.data.email}</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </>
        )}
      </div>
    </div>
  );
}

export default SingleUser;
