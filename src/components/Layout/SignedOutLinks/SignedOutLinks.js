import React from 'react';
import {NavLink} from "react-router-dom";

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to={'/'} className={''}>Signup</NavLink></li>
            <li><NavLink to={'/'} className={''}>Log In</NavLink></li>
        </ul>

    )
};

export default SignedOutLinks;