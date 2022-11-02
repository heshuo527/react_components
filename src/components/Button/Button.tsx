import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    large = 'lg',
    Small = 'sl'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    className?: string
    disabled?: boolean
    size?: ButtonSize
    butType?: ButtonType
    children: React.ReactNode
    href?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        disabled,
        size,
        butType,
        children,
        href,
    } = props
    // but, but-lg, but-primary
    const classes = classNames('but', {
        [`but-${butType}`]: butType,
        [`but-${size}`]: size,
        'disable': (butType === ButtonType.Link) && disabled
    })
    if (butType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
            className={classes}
            disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    butType: ButtonType.Default
}

export default Button