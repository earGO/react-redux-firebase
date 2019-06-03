import React from 'react';
import ReactDOM from 'react-dom';
import SignedOut from "./SignedOut";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignedOut />, div);
    ReactDOM.unmountComponentAtNode(div);
});