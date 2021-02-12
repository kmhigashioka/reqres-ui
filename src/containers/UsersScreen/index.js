import * as React from 'react';
import UsersList from './UsersList';
import { ErrorBoundary } from '../../components/ErrorBoundary';

function UsersScreen() {
  return (
    <ErrorBoundary>
      <UsersList />
    </ErrorBoundary>
  );
}

export { UsersScreen };
