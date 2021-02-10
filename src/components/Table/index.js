/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

function Table({ children }) {
  return <div>{children}</div>;
}

function THead({ children }) {
  return <div>{children}</div>;
}

function TBody({ children }) {
  return <div>{children}</div>;
}

function Tr({ children }) {
  return (
    <div
      css={{
        '&:nth-of-type(2n)': {
          background: '#f0f0f0',
        },
        '&:nth-of-type(2n+1)': {
          background: '#ffffff',
        },
        display: 'flex',
      }}
    >{children}</div>
  );
}

function Th({ children }) {
  return (
    <div
      css={{
        background: '#4d4d4d',
        border: '1px solid #e9e9e9',
        color: '#ffffff',
        fontWeight: 'normal',
        padding: '8px 24px',
        position: 'sticky',
        top: 0,
      }}
    >{children}</div>
  );
}

function ScrollableTh({ children }) {
  return <div css={{ display: 'flex', overflow: 'auto' }}>{children}</div>;
}

function Td({ children }) {
  return <div css={{
    background: 'inherit',
    border: '1px solid #e9e9e9',
    color: '#00994d',
    padding: '8px 24px',
  }}>{children}</div>
}

export { Table, THead, TBody, Tr, Th, Td, ScrollableTh };
