import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Member from './pages/Member/Member';
import Team from './pages/Team/Team';
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="member" element={<Member />} />
        <Route path="team" element={<Team />} />
        <Route path="todo" element={<Todo />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}
export default App;
