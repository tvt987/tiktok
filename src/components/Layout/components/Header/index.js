import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/static/images/Logo';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className="clear">{/* clear */}</button>
                    {/* icon loading */}
                    <button className={cx('search-btn')}>{/* icon search */}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
