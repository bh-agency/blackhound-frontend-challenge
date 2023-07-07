// React
import { FC } from 'react'

// Styles
import styles from './Container.module.scss'

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

export const Container: FC<Props> = (props) => {
    const { children } = props

    return (
        <div className={`${styles['container']}`}>
            {children}
        </div>
    )
}
