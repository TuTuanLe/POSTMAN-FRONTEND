import React, { ComponentType } from 'react';
import { TemplateType, FETCH_DATA } from './Constant';

export interface ApiTestingProps {
  data: {
    template: { [key: string]: TemplateType };
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
        template: FETCH_DATA,
      },
      dispatch: {},
    };

    return <Component {...props} {...LogicProps} />;
  };
};
