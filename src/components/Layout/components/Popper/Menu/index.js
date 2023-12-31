import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';
import Header from './Header';
import { Fragment, useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ items }) {
    const [history, setHistory] = useState([items]);
    const [title, setTitle] = useState([]);
    const [lastItem, setLastItem] = useState(history[history.length - 1]);

    const handleMenu = (children) => {
        if (children) {
            history.push(children.data);
            title.push(children.title);
            setLastItem(history[history.length - 1]);
        } else {
            console.log('Không có children');
        }
    };

    const handleBack = () => {
        history.pop();
        title.pop();
        setLastItem(history[history.length - 1]);
    };

    let classNames = cx('wrapper', {});

    let classNamesBtn = cx('button');

    const handleEfcDarkLight = () => {
        const button = document.querySelector(`.${styles.button}`);
        button.classList.toggle(styles.darkLight);
    };
    return (
        <ul>
            <Header title={title} onBack={() => handleBack()} />
            {lastItem &&
                lastItem.map((item, index) => {
                    classNames = cx('wrapper', {
                        [item.last]: [item.last],
                    });
                    return (
                        <li key={index} className={classNames}>
                            <Button
                                className={cx('link')}
                                onClick={item.last ? () => handleEfcDarkLight : () => handleMenu(item.children)}
                                to={item.to}
                                href={item.href}
                            >
                                {item.icon ? (
                                    <FontAwesomeIcon className={cx('icon')} icon={item.icon}></FontAwesomeIcon>
                                ) : (
                                    <Fragment></Fragment>
                                )}
                                <div className={cx('name')}>{item.name}</div>
                                {item.last ? (
                                    <div className={classNamesBtn}>
                                        <FontAwesomeIcon className={cx('dot')} icon={faCircle}></FontAwesomeIcon>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </Button>
                        </li>
                    );
                })}
        </ul>
    );
}

export default Menu;
