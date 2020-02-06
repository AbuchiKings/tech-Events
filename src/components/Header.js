import React, { Component } from 'react'
// import { NavLink, Link } from 'react-router-dom';

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
                                <a href="">tech<span className="roseRed">Events</span></a>
                            </p>
                        </div>

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
                    <div>
                        <p className="catchPhrase">
                            "Everything you need to create and manage your events.
                            We work to give you more time to focus on the things that matter most!"
                    </p>


                        <a className="btn-primary" href="">Get Started</a>
                    </div>
                </header>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi esse accusamus porro delectus, laborum architecto temporibus. Impedit, rerum deserunt accusantium, ipsum qui dolor quidem repudiandae nulla, aut nihil quae deleniti.
        </div>
            </>
        )
    }
}

export default Header
