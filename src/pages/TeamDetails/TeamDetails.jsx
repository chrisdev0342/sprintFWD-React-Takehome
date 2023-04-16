import { useParams } from 'react-router-dom';
import styles from './TeamDetails.module.css';
import MemberTable from '../../components/MemberTable/MemberTable';
import { useNavigate } from 'react-router-dom';
const data = require('./../../data/teams.json');

const TeamDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const teamDetail = data.teams.find(item => item.id == id);

    return (
        <>
            <h4 className={`pointer`} onClick={() => navigate('/members')}>&lt; Back</h4>
            <div className={styles.teamDetailContainer}>
                <div className={styles.teamDetailTop}>
                    <h3>Team Detail</h3>
                    <p>ID: {teamDetail.id}</p>
                    <p>Name: {teamDetail.name}</p>
                    <p>Total Member: {teamDetail.member_count}</p>
                </div>
                <MemberTable teamId={id} />
            </div>
        </>
    )
}
export default TeamDetails;