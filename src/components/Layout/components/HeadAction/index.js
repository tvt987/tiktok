import classNames from 'classnames/bind';
import styles from './HeadAction.module.scss';
import { Fragment } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../Popper/Menu';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Mailbox, OPMessageIcon } from '~/static/icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
function HeadAction({ currentUser }) {
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
                        </Button>
                    </Tippy>
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
                    <Menu>
                        <FontAwesomeIcon className={cx('dot-vertical')} icon={faEllipsisVertical}></FontAwesomeIcon>
                    </Menu>
                </div>
            )}
        </Fragment>
    );
}

export default HeadAction;
