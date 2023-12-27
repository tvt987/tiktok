import classNames from 'classnames/bind';
import styles from './AccountSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountSearch() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/607ca0409ed5483a9a8c466db4b706bc~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1703862000&x-signature=UPv6p71v%2Ba%2F4zJdV3CBqPKx2ees%3D"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h3 className={cx('name')}>
                    Trương Văn Tình
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />{' '}
                </h3>
                <span className={cx('username')}>tinhtruong987</span>
            </div>
            <hr />
        </div>
    );
}

export default AccountSearch;
