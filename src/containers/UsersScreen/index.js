import * as React from 'react';
import { useAsync } from '../../utils/hooks';
import { client } from '../../utils/api-client';
import UsersList from './UsersList';

function UsersScreen() {
  const [activePageNumber, setActivePageNumber] = React.useState(1);
  const { data: usersResponse, run, isSuccess, isLoading } = useAsync();

  React.useEffect(() => {
    run(client(`api/users?page=${activePageNumber}`))
  }, [activePageNumber, run]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function handlePaginate(goToPageNumber) {
    return function () {
      setActivePageNumber(goToPageNumber);
    };
  }

  if (isSuccess) {
    return (
      <UsersList
        users={usersResponse.data}
        activePageNumber={activePageNumber}
        handlePaginate={handlePaginate}
        totalPages={usersResponse.total_pages}
      />
    );
  }

  return null;
}

export { UsersScreen };
