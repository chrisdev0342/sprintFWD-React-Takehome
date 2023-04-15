import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Member = lazy(() => import('./../pages/Member/Member'));
const Team = lazy(() => import('./../pages/Team/Team'))
const Todo = lazy(() => import('./../pages/Todo/Todo'))
const TeamDetails = lazy(() => import('./../pages/TeamDetails/TeamDetails'))

const Router = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="members" element={<Member />} />
            <Route path="team-details/:id" element={<TeamDetails />} />
            <Route path="teams" element={<Team />} />
            <Route path="todos" element={<Todo />} />
            <Route path="*" element={<p className='text-align-center'>There's nothing here: 404!</p>} />
        </Routes>
    </Suspense>
);
export default Router;