import React, { Component } from 'react'

export default class Navbar extends Component {

    state = {
        dispElements: false
    };
    navRef = React.createRef();



    componentDidMount() {
        console.log(this);
        var navbar = this.navRef.current;
        var sticky = this.navRef.current.offsetTop;

        const stickyNavbar = () => {
            console.log(sticky);
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
                this.setState({ dispElements: true });
            } else {
                navbar.classList.remove("sticky");
                this.setState({ dispElements: false });

            }

        }
        window.addEventListener('scroll', stickyNavbar);

    }


    render() {

        return (
            <nav className="navbar" >

                <p className={this.props.displayNav ? "nav-logo logo" : "logo"}>
                    <a href="">tech<span className="roseRed">Events</span></a>
                </p>



                <ul>

                    <li className="nav-links">
                        <a href="">Home</a>
                    </li>
                    <li className="nav-links">
                        <a href="">Events</a>
                    </li>
                    <li className="nav-links">
                        <a href="">Create Event</a>
                    </li>
                    <li className="nav-links">
                        <a href="">Sign In</a>
                    </li>

                </ul>



            </nav>
        )
    }
}
