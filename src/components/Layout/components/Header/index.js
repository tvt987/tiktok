import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/static/images/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWraper } from '~/components/Layout/components/Popper';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AccountSearch from '~/components/Layout/components/AccountSearch';
import Button from '~/components/Layout/components/Button';
import HeadAction from '../HeadAction';

const cx = classNames.bind(styles);
function Header() {
    let currentUser = 's';
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
                        <Tippy content="Search">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <HeadAction currentUser={currentUser}></HeadAction>
                <div className={cx('float')}>
                    <Button state="float">Go to top</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
