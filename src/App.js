import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={LandingPage} />
                    <Route path="/service" component={ServicePage} />
                    <Route path="/" component={LandingPage} />
                    <Route path="/" component={LandingPage} />

                    <Route path="/signup" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
