import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <script
          type="text/javascript"
          src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"
        />
      </Helmet>
    </Router>
  );
}

export default App;
