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

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = Partial<BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>>
export type ButtonProps = NativeButtonProps & AnchorButtonProps

const Button: React.FC<ButtonProps> = (props) => {
    const {
        butType,
        disabled,
        className,
        size,
        children,
        href,
        ...restProps
    } = props
    // but, but-lg, but-primary
    const classes = classNames('btn', {
        [`btn-${butType}`]: butType,
        [`btn-${size}`]: size,
        'disable': (butType === ButtonType.Link) && disabled
    })
    if (butType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
            className={classes}
            disabled={disabled}
            {...restProps}
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