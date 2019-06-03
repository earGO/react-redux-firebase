import React from 'react';
import ReactDOM from 'react-dom';
import ProjectSummary from "./ProjectSummary";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectSummary />, div);
    ReactDOM.unmountComponentAtNode(div);
});