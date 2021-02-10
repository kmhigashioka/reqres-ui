import Dialog from '@reach/dialog';
import '@reach/dialog/styles.css';

function UserDialog(props) {
  const { onDismiss, user } = props;

  return (
    <Dialog {...props} aria-label="User Modal">
      <div>
        <p>Profile</p>
      </div>
      <div>
        <img alt="User avatar" src={user.avatar} />
        <p>Id:</p><p>{user.id}</p>
        <p>First Name:</p><p>{user.first_name}</p>
        <p>Last Name:</p><p>{user.last_name}</p>
        <p>Email:</p><p>{user.email}</p>
      </div>
      <div>
        <button type="button" onClick={onDismiss}>Close</button>
      </div>
    </Dialog>
  );
}

export default UserDialog;
