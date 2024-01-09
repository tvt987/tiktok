import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    let lastItem;
    if (title.length > 0) {
        lastItem = title[title.length - 1];
    }
    return lastItem ? (
        <header className={cx('wrapper')}>
            <button onClick={onBack} className={cx('btn')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCaretLeft}></FontAwesomeIcon>
            </button>
            <div className={cx('title')}>{lastItem}</div>
        </header>
    ) : (
        <div></div>
    );
}

export default Header;
