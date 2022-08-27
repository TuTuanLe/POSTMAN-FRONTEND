import React, { ComponentType } from 'react';

export interface ApiTestingProps {
  data: {
    template: any;
  };
  dispatch: {
    onFetchProject?: () => Promise<void>;
    onFetchRoBot?: () => Promise<void>;
    onFetchEquipment?: () => Promise<void>;
  };
}

export const withAptTestingController = <P,>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  return (props: P) => {
    const LogicProps: ApiTestingProps = {
      data: {
        template: '',
      },
      dispatch: {},
    };

    return <Component {...props} {...LogicProps} />;
  };
};
