import Header from '~/components/Header/Header';
import SideBar from '~/components/Sidebar/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
