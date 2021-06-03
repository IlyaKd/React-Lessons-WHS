import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.wrap}>
    <div>Осталось дел: {count}</div>
    <div>
        <button className={styles.btn}>Все</button>
        <button className={styles.btn}>Активные</button>
        <button className={styles.btn}>Выполненные</button>
    </div>
        <button className={styles.btn}>Удалить выполненные</button>
</div>);

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;