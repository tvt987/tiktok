import classNames from 'classnames/bind';
import styles from './HeadAction.module.scss';
import { Fragment } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../Popper/Menu';
import { faCircleXmark, faEllipsisVertical, faLanguage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';

import {
    Mailbox,
    OPMessageIcon,
    FavoriteIcon,
    ViewProfileIcon,
    LiveStudioIcon,
    GetCoinsIcon,
    SettingsIcon,
} from '~/static/icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '../Image';

const cx = classNames.bind(styles);
function HeadAction({ currentUser }) {
    const itemsDot = [
        {
            id: 1,
            name: 'Trung tâm nhà sáng tạo LIVE',
            to: '/upload',
        },
        {
            id: 2,
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
                                    name: 'Tokyo',
                                },
                                {
                                    id: 2,
                                    name: 'Motion',
                                },
                                {
                                    id: 3,
                                    name: 'HardWai',
                                },
                                {
                                    id: 4,
                                    name: 'Tokey',
                                },
                            ],
                        },
                    },
                    {
                        id: 3,
                        name: 'Spanish',
                    },
                    {
                        id: 4,
                        name: 'German',
                    },
                ],
            },
        },
        {
            id: 3,
            name: 'Phản hồi và trợ giúp',
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
                    },
                    {
                        id: 3,
                        name: 'Spanish',
                    },
                    {
                        id: 4,
                        name: 'German',
                    },
                ],
            },
        },
        {
            id: 4,
            name: 'Phím tắt trên bàn phím',
        },
        {
            id: 5,
            name: 'Chế độ tối',
            last: 'last',
        },
    ];
    const itemsUser = [
        {
            id: 1,
            icon: <ViewProfileIcon />,
            name: 'View profile',
            to: '/upload',
        },
        {
            id: 2,
            name: 'Favorite',
            icon: <FavoriteIcon />,

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
                                    name: 'Tokyo',
                                },
                                {
                                    id: 2,
                                    name: 'Motion',
                                },
                                {
                                    id: 3,
                                    name: 'HardWai',
                                },
                                {
                                    id: 4,
                                    name: 'Tokey',
                                },
                            ],
                        },
                    },
                    {
                        id: 3,
                        name: 'LIVE Studio',
                    },
                    {
                        id: 4,
                        name: 'Setting',
                    },
                ],
            },
        },
        {
            id: 3,
            name: 'Get Coins',
            icon: <GetCoinsIcon />,
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
                    },
                    {
                        id: 3,
                        name: 'Spanish',
                    },
                    {
                        id: 4,
                        name: 'German',
                    },
                ],
            },
        },
        {
            id: 4,
            name: 'LIVE Studio',
            icon: <LiveStudioIcon />,
        },
        {
            id: 5,
            name: 'Settings',
            icon: <SettingsIcon />,
            last: 'last',
        },
    ];
    return (
        <Fragment>
            {currentUser ? (
                <div className={cx('icons')}>
                    <Button state="blank" target="_blank">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        Upload
                    </Button>
                    <Tippy content="Message" placement="bottom">
                        <Button state="icon" target="_blank">
                            <OPMessageIcon />
                        </Button>
                    </Tippy>
                    <Tippy content="Mailbox" placement="bottom">
                        <Button state="icon" target="_blank">
                            <Mailbox />
                            <div className={cx('number-chat')}>10</div>
                        </Button>
                    </Tippy>
                    <Menu items={itemsUser}>
                        <Image
                            src="htstps://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/078e2b2b06e21bf36e18df9fb4599150.jpeg?lk3s=a5d48078&x-expires=1705762800&x-signature=28XXz6L15BzCXxQSgRoWbQQ54QM%3D"
                            alt="Trương Văn Tình"
                            className={cx('user-avatar')}
                        />
                    </Menu>
                </div>
            ) : (
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
                    <Menu items={itemsDot}>
                        <FontAwesomeIcon className={cx('dot-vertical')} icon={faEllipsisVertical}></FontAwesomeIcon>
                    </Menu>
                </div>
            )}
        </Fragment>
    );
}

export default HeadAction;
