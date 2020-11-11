import React from 'react';

const TopNavBar = () => {
    var tempUrl = "https://hostmantest.hostman.site/";
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        {/*<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />*/}
                        Hostman Test App
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample" href={tempUrl}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href={tempUrl}>
                            Home
                        </a>

                        <a className="navbar-item" href={tempUrl}>
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href={tempUrl}>
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href={tempUrl}>
                                    About
                                </a>
                                <a className="navbar-item" href={tempUrl}>
                                    Jobs
                                </a>
                                <a className="navbar-item" href={tempUrl}>
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                    <a className="navbar-item" href={tempUrl}>
                                        Report an issue
                                    </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href={tempUrl}>
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href={tempUrl}>
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default TopNavBar;
