import React, { FC } from 'react';
import './App.css';
import { ApiTesting } from './screens/apiTesting';

const App: FC = () => (
  <ApiTesting
    data={{
      template: {},
    }}
    dispatch={{
      onFetchProject: undefined,
      onFetchRoBot: undefined,
      onFetchEquipment: undefined,
    }}
  />
);

export default App;
