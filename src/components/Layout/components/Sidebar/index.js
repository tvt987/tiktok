import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <Button state="outline-large">Log in</Button>
                <span></span>
                <Button state="create-effect">
                    <FontAwesomeIcon icon={faWandMagicSparkles}></FontAwesomeIcon>
                    Create Effect
                </Button>
            </div>
        </aside>
    );
}

export default SideBar;
