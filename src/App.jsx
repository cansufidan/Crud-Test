import { useState } from 'react';
import UserForm from './components/form/UserForm';
import UserList from './components/list/UserList';

function App() {
  const [users, setUsers] = useState([
    { name: 'Mehmet', email: 'mehmet43@gmail.com' },
    { name: 'Ali', email: 'alisd@gmail.com' },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-3 d-flex flex-column gap-5">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
