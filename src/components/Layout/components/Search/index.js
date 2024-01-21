import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWraper } from '~/components/Layout/components/Popper';
import Tippy from '@tippyjs/react';
import AccountSearch from '~/components/Layout/components/AccountSearch';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const k = setTimeout(() => {
            setSearchResult([]);
        }, 2000);
        return () => clearTimeout(k);
    }, []);
    return (
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
    );
}

export default Search;
