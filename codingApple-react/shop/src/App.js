import "./App.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React, { useState } from "react";
import shoes from "./data";
import Card from "./Card";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="Jumbotron">
            <h1>20% Season Off</h1>
            <p style={{ marginBottom: "50px" }}>
              This is asimple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <button className="learnMore_button">Learn more</button>
          </div>
          <div className="container_main">
            <div className="row">
              {shoes.map((shoe, i) => {
                return <Card shoes={shoes[i]} index={i} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path={`/detail/:id`}>
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주셈</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
