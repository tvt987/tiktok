import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCircleXmark, faEllipsisVertical, faLanguage, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.scss';
import Button from '../../Button';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWraper } from '~/components/Layout/components/Popper';
import 'tippy.js/dist/tippy.css';
import { faCircleQuestion, faKeyboard, faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';
import { Fragment, useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children }) {
    const items = [
        {
            id: 1,
            icon: faLightbulb,
            name: 'Trung tâm nhà sáng tạo LIVE',
            to: '/upload',
        },
        {
            id: 2,
            icon: faLanguage,
            name: 'Tiếng Việt',
            onClick: () => {
                // ở đây
            },
            children: {
                title: 'Language',
                data: [
                    {
                        id: 1,
                        name: 'English',
                    },
                    {
                        id: 2,
                        name: 'China',
                        children: {
                            title: 'China',
                            data: [
                                {
                                    id: 1,
                                    icon: faLanguage,
                                    name: 'Tokyo',
                                },
                                {
                                    id: 2,
                                    icon: faLanguage,
                                    name: 'Motion',
                                },
                                {
                                    id: 3,
                                    icon: faLanguage,
                                    name: 'HardWai',
                                },
                                {
                                    id: 4,
                                    icon: faLanguage,
                                    name: 'Tokey',
                                },
                            ],
                        },
                    },
                    {
                        id: 3,
                        icon: faLanguage,
                        name: 'Spanish',
                    },
                    {
                        id: 4,
                        icon: faLanguage,
                        name: 'German',
                    },
                ],
            },
        },
        {
            id: 3,
            icon: faCircleQuestion,
            name: 'Phản hồi và trợ giúp',
            children: {
                title: 'Language',
                data: [
                    {
                        id: 1,
                        icon: faLanguage,
                        name: 'English',
                    },
                    {
                        id: 2,
                        icon: faLanguage,
                        name: 'China',
                    },
                    {
                        id: 3,
                        icon: faLanguage,
                        name: 'Spanish',
                    },
                    {
                        id: 4,
                        icon: faLanguage,
                        name: 'German',
                    },
                ],
            },
        },
        {
            id: 4,
            icon: faKeyboard,
            name: 'Phím tắt trên bàn phím',
        },
        {
            id: 5,
            icon: faMoon,
            name: 'Chế độ tối',
            last: 'last',
        },
    ];
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
        <Tippy
            placement="bottom-end"
            interactive={true}
            onHide={() => {
                setHistory([items]);
                setTitle([]);
                setLastItem(items);
            }}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex={-1} {...attrs}>
                    <PopperWraper>
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
                                                onClick={
                                                    item.last
                                                        ? () => handleEfcDarkLight()
                                                        : () => handleMenu(item.children)
                                                }
                                                to={item.to}
                                                href={item.href}
                                            >
                                                {item.icon ? (
                                                    <FontAwesomeIcon
                                                        className={cx('icon')}
                                                        icon={item.icon}
                                                    ></FontAwesomeIcon>
                                                ) : (
                                                    <Fragment></Fragment>
                                                )}
                                                <div className={cx('name')}>{item.name}</div>
                                                {item.last ? (
                                                    <div className={classNamesBtn}>
                                                        <FontAwesomeIcon
                                                            className={cx('dot')}
                                                            icon={faCircle}
                                                        ></FontAwesomeIcon>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )}
                                            </Button>
                                        </li>
                                    );
                                })}
                        </ul>
                    </PopperWraper>
                </div>
            )}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default Menu;
