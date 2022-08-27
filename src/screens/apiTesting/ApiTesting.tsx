import { ExperimentOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import React, { ReactElement, useRef, useState } from 'react';
import { ApiTestingStyles } from './ApiTesting.styles';
import { ChooseTemplate } from './chooseTemplate';
import { RequestApi } from './requestApi';
import { ResponseApi } from './responseApi';

const initialPanes = [
  { title: 'Car call request', content: 'Content of Tab 1', key: '1' },
  { title: 'Ride request', content: 'Content of Tab 2', key: '2' },
  {
    title: 'Boarding request response',
    content: 'Content of Tab 3',
    key: '3',
  },
  {
    title: 'Get off request',
    content: 'get off request',
    key: '4',
  },
];

export const ApiTestingDesktop = (): React.ReactElement => {
  const [activeKey, setActiveKey] = useState(initialPanes[0].key);
  const [panes, setPanes] = useState(initialPanes);
  const { TabPane } = Tabs;
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...panes];
    newPanes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: newActiveKey,
    });
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  const renderTabs = (): ReactElement => {
    return (
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit as any}
      >
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key}>
            {renderContent()}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  const renderContent = (): ReactElement => {
    return (
      <>
        <ChooseTemplate />
        <RequestApi />
        <ResponseApi />
      </>
    );
  };

  return (
    <ApiTestingStyles>
      <div className="header-api-testing">
        <p className="title">
          <ExperimentOutlined /> Api Testing
        </p>
      </div>

      {renderTabs()}
    </ApiTestingStyles>
  );
};
