import { memo } from 'react';

import cls from './Row.module.css'

interface RowProps {
    id: number;
    title: string;
    body: string;
}

export const Row = memo((props: RowProps) => {
    const { body, id, title} = props;

    const isEmpty = title || body

    return (
        <div className={cls.row}>
            <div className={cls.id}>{!isEmpty ? '' : id}</div>
            <div className={cls.title}>{title}</div>
            <div className={cls.body}>{body}</div>
        </div>
    );
});