/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import ReachDialog from '@reach/dialog';
import '@reach/dialog/styles.css';

function Dialog(props) {
  return <ReachDialog {...props} style={{ padding: 0, borderRadius: '14px' }} />;
}

function DialogTitle({ children }) {
  return (
    <div
      css={{
        textAlign: 'center',
        background: '#ccc',
        borderRadius: '14px 14px 0 0',
        padding: '10px',
      }}
    >{children}</div>
  );
}

function DialogContent({ children }) {
  return (
    <div
      css={{
        padding: '20px',
      }}
    >
      {children}
    </div>
  );
}

function DialogActions({ children }) {
  return (
    <div
      css={{
        textAlign: 'center',
        padding: '10px',
      }}
    >
      {children}
    </div>
  );
}

export { Dialog, DialogTitle, DialogContent, DialogActions };
