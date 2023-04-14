import './style.css';
const data = require('./../../data/teams.json');

const Team = () => {
    return (
        <div className='member-container'>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Count</th>
                    </tr>
                    {
                        data?.teams?.length > 0 &&
                        data.teams.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.member_count}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Team;