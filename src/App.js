import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <LandingPage />

            <Router >
              <Switch>
                <Route path="/signup" />
              </Switch>
            </Router>
        </div>
    );
}

export default App;
