import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


class Header extends Component {

    render() {
        return (
            <>
                <header>
                    <h1>tech<span className="roseRed">Events</span></h1>
                    <Navbar fixed="navbar"/>

                    <div>
                        <p className="catchPhrase">
                            "Everything you need to create and manage your events.
                            We work to give you more time to focus on the things that matter most!"
                    </p>


                        <NavLink  className="btn-primary" to="/auth/sign-up">Get Started</NavLink>
                    </div>
                </header>
            </>
        )
    }
}

export default Header
