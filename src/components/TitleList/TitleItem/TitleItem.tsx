import { memo } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import arrow from '../../../img/arrow.svg';
import { SortGroup } from '../../../types/post';

import cls from './TitleItem.module.css';

interface TitleItemProps {
    id: SortGroup;
    onClick: (id: SortGroup) => void;
    text: string;
    classNameWrapper: string;
}

export const TitleItem = memo((props: TitleItemProps) => {
    const { onClick, text, classNameWrapper, id } = props;
    const sortBy = useAppSelector((state) => state.posts.sort);

    const onChangeSortBy = () => {
        onClick(id);
    };

    return (
        <div onClick={onChangeSortBy} className={classNameWrapper}>
            <p>{text}</p>
            <img
                className={[cls.arrow, sortBy === id ? cls.arrowRotated : ''].join(' ')}
                src={arrow}
                alt='arrow'
            />
        </div>
    );
});
