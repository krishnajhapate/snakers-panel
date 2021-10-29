import React, { Fragment } from "react";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import VeryClearSection from "./VeryClearSection";
import WhoweareSection from "./WhoweareSection";
import "./style.css";
import HeaderLanding from "../../components/HeaderLanding";

function LandingPage() {
    return (
        <Fragment>
            <HeaderLanding />
            <HeroSection />
            <AboutSection />
            <WhoweareSection />
            <VeryClearSection />
            <Footer />
        </Fragment>
    );
}

export default LandingPage;
