import { useEffect, useMemo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useAppDispatch } from './../../hooks/redux';
import { fetchPosts } from '../../api/fetchPosts';
import { Row } from './Row/Row';
import { useParams } from 'react-router-dom';

import cls from './Table.module.css';

export const Table = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.posts.posts);
    const isLoading = useAppSelector((state) => state.posts.isLoading);
    const error = useAppSelector((state) => state.posts.error);
    const { id } = useParams();
    const dataCopy = useMemo(() => {
        const dataCopy = [...data]
        for (let i = 0; i > data.length - 10; i--) {
            dataCopy.push({id: i, body: '', title: ''})
        }
        return dataCopy
    }, [data])

    useEffect(() => {
        dispatch(fetchPosts(id || '1'));
    }, [ dispatch, id]);

    if (isLoading) {
        return (
            <div className={cls.table}>
                <h3>Loading...</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.table}>
                <h1>Произошла ошибка при загрузке данных</h1>
            </div>
        );
    }

    return (
        <div className={cls.table}>
            {dataCopy.map((el) => (
                <Row title={el.title} key={el.id} body={el.body} id={el.id} />
            ))}
        </div>
    );
};
