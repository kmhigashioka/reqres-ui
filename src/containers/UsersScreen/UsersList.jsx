/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import { Pagination } from '../../components/Pagination';
import UserDialog from './UserDialog';
import { Table, THead, TBody, Tr, Th, Td } from '../../components/Table';

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
      <div css={{ width: '250px', height: '150px' }}>
        <div css={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 21px)',
          width: '100%',
          overflowX: 'auto',
        }}>
          <Table css={{ width: '100%' }}>
            <THead>
              <Tr>
                <Th css={{ position: 'sticky', top: 0, left: 0, zIndex: 3 }}>
                  ID
                </Th>
                <Th css={{ position: 'sticky', top: 0, zIndex: 2 }}>FIRST NAME</Th>
                <Th css={{ position: 'sticky', top: 0, zIndex: 2 }}>LAST NAME</Th>
                <Th css={{ position: 'sticky', top: 0, zIndex: 2 }}>EMAIL</Th>
              </Tr>
            </THead>
            <TBody>
              {users.map(user => (
                <Tr key={user.id} onClick={handleUserClick(user.id)} css={{ cursor: 'pointer' }}>
                  <Td css={{ position: 'sticky', left: 0 }}>{user.id}</Td>
                  <Td>{user.first_name}</Td>
                  <Td>{user.last_name}</Td>
                  <Td>{`${user.email}`}</Td>
                </Tr>
              ))}
            </TBody>
          </Table>
        </div>
        <Pagination onPaginate={handlePaginate} pageNumber={activePageNumber} totalPages={totalPages} />
      </div>
      {selectedUser
        ? <UserDialog isOpen={isUserDialogOpen} onDismiss={handleDismiss} user={selectedUser} />
        : null}
    </div>
  );
}

export default UsersList;
