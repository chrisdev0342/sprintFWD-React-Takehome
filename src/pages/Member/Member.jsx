import './style.css';
const memberData = require('./../../data/members.json');

const Member = () => {
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
                        memberData?.members?.length > 0 &&
                        memberData.members.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item?.team?.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Member;