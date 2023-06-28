import React from 'react';
import PropTypes from 'prop-types'
import classes from './WWComponent.module.css';

const WWComponent = ({text = 'WWComponent'}) => (
    <div className={classes.container}>{text}</div>
)

WWComponent.propTypes = {
    text: PropTypes.string
}

export { WWComponent };