/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as colors from '../styles/colors';

function Table({ children, className }) {
  return (
    <table
      className={className}
      css={[
        {
          borderCollapse: 'separate',
          borderSpacing: 0,
          border: `1px solid ${colors.tableBorder}`,
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
          background: colors.tableRowEvenBackground,
        },
        '&:nth-of-type(2n+1)': {
          background: colors.tableRowOddBackground,
        },
      }}
      {...props}
    >{children}</tr>
  );
}

const commonCellStyle = {
  borderRight: `1px solid ${colors.tableBorder}`,
  borderBottom: `1px solid ${colors.tableBorder}`,
  padding: '4px 24px',
};

function Th({ children, className }) {
  return (
    <th
      className={className}
      css={[
        {
          ...commonCellStyle,
          background: colors.tableHeaderBackground,
          color: colors.tableHeaderText,
          fontWeight: 'normal',
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
        ...commonCellStyle,
        background: 'inherit',
        color: colors.primary,
        textAlign: 'center',
      }}
    >
      {children}
    </td>
  );
}

export { Table, THead, TBody, Tr, Th, Td };
