import { memo, useMemo, useCallback } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { postsActions } from '../../store/reducers/postsSlice';
import { SortGroup } from '../../types/post';
import { TitleItem } from './TitleItem/TitleItem';
import cls from './TitleList.module.css';

interface Title {
    id: SortGroup;
    text: string;
    classNameWrapper: string;
}

export const TitleList = memo(() => {
    const dispatch = useAppDispatch();

    const onChangeSortBy = useCallback(
        (id: SortGroup) => {
            dispatch(postsActions.setSort(id));
        },
        [dispatch]
    );

    const Titles = useMemo<Title[]>(
        () => [
            {
                id: 'id',
                text: 'ID',
                classNameWrapper: cls.id
            },
            {
                id: 'title',
                text: 'Заголовок',
                classNameWrapper: cls.title
            },
            {
                id: 'body',
                text: 'Описание',
                classNameWrapper: cls.description
            }
        ],
        []
    );

    return (
        <div className={cls.titleList}>
            {Titles.map((t) => (
                <TitleItem
                    onClick={onChangeSortBy}
                    id={t.id}
                    key={t.id}
                    text={t.text}
                    classNameWrapper={t.classNameWrapper}
                />
            ))}
        </div>
    );
});
