/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

function Table({ children, className }) {
  return (
    <table
      className={className}
      css={[
        {
          borderCollapse: 'separate',
          borderSpacing: 0,
          border: '1px solid #e9e9e9',
        },
      ]}
    >
      {children}
    </table>
  );
}

function THead({ children }) {
  return <thead>{children}</thead>;
}

function TBody({ children }) {
  return <tbody>{children}</tbody>;
}

function Tr({ children, className, ...props }) {
  return (
    <tr
      className={className}
      css={{
        '&:nth-of-type(2n)': {
          background: '#f0f0f0',
        },
        '&:nth-of-type(2n+1)': {
          background: '#ffffff',
        },
      }}
      {...props}
    >{children}</tr>
  );
}

function Th({ children, className }) {
  return (
    <th
      className={className}
      css={[
        {
          background: '#4d4d4d',
          borderRight: '1px solid #e9e9e9',
          borderBottom: '1px solid #e9e9e9',
          color: '#ffffff',
          fontWeight: 'normal',
          padding: '4px 24px',
          whiteSpace: 'nowrap',
        },
      ]}
    >{children}</th>
  );
}

function Td({ children, className }) {
  return (
    <td
      className={className}
      css={{
        background: 'inherit',
        borderRight: '1px solid #e9e9e9',
        borderBottom: '1px solid #e9e9e9',
        color: '#00994d',
        padding: '4px 24px',
        textAlign: 'center',
      }}
    >
      {children}
    </td>
  );
}

export { Table, THead, TBody, Tr, Th, Td };
