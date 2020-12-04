import { Layout } from '@components/common';
import React from 'react';

const Demo = (): JSX.Element => {
  return (
    <div>
      <h1 className="border-solid border-4 border-indigo-600">From demo</h1>
    </div>
  );
};

Demo.Layout = Layout;

export default Demo;
