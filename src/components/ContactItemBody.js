import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactItemBody({id, name, tag}) {
    return (
        <div className="contact-item__body">
            <h3 className="contact-item__title">
                <Link to={`/contacts/${id}`}>{name}</Link>
            </h3>
            <p className="contact-item__username">@{tag}</p>
        </div>
    );
}

ContactItemBody.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}

export default ContactItemBody;