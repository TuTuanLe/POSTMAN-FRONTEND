import { Button } from 'antd';
import React from 'react';
import { ApiTestingStyles } from './ApiTesting.styles';

export const ApiTestingDesktop = (): React.ReactElement => {
  return (
    <ApiTestingStyles>
      <Button type="primary">test</Button>
    </ApiTestingStyles>
  );
};
