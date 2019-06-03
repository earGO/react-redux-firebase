import React from 'react';
import ReactDOM from 'react-dom';
import SignedOutLinks from "./SignedOutLinks";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignedOutLinks />, div);
    ReactDOM.unmountComponentAtNode(div);
});