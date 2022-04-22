import "./App.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import shoes from "./data";
import Card from "./components/Card";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import axios from "axios";
import Cart from "./components/Cart";

export const inventoryContext = React.createContext();

function App() {
  const [data, setData] = useState(shoes);
  const [inventory, setInventory] = useState([10, 11, 12]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const test = async () => {
    try {
      const { data } = await axios.get(
        "https://codingapple1.github.io/shop/data2.json"
      );
      setData((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className=""></div>
            <inventoryContext.Provider value={inventory}>
              <div className="row">
                {data.map((shoe, idx) => {
                  return <Card shoes={shoe} index={idx} key={idx} />;
                })}
              </div>
            </inventoryContext.Provider>
            <button className="btn btn-primary" onClick={test}>
              더보기
            </button>
          </div>
        </Route>
        <Route path={`/detail/:id`}>
          <Detail
            shoes={shoes}
            inventory={inventory}
            setInventory={setInventory}
          />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주셈</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
