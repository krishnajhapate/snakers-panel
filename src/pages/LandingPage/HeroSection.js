import React from "react";

function HeroSection() {
    return (
        <div>
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 headerCaption">
                            <h1>
                                ♛ SnakersPanel <br /> #1 social media marketing
                                panel for Smm Services
                            </h1>
                            <ul class="headerListing">
                                <li>
                                    world cheapest and best social media
                                    resellers panel /{" "}
                                </li>
                                <li>
                                    cheapest and best panel world wide we
                                    provide all social media servise at cheap
                                    price
                                </li>
                                <li>
                                    Perfect for Resellers, Agencies &amp; PR`s
                                </li>
                                <li>450+ Services and Auto options</li>
                                <li>
                                    Daily Updates - 99.7% Uptime Over 3 Years!
                                </li>
                                <li>
                                    Full API Support for Panel Owners/ worlds
                                    leading panel
                                </li>
                            </ul>
                            <p class="headerSmallText">
                                <b
                                    style={{
                                        color: "#ff8400",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ⚡
                                </b>{" "}
                                The Most Powerfull Panel on the market with more
                                than{" "}
                                <b
                                    style={{
                                        color: "#ff8400",
                                        fontWeight: "bold",
                                    }}
                                >
                                    5170954{" "}
                                </b>{" "}
                                orders until now!
                            </p>
                        </div>

                        <div class="col-sm-5 signInForm">
                            <h2>Sign In</h2>
                            <form
                                method="post"
                                action="https://snakerspanel.com/dsfdif"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value="69Twc3PkUrOqVMWF1sHoaPHuNylh24ho19PmTgJj"
                                />
                                <div class="form-group">
                                    <input
                                        id="email"
                                        type="text"
                                        class="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value=""
                                        data-validation="email"
                                        autofocus=""
                                    />
                                </div>
                                <div class="form-group form-group__password">
                                    <input
                                        id="password"
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                        name="password"
                                        data-validation="required"
                                    />
                                    <a
                                        href="/password/reset"
                                        class="forgot-password"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div
                                    class="form-group"
                                    style={{ paddingLeft: "20px" }}
                                >
                                    <label class="checkbox" for="remember">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            data-toggle="checkbox"
                                        />{" "}
                                        Remember Me{" "}
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    <span>Sign in</span>
                                </button>
                                <span class="pull-right pull-right-middle">
                                    Do not have an account?{" "}
                                    <a href="/register">Sign up</a>
                                </span>
                                <span class="pull-left pull-left-middle">
                                    <a href="https://snakerspanel.com/password/reset">
                                        Lost your password?
                                    </a>
                                </span>
                                <button
                                    type="button"
                                    class="btn btn-info"
                                    id="glog"
                                >
                                    <img
                                        src="https://www.google.com/images/cleardot.gif"
                                        class="goog-te-gadget-icon"
                                        alt=""
                                        style={{
                                            backgroundImage:
                                                'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")',
                                            backgroundPposition: "-65px 0px",
                                        }}
                                    />{" "}
                                    Login with Google
                                </button>
                            </form>
                        </div>

                        <div class="couterHeader">
                            <div class="col-sm-4">
                                <div class="statBox type1">
                                    <div class="visual">
                                        <i class="fa fa-clock-o"></i>
                                    </div>
                                    <div class="detail">
                                        <span class="texCounter">
                                            ♛ Order Placed Every
                                        </span>
                                        <span class="valueCounter">
                                            0.30 Sec On Average
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="statBox type2">
                                    <div class="visual">
                                        <i class="fa fa-download"></i>
                                    </div>
                                    <div class="detail">
                                        <span class="valueCounter">
                                            5170954+
                                        </span>
                                        <span class="texCounter">
                                            Orders Completed
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="statBox type3">
                                    <div class="visual">
                                        <i class="fa fa-dollar"></i>
                                    </div>
                                    <div class="detail">
                                        <span class="texCounter">
                                            ♛ Prices Starting From
                                        </span>
                                        <span class="valueCounter">
                                            $0.000/1K
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
