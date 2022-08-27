import { Tabs } from 'antd';
import React, { ReactElement, useRef, useState } from 'react';
import { ResponseApiStyles } from './Response.styles';

const initialPanes = [
  {
    title: 'Console',
    key: '3',
  },
  { title: 'Response', key: '1' },
  { title: 'Response from IoT', key: '2' },
];

const enum PANES {
  CONSOLE = '3',
  RESPONSE = '1',
  RESPONSE_FROM_IOT = '2',
}

export const ResponseApi = (): React.ReactElement => {
  const [activeKey, setActiveKey] = useState(initialPanes[0].key);
  const [panes, setPanes] = useState(initialPanes);
  const { TabPane } = Tabs;
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const renderTabs = (): ReactElement => {
    return (
      <Tabs onChange={onChange} activeKey={activeKey}>
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key}>
            {renderContentForResponse(pane.key)}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  const renderContentForResponse = (painKey: string): ReactElement => {
    switch (painKey) {
      case PANES.RESPONSE:
        return <div className="content">response</div>;
      case PANES.RESPONSE_FROM_IOT:
        return <div className="content">response from Iot</div>;
      case PANES.CONSOLE:
        return (
          <div className="content">
            <p className="error">
              [22/01/2000] ERROR sending timeout 2 If an application
              redirects the user to the Keycloak login page, and it sits
              there for more than the "Login timeout" (default 5 minutes),
              then when the users enters a username and password, instead
              of a login, she is greeted
            </p>
            <p className="info">
              [22/01/2000] ERROR sending timeout is an attack that permits
              an attacker to hijack a valid user session. The attack
              explores a limitation in the way the web application manages
              the session ID, more specifically the vulnerable web
              application
            </p>
            <p className="info">[22/01/2000] ERROR sending timeout</p>
            <p className="warn">
              [22/01/2000] ERROR sending timeout attack that permits an
              attacker to hijack a valid user session. The attack explores
              a limitation
            </p>
            <p className="warn">[22/01/2000] ERROR sending timeout</p>
            <p className="error">
              [22/01/2000] ERROR sending timeout fairly good explanation on
              how the session fixation attacks works
            </p>
          </div>
        );
      default:
        return <></>;
    }
  };

  return <ResponseApiStyles>{renderTabs()}</ResponseApiStyles>;
};
