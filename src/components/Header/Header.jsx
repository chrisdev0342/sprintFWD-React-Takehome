import styles from './Header.module.css';
import { useNavigate ,} from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.topnav}>
            <a onClick={() => navigate('/members')}>Member</a>
            <a onClick={() => navigate('/teams')}>Team</a>
            <a onClick={() => navigate('/todos')}>Todo</a>
        </div>
    )
}
export default Header;