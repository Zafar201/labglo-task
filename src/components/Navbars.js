import React from 'react'
import { Navbar ,NavDropdown,Nav,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/generalActions';
import {
  Link,
} from 'react-router-dom';

function Navbars() {
  const userSignin =useSelector(state=>state.userSignin)
    const {loading,error,userInfo}= userSignin
    const dispatch = useDispatch()

    const signoutHandler=()=>{
      dispatch(signout())
    }
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
  <Link to='/login'> <Navbar.Brand href="#home">Home</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to='/login'>  <Nav.Link href="#home">Login</Nav.Link></Link>
        {/* <Nav.Link href="#link">Link</Nav.Link> */}
      </Nav>
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {userInfo &&(
              <button onClick={signoutHandler}>sign out</button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbars