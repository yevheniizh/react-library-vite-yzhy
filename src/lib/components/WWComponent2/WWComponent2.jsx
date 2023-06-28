/* eslint-disable react/prop-types */
import React from 'react';
import classes from './WWComponent2.module.css';

export const WWComponent2 = ({text = 'WWComponent2'}) => (
    <div className={classes.container}>{text}</div>
);