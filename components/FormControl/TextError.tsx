import React from 'react';

type TextErrorProps = {
  children: string;
};

function TextError(props: TextErrorProps) {
  const { children } = props;
  return (
    <div style={{ fontSize: '.7rem', color: 'red', position: 'absolute' }}>
      {children}
    </div>
  );
}

export default TextError;
