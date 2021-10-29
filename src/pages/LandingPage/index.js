import React from "react";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

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
                            <li class="active">
                                <a href="/">Sign in</a>
                            </li>
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="/page/terms-and-conditions">Terms</a>
                            </li>
                            <li>
                                <a href="/register" class="singup">
                                    Sign up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <HeroSection />
            <AboutSection />
        </div>
    );
}

export default LandingPage;
