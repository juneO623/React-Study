import "./App.css";
import {
  Route,
  Switch,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Router>
        <div>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </button>
        </div>
        <Switch>
          <Route path="/"></Route>

          <Route path="/about"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
