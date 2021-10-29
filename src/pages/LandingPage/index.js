import React from "react";
import { NavLink } from "react-router-dom";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import VeryClearSection from "./VeryClearSection";
import WhoweareSection from "./WhoweareSection";
import "./style.css";

function LandingPage() {
    return (
        <div>
            <nav class="notLoginNavbar navbar navbar-default navbar-static-top ">
                <div class="container">
                    <div class="navbar-header">
                        <button
                            type="button"
                            class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar"
                        >
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">
                            <img
                                src="https://snakerspanel.com/images/vVdoIXNHrbgYT46UgJtKFF77a2xy9LNgLOE6kbPk.png"
                                alt=""
                                title=""
                                style={{ maxHeight: "80px", maxWidth: "68px" }}
                            />
                        </a>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/" activeClassName="active">
                                    Sign in
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/terms-and-conditions"
                                >
                                    Terms
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="active"
                                    to="/register"
                                    class="singup"
                                >
                                    Sign up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <HeroSection />
            <AboutSection />
            <WhoweareSection />
            <VeryClearSection />
            <Footer />
        </div>
    );
}

export default LandingPage;
