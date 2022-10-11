import React from 'react';
import PropTypes from 'prop-types';

function ContactDetail({ name, tag }) {
  return (
    <div className="contact-item__body">
        <h3 className="contact-item__title">{name}</h3>
        <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

ContactDetail.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ContactDetail;
