import { memo, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { postsActions } from '../../store/reducers/postsSlice';
import search from '../../img/search.svg';

import cls from './SearchBar.module.css';

export const SearchBar = memo(() => {
    const query = useAppSelector((state) => state.posts.query);
    const sortBy = useAppSelector((state) => state.posts.sort);
    const dispatch = useAppDispatch();

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(postsActions.setQuery(e.target.value));
        dispatch(postsActions.setSort(sortBy));
    };

    return (
        <div className={cls.wrapper}>
            <input className={cls.searchBar} placeholder='Поиск' value={query} onChange={onChangeValue} type='text' />
            <img className={cls.img} src={search} alt="search" />
        </div>
    );
});
