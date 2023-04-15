import './style.css';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
const memberData = require('./../../data/members.json');

const MemberTable = (props) => {
    const { teamId } = props;
    const navigate = useNavigate();
    const members = teamId ? memberData.members.filter(item => item.team.id == teamId) : memberData.members;
    return (
        <div className='member-container'>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Team Name</th>
                    </tr>
                    {
                        members?.length > 0 &&
                        members.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td className={!teamId && 'link'} onClick={!teamId ? () => navigate(`/team-details/${item.team.id}`) : undefined}>{item?.team?.name}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

MemberTable.propTypes = {
    teamId: PropTypes.string,
};

export default MemberTable;