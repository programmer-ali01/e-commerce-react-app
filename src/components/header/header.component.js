import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <div className="logo">ECOMMERCE</div>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>
            <Link className="option" to='/shop'>
                Contact
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                ) : (
                        <Link className="option" to='/signin'>
                            Sign In
                        </Link>
                    )
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />

        }

    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);