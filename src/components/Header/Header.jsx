import styles from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const memberClass = location.pathname.match(/^\/members/) ? styles.active : "";
    const teamClass = location.pathname.match(/^\/teams/) ? styles.active : "";
    const todoClass = location.pathname.match(/^\/todos/) ? styles.active : "";

    return (
        <div className={styles.topnav}>
            <a className={memberClass} onClick={() => navigate('/members')}>Member</a>
            <a className={teamClass} onClick={() => navigate('/teams')}>Team</a>
            <a className={todoClass} onClick={() => navigate('/todos')}>Todo</a>
        </div>
    )
}
export default Header;