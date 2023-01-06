import classNames from 'classnames/bind';

import styles from './Button.module.scss';

function Button({ to, href, children,
    className, leftIcon,
    rightIcon,
    onClick,
    ...passProps }) {

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className
    });

    return (<Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>);
}

export default Button;