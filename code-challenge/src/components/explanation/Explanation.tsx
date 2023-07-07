// React
import { FC } from 'react'

// Styles
import styles from './Explanation.module.scss'

interface Props {
    className?: string,
}

export const Explanation: FC<Props> = (props) => {
    const { className } = props

    return (
        <div className={`${styles['explanation']} ${className}`}>
            <h1 className={`${styles['explanation__headline']}`}>The frontend challenge</h1>
            <p className={`${styles['explanation__text']}`}>Hey!</p>
            <p className={`${styles['explanation__text']}`}>Here you can see the user interface that needs to be created by you.</p>
        </div>
    )
}
