import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, state, onClick, ...passProps }) {
    let Component = 'button';
    const classes = cx('wrapper', {
        [state]: state,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = 'Link';
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

export default Button;
