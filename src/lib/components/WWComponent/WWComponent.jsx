/* eslint-disable react/prop-types */
import React from 'react';
import classes from './WWComponent.module.css';

export const WWComponent = ({text = 'WWComponent'}) => (
    <div className={classes.container}>{text}</div>
);