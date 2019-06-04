import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../../store/actions/authActions";

const mapDispatchToProps = (dispatch) => {
    return {
        signOut:() => dispatch(signOut())
    }
};

const SignedInLinks = (props) => {
    const { signOut } = props;

    return (
        <ul className="right">
            <li><NavLink to={'/create'} className={''}>New Project</NavLink></li>
            <li><a onClick={signOut} className={''}>Log Out</a></li>
            <li><NavLink to={'/'} className={'btn btn-floating pink lighten-1'}>NN</NavLink></li>
        </ul>
    )
};

export default connect(null, mapDispatchToProps)(SignedInLinks);