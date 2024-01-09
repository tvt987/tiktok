import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/static/images/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faLanguage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWraper } from '~/components/Layout/components/Popper';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountSearch from '~/components/Layout/components/AccountSearch';
import Button from '~/components/Layout/components/Button';
import { faCircleQuestion, faKeyboard, faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import Menu from '~/components/Layout/components/Popper/Menu';

const cx = classNames.bind(styles);
function Header() {
    const menuItems = [
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
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const k = setTimeout(() => {
            setSearchResult([]);
        }, 2000);
        return () => clearTimeout(k);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWraper>
                                <div className={cx('title')}>Account</div>
                                <AccountSearch></AccountSearch>
                                <AccountSearch></AccountSearch>
                                <AccountSearch></AccountSearch>
                            </PopperWraper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* icon loading */}
                        <Tippy>
                            <button content="Search" placement="top" className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button state="blank" target="_blank">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Upload
                    </Button>
                    <Button state="primary" target="_blank">
                        Log in
                    </Button>
                    <img
                        className={cx('laptop-mobile')}
                        src="https://img.icons8.com/pulsar-color/48/laptop-and-phone.png"
                        alt="laptop-and-phone"
                    />
                    <div>
                        <Tippy
                            placement="bottom-end"
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('menu')} tabIndex={-1} {...attrs}>
                                    <PopperWraper>
                                        <Menu items={menuItems}></Menu>
                                    </PopperWraper>
                                </div>
                            )}
                        >
                            <div>
                                <FontAwesomeIcon
                                    className={cx('dot-vertical')}
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('float')}>
                    <Button state="float">Go to top</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
