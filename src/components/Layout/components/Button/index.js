import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Button({ to, href, children, state, onClick, ...passProps }, ref) {
    let Component = 'button';
    const classes = cx('wrapper', {
        [state]: state,
    });
    const props = {
        onClick,
        ref,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default forwardRef(Button);
