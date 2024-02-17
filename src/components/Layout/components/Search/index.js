import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import AccountSearch from '~/components/Layout/components/AccountSearch';
import { Wrapper as PopperWraper } from '~/components/Layout/components/Popper';
import { ClearIcon, LoadIcon } from '~/static/icons';
import styles from './Search.module.scss';
import React from 'react';
import useDebounce from '~/static/hooks';
import axios from 'axios';
import * as instance from '~/utils/request';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const resultRef = useRef();

    const debounceValue = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            if (resultRef.current) {
                resultRef.current.style.display = 'none';
            }
            return;
        } else {
            setLoading(true);
            const fetchApi = async () => {
                try {
                    const res = await instance.get('users/search', {
                        params: {
                            q: debounceValue,
                            type: 'less',
                        },
                    });
                    if (resultRef.current) {
                        resultRef.current.style.display = 'block';
                    }
                    setSearchResult(res.data);
                    console.log(res.data);
                    setLoading(false);
                } catch (error) {
                    setSearchResult([]);
                    setLoading(false);
                }
            };
            fetchApi();
        }
    }, [debounceValue]);
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleClickOutside = () => {
        setShowResult(false);
        // // Cập nhật giá trị trong Tippy instance nếu nó đã được tạo
        // if (tippyRef.current) {
        //     tippyRef.current.setProps({ visible: showTippyRef.current });
        // }
        resultRef.current.style.display = 'none';
    };
    const handleClickInput = () => {
        setShowResult(true);
        resultRef.current.style.display = 'block';
    };

    return (
        <div>
            <Tippy
                interactive
                visible={searchResult && searchResult.length > 0}
                render={(attrs) => (
                    <div ref={resultRef} className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWraper>
                            <div className={cx('title')}>Account</div>
                            {searchResult &&
                                searchResult.map((item) => (
                                    <AccountSearch to={item.nickname} key={item.id} item={item}></AccountSearch>
                                ))}
                        </PopperWraper>
                    </div>
                )}
                onClickOutside={handleClickOutside}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={handleClickInput}
                    />
                    {!!searchValue && !loading && (
                        <button onClick={handleClear} className={cx('clear')}>
                            <ClearIcon />
                        </button>
                    )}
                    {!!searchValue && !!loading && (
                        <button className={cx('loading')}>
                            <LoadIcon />
                        </button>
                    )}

                    {/* icon loading */}
                    <Tippy content="Search">
                        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            <FontAwesomeIcon className={cx('search-btn--icon')} icon={faMagnifyingGlass} />
                        </button>
                    </Tippy>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
