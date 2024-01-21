import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/static/images/Logo';

import Button from '~/components/Layout/components/Button';
import HeadAction from '../HeadAction';
import Search from '../Search';
import Image from '../Image';

const cx = classNames.bind(styles);
function Header() {
    let currentUser = 'tinhne';

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Image src={images.logo.default} alt="" />
                </div>
                <Search />
                <HeadAction currentUser={currentUser}></HeadAction>
                <div className={cx('float')}>
                    <Button state="float">Go to top</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
