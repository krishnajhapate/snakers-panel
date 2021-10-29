import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/service" component={ServicePage} />
                    <Route
                        path="/terms-and-conditions"
                        component={TermsAndConditionPage}
                    />
                    <Route path="/register" component={RegisterPage} />
                    <Route exact path="/" component={LandingPage} />

                    <Route path="/signup" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
