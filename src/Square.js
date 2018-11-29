import React from 'react';
import styles from './App.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Square = ({isBlue}) => <div className={cx("box",{blue:isBlue})} />

export default Square;
