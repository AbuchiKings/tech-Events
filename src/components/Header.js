import React, { Component } from 'react'
 import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
        dispElements: false
    };
    navRef = React.createRef();



    componentDidMount() {
        console.log(this);
        var navbar = this.navRef.current;
        var sticky = this.navRef.current.offsetTop;

        const stickyNavbar = () => {

            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
                this.setState({ dispElements: true });
            } else if (window.pageYOffset < sticky) {
                navbar.classList.remove("sticky");
                this.setState({ dispElements: false });

            }

        }
        window.addEventListener('scroll', stickyNavbar);

    }


    render() {
        return (
            <>
                <header>
                    <h1>tech<span className="roseRed">Events</span></h1>

                    <nav className="navbar" ref={this.navRef}>
                        <div>

                            <p className={this.props.displayNav ||
                                this.state.dispElements ? "nav-logo logo" : "logo"}>
                                <NavLink exact to="/">tech<span className="roseRed">Events</span></NavLink>
                            </p>
                        </div>

                        <ul>

                            <li className="nav-links">
                                <NavLink to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-links">
                                <NavLink to="/events" activeClassName="active">Events</NavLink>
                            </li>
                            <li className="nav-links">
                                <NavLink to="/create-event" activeClassName="active">Create Event</NavLink>
                            </li>
                            <li className="nav-links">
                                <NavLink to="/" activeClassName="active">Sign In</NavLink>
                            </li>

                        </ul>
                    </nav>
                    <div>
                        <p className="catchPhrase">
                            "Everything you need to create and manage your events.
                            We work to give you more time to focus on the things that matter most!"
                    </p>


                        <NavLink className="btn-primary" to="">Get Started</NavLink>
                    </div>
                </header>
            </>
        )
    }
}

export default Header
