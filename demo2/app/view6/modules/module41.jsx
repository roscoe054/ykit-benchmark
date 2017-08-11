import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default function SimpleComponent({demoAction}) {

    return (
        <div className="page">
            <h1>This is page</h1>
            <DatePicker/>
            <Link className="btn" to="/page" onClick={() => demoAction('Going to Page')}>Page</Link>
        </div>
    );
}

SimpleComponent.propTypes = {
    demoAction: PropTypes.func.isRequired
};
