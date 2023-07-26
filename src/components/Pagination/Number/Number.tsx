import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './Number.module.css';

interface NumberProps {
    number: number;
    currentPage: number;
}

export const Number = memo((props: NumberProps) => {
    const { number, currentPage } = props;

    return (
        <Link to={`/${number}`} className={[cls.number, number === currentPage ? cls.highlighted : ''].join(' ')}>{number}</Link>
    );
});
