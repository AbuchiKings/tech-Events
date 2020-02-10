import React from 'react';
import Login from './../components/Login';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './../components/SignUp';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function AuthPage(props) {
    console.log(props.location.pathname)
    const { pathname } = props.location;
    console.log(pathname);
    return (
        <main className="main">
            <div className="form-wrapper">
                <div className="form-section">
                    {/*IEF*/}
                    {(() => {
                        if (pathname === "/auth/login") {
                            return (
                                <>
                                    <h1>Sign In</h1>
                                    <p>Sign in or <Link to="/auth/sign-up">Create account</Link></p>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <h1>Sign Up</h1>
                                    <p>Already have an account? <Link to="/auth/login">Sign in</Link></p>
                                </>
                            )
                        }
                    })()}
                    <Switch>
                        <Route exact path="/auth/login" component={Login} />
                        <Route exact path="/auth/sign-up" component={SignUp} />
                        <Redirect from='/auth' to='/auth/sign-up' />
                    </Switch>
                </div>
                <div className="form-footer">
                    <p>
                        <span>Pricing</span>
                        <span>Terms</span>
                        <span>Privacy</span>
                        <span>Contact us</span>
                        <small className="copyright">
                            Copyright &copy; 2020 All rights reserved | Made by
                            <span><Link to="/">  Abuchi Kingsley</Link></span>
                        </small>
                    </p>
                </div>

            </div>
        </main>
    );
}

export default AuthPage;
