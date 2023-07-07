// React
import { FC } from 'react'

// Asset
import imgUrl from '@assets/images/blackhound-logo.svg'

// Styles
import styles from './Header.module.scss'

interface Props {
    className?: string
}

export const Header: FC<Props> = (props) => {
    const { className } = props

    return (
        <header className={`${[styles['header']]} ${className}`}>
            <div className={`${styles['header__container']}`}>
                <img className={`${[styles['header__logo']]}`} src={imgUrl} alt="Blackhound Logo" />
                <span className={`${[styles['header__brand']]}`}>blackHound</span>
            </div>
        </header>
    )
}
