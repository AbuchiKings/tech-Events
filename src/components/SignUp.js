import React from 'react';

function SignUp() {
    return (
        <div className="login-center">
            
        <form className="login-form">
            <div className="input-grp">
                <input type="text" placeholder="Name"
                    aria-label="name"
                />
            </div>
            <div className="input-grp">
                <input type="email" placeholder="Email"
                    aria-label="email" autoComplete="email"
                />
            </div>
            <div className="input-grp">
                <input type="text" placeholder="Username"
                    aria-label="username" autoComplete="username"
                />
            </div>
            <div className="input-grp">
                <input type="password" placeholder="Password"
                    aria-label="Password" autoComplete="password"
                />
            </div>
            <div className="input-grp">
                <button className="btn-primary login-btn">
                    Sign Up
                </button>

            </div>
        </form>
    </div>
    );
}

export default SignUp;
