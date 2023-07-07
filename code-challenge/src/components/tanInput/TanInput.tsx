// React
import React, { FC, useState, ChangeEvent, useRef, KeyboardEvent, FocusEvent } from 'react'

// Styles
import styles from './TanInput.module.scss'

// Models
import { TanState } from "../../models/tanState"

interface Props {
    className?: string,
}

export const TanInput: FC<Props> = (props) => {
    const { className } = props

    const onlyOneDigitPattern = /^\d$/;

    const [tanValues, setTanValues] = useState<TanState>({
        tan1: "",
        tan2: "",
        tan3: "",
        tan4: "",
        tan5: "",
        tan6: ""
    })

    //useref array for all Inputs
    const inputRefs = useRef([
        React.createRef<HTMLInputElement>(),
        React.createRef<HTMLInputElement>(),
        React.createRef<HTMLInputElement>(),
        React.createRef<HTMLInputElement>(),
        React.createRef<HTMLInputElement>(),
        React.createRef<HTMLInputElement>()
    ]);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (!onlyOneDigitPattern.test(value)) {
            setTanValues(prev => ({
                ...prev,
                [name]: ""
            }));

            return;
        }

        setTanValues(prev => ({
            ...prev,
            [name]: value
        }));

        const nextInputIndex = parseInt(name.slice(3));
        focusInput(nextInputIndex);
    }

    const focusInput = (index: number) => {
        if (inputRefs.current[index]) {
            inputRefs.current[index].current?.focus();
        }
    }

    const onHandleFocus = (e: FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;

        setTanValues(prev => ({
            ...prev,
            [name]: ""
        }));
    }

    const onHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const { name } = e.target as HTMLInputElement;

        if (e.key === "Backspace") {
            setTanValues(prev => ({
                ...prev,
                [name]: ""
            }));

            const previousInputIndex = parseInt(name.slice(3)) - 2;
            focusInput(previousInputIndex);
        }
    }

    return (
        <div className={`${styles['tanInput']} ${className}`}>
            <div className="tanInput__section">
                <p className={`${styles['tanInput__text']}`}>Enter the tan:</p>
                <div className={`${styles['tanInput__wrapper']}`}>
                    <input className={`${styles['tanInput__input']}`} type="text" maxLength={1} name='tan1' value={tanValues.tan1} placeholder='-' ref={inputRefs.current[0]} onChange={onHandleChange} onKeyDown={onHandleKeyDown} onFocus={onHandleFocus} />
                    <input className={`${styles['tanInput__input']}`} type="text" maxLength={1} name='tan2' value={tanValues.tan2} placeholder='-' ref={inputRefs.current[1]} onChange={onHandleChange} onKeyDown={onHandleKeyDown} onFocus={onHandleFocus} />
                    <input className={`${styles['tanInput__input']}`} type="text" maxLength={1} name='tan3' value={tanValues.tan3} placeholder='-' ref={inputRefs.current[2]} onChange={onHandleChange} onKeyDown={onHandleKeyDown} onFocus={onHandleFocus} />
                    <input className={`${styles['tanInput__input']}`} type="text" maxLength={1} name='tan4' value={tanValues.tan4} placeholder='-' ref={inputRefs.current[3]} onChange={onHandleChange} onKeyDown={onHandleKeyDown} onFocus={onHandleFocus} />
                    <input className={`${styles['tanInput__input']}`} type="text" maxLength={1} name='tan5' value={tanValues.tan5} placeholder='-' ref={inputRefs.current[4]} onChange={onHandleChange} onKeyDown={onHandleKeyDown} onFocus={onHandleFocus} />
                    <input className={`${styles['tanInput__input']}`} type="text" maxLength={1} name='tan6' value={tanValues.tan6} placeholder='-' ref={inputRefs.current[5]} onChange={onHandleChange} onKeyDown={onHandleKeyDown} onFocus={onHandleFocus} />
                </div>
            </div>

            <div className="tanInput__section">
                <p className={`${styles['tanInput__text']}`}>The created string:</p>
                <div className={`${styles['tanInput__wrapper']}`}>
                    {Object.values(tanValues).map((value, i) => {
                        if (value) return <span key={i} className={`${styles['tanInput__text']}`}>{value}</span>;
                        else return <span key={i} className={`${styles['tanInput__text']}`}>-</span>;
                    })}
                </div>
            </div>
        </div>
    )
}
