import "./App.css";
import { Button, Modal, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { CardBody } from "reactstrap";
import Login from "./Login";
import Register from "./Register";
import { Switch } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
export default function App() {
  // States for registration

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <nav>
        <Link to='/Register'>Register</Link>
      </nav>
    </div>
  );
};
