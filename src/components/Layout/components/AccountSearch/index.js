import classNames from 'classnames/bind';
import styles from './AccountSearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Layout/components/Images';

const cx = classNames.bind(styles);
function AccountSearch({ item }) {
    return (
        <div className={cx('wrapper')}>
            <Images src={item.avatar} className={cx('avatar')} />
            <div className={cx('info')}>
                <h3 className={cx('name')}>
                    {item.full_name}
                    {!!item.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h3>
                <span className={cx('username')}>{item.nickname}</span>
            </div>
            <hr />
        </div>
    );
}

export default AccountSearch;
