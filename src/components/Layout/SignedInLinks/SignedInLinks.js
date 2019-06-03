import React from 'react';
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to={'/'} className={'brand-logo'}>Signed n link</NavLink></li>
            <li><NavLink to={'/'} className={'brand-logo'}>Signed n link</NavLink></li>
            <li><NavLink to={'/'} className={'brand-logo'}>Signed n link</NavLink></li>
        </ul>



    )
};

export default SignedInLinks;