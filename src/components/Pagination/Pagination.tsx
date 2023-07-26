import { memo, useMemo, useCallback } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Button } from './../Button/Button';
import { Number } from './Number/Number';
import { ceil, getAllNumbers } from './../../helpers/post';
import { useNavigate } from 'react-router-dom';

import cls from './Pagination.module.css';

export const Pagination = memo(() => {
    const totalCount = useAppSelector((state) => state.posts.totalCount);
    const currentPage = useAppSelector((state) => state.posts.page);
    const navigate = useNavigate();

    const ListNumber = useMemo(() => {
        return getAllNumbers(totalCount || 100);
    }, [totalCount]);

    const onPreviousPage = useCallback(() => {
        if (currentPage !== 1) {
            navigate(`/${currentPage - 1}`)
        }
    }, [currentPage, navigate])

    const onNextPage = useCallback(() => {
        if (currentPage !== ceil(totalCount || 100)) {
            navigate(`/${currentPage + 1}`)
        }
    }, [currentPage, navigate, totalCount])

    return (
        <div className={cls.pagination}>
            <Button className={cls.button} onClick={onPreviousPage} text='Назад' />
            <div className={cls.list}>
                {ListNumber.map((el) => (
                    <Number key={el} currentPage={currentPage} number={el} />
                ))}
            </div>
            <Button className={cls.button} onClick={onNextPage} text='Далее' />
        </div>
    );
});
