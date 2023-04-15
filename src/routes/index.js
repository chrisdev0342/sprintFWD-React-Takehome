import { Routes, Route } from 'react-router-dom';
import Member from './../pages/Member/Member';
import Team from './../pages/Team/Team';
import Todo from './../pages/Todo/Todo';
import TeamDetails from './../pages/TeamDetails/TeamDetails';

const Router = () => (
    <Routes>
        <Route path="members" element={<Member />} />
        <Route path="team-details/:id" element={<TeamDetails />} />
        <Route path="teams" element={<Team />} />
        <Route path="todos" element={<Todo />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
);
export default Router;