import { memo, MouseEvent } from 'react';
import cls from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

export const Button = memo((props: ButtonProps) => {
    const { onClick, text, className } = props;

    const onHandleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick();
    }   

    return (
        <button className={[cls.button, className].join(' ')} onClick={onHandleClick}>{text}</button>
    );
})
