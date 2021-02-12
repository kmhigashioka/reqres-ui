/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/react';
import { Pagination } from '../../components/Pagination';
import UserDialog from './UserDialog';
import { Table, THead, TBody, Tr, Th, Td } from '../../components/Table';
import { useAsync } from '../../utils/hooks';
import { client } from '../../utils/api-client';

function UsersList() {
  const [activePageNumber, setActivePageNumber] = React.useState(1);
  const { data: usersResponse, run, isSuccess, isLoading, error, isError } = useAsync();

  const [isUserDialogOpen, setIsUserDialogOpen] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const users = usersResponse?.data;
  const totalPages = usersResponse?.total_pages || 1;
  const selectedUser = users?.find(u => u.id === selectedUserId);

  React.useEffect(() => {
    run(client(`api/users?page=${activePageNumber}`))
  }, [activePageNumber, run]);

  function handleUserClick(userId) {
    return function () {
      setSelectedUserId(userId);
      setIsUserDialogOpen(true);
    }
  }

  function handleDismiss() {
    setIsUserDialogOpen(false);
  }

  function handlePaginate(goToPageNumber) {
    setActivePageNumber(goToPageNumber);
  }

  console.log({ users, isLoading, isError, isSuccess, usersResponse });

  const successView = isSuccess ? (
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
  ) : null;

  const errorView = isError ? (
    <div>There is an error: ${error.message}</div>
  ) : null;

  const loadingView = isLoading ? 'Loading...' : null;

  return (
    <div>
      <div css={{ width: '100vw', height: '100vh' }}>
        <div css={{
          display: 'inline-flex',
          flexDirection: 'column',
          maxHeight: 'calc(100% - 21px)',
          width: '100%',
          overflowX: 'auto',
        }}>
          {loadingView}
          {successView}
          {errorView}
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
