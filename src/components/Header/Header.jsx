import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.topnav}>
            <a onClick={() => navigate('/member')}>Member</a>
            <a onClick={() => navigate('/team')}>Team</a>
            <a onClick={() => navigate('/todo')}>Todo</a>
        </div>
    )
}
export default Header;