/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

const buttonStyle = {
  default: {
    background: '#f5f5f5',
    border: '1px solid #dbdbdb',
    borderRadius: '4px',
    padding: '4px 20px',
  },
  text: {
    border: 0,
    background: 'transparent',
    color: '#66b2ff',
  },
};

const defaultStyle = {
  cursor: 'pointer',
  '&[disabled]': {
    cursor: 'unset',
  },
};

function Button({ children, type, variant, ...props }) {
  return (
    <button
      css={[defaultStyle, buttonStyle[variant]]}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'default',
};

export { Button };
