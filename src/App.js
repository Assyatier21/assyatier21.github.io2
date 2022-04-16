import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
