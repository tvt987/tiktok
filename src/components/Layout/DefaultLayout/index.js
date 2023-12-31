import Header from '~/components/Layout/components/Header';
import SideBar from '~/components/Layout/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
