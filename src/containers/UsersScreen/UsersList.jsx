import * as React from 'react';
import { Pagination } from '../../components/Pagination';
import UserDialog from './UserDialog';

function UsersList({ users, activePageNumber, handlePaginate, totalPages }) {
  const [isUserDialogOpen, setIsUserDialogOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const selectedUser = users.find(u => u.id === selectedUserId);

  function handleUserClick(userId) {
    return function () {
      setSelectedUserId(userId);
      setIsUserDialogOpen(true);
    }
  }

  function handleDismiss() {
    setIsUserDialogOpen(false);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={handleUserClick(user.id)}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination onPaginate={handlePaginate} pageNumber={activePageNumber} totalPages={totalPages} />
      {selectedUser
        ? <UserDialog isOpen={isUserDialogOpen} onDismiss={handleDismiss} user={selectedUser} />
        : null}
    </div>
  );
}

export default UsersList;
