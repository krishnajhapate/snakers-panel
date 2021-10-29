import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={LandingPage} />

                    <Route path="/signup" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
