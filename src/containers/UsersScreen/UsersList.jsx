function UsersList({ users, activePageNumber, handlePaginate, totalPages }) {
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
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button disabled={activePageNumber === 1} type="button" onClick={handlePaginate(1)}>{'<<'}</button>
        <button disabled={activePageNumber === 1} type="button" onClick={handlePaginate(activePageNumber - 1)}>{'<'}</button>
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button type="button" onClick={handlePaginate(pageNumber)}>{pageNumber}</button>
          );
        })}
        <button disabled={activePageNumber === totalPages} type="button" onClick={handlePaginate(activePageNumber + 1)}>{'>'}</button>
        <button disabled={activePageNumber === totalPages} type="button" onClick={handlePaginate(totalPages)}>{'>>'}</button>
      </div>
    </div>
  );
}

export default UsersList;
