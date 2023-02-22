import React from 'react'
import { Link } from 'react-router-dom';
import { LogOut, reset } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();


    const handleLogoutClick = () => {

        window.location.assign('/');
        console.log('Logging out...');
        dispatch(reset());
        dispatch(LogOut());
    };

    const handleSignUpClick = () => {

        window.location.assign('/register');
    };


    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation" >
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </div>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">

                    <div className="navbar-start">

                        <div className="navbar-item">
                            <div className="button is-light">
                                <Link to="/auth/dashboard">Dashboard</Link>
                            </div>
                            <div className="button is-light">
                                <Link to="/auth/products">Product</Link>
                            </div>
                            <div className="button is-light">
                                <Link to="/auth/productDB">Product DB</Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="navbar-end">

                    <div className="navbar-item">
                        <div className="buttons mr-2">
                            <div onClick={handleSignUpClick} className="button is-light">
                                Register
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons ml-2">
                            <div onClick={handleLogoutClick} className="button is-light">
                                Log out
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav >
    )
}

export default Navbar;
