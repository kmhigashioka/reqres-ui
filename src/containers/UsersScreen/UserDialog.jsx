/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from '../../components/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '../../components/Dialog';

const labelSpan = {
  display: 'inline-block',
  marginRight: '10px',
  minWidth: '100px',
  textAlign: 'right',
};

const labelSpanValue = {
  color: '#00994d',
};

function UserDialog(props) {
  const { onDismiss, user } = props;

  return (
    <Dialog {...props} aria-label="User Modal">
      <DialogTitle>
        Profile
      </DialogTitle>
      <DialogContent>
        <div css={{ textAlign: 'center', marginBottom: '20px' }}>
          <img css={{ height: '100px' }} alt="User avatar" src={user.avatar} />
        </div>
        <div>
          <span css={labelSpan}>Id:</span>
          <span css={labelSpanValue}>{user.id}</span>
        </div>
        <div>
          <span css={labelSpan}>First Name:</span>
          <span css={labelSpanValue}>{user.first_name}</span>
        </div>
        <div>
          <span css={labelSpan}>Last Name:</span>
          <span css={labelSpanValue}>{user.last_name}</span>
        </div>
        <div>
          <span css={labelSpan}>Email:</span>
          <span css={labelSpanValue}>{user.email}</span>
        </div>
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={onDismiss}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserDialog;
