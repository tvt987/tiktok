import classNames from 'classnames/bind';
import styles from './AccountSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Layout/components/Images';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountSearch({ item, to }) {
    return (
        <div className={cx('wrapper')}>
            <Images src={item.avatar} className={cx('avatar')} />
            <Link to={`/account/@${to}`} className={cx('info')}>
                <h3 className={cx('name')}>
                    {item.full_name}
                    {!!item.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h3>
                <span className={cx('username')}>{item.nickname}</span>
            </Link>
            <hr />
        </div>
    );
}

export default AccountSearch;
