import "./App.css";

import { Button, Modal, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { CardBody } from "reactstrap";
import Login from "./Login";

import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  // States for registration
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the firstname change
  const handlefirstname = (e) => {
    setFirstname(e.target.value);
    setSubmitted(false);
  };

  const handlelastname = (e) => {
    setLastname(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        classname='success'
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>
          User {firstname} {lastname} successfully registered!!
        </h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        classname='error'
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className='form'>
      <div>
        <h1>User Registration</h1>
      </div>
      {/* Calling to the methods */}
      <div classname='messages'>
        {errorMessage()}
        {successMessage()}
      </div>
      <Card style={{ width: "45%", margin: "25px" }}>
        <CardBody>
          {/* Labels and inputs for form data */}
          <label classname='label'>firstname</label>
          <input
            onChange={handlefirstname}
            classname='input'
            value={firstname}
            type='text'
          />
          <br></br>
          <label classname='label'>lastname</label>
          <input
            onChange={handlelastname}
            classname='input'
            value={lastname}
            type='text'
          />
          <br></br>
          <label classname='label'>Email</label>
          <input
            onChange={handleEmail}
            classname='input'
            value={email}
            type='email'
          />
          <br></br>
          <label classname='label'>Password</label>
          <input
            onChange={handlePassword}
            classname='input'
            value={password}
            type='password'
          />
          <br></br>
          <Button onClick={handleSubmit} classname='btn' type='submit'>
            Submit
          </Button>
        </CardBody>
      </Card>
      <Link to='/Login'>Login</Link>
    </div>
  );
}
