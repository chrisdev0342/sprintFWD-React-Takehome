import { Routes, Route } from 'react-router-dom';
import Member from './../pages/Member/Member';
import Team from './../pages/Team/Team';
import Todo from './../pages/Todo/Todo';
import TeamDetails from './../pages/TeamDetails/TeamDetails';

const Router = () => (
    <Routes>
        <Route path="member" element={<Member />} />
        <Route path="team-detail/:id" element={<TeamDetails />} />
        <Route path="team" element={<Team />} />
        <Route path="todo" element={<Todo />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
);
export default Router;