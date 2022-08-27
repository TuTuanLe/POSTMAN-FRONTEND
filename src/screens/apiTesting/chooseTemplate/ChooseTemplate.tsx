import { DownOutlined, HolderOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { ChooseTemplateStyles } from './ChooseTemplate.styles';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '1-1',
            label: '1st menu item',
          },
          {
            key: '1-2',
            label: '2nd menu item',
          },
        ],
      },
      {
        key: '2',
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '2-1',
            label: '1st menu item',
          },
          {
            key: '2-2',
            label: '2nd menu item',
          },
        ],
      },
    ]}
  />
);

export const ChooseTemplate = (): React.ReactElement => {
  return (
    <ChooseTemplateStyles>
      <div className="header">
        <Button className="btn" type="primary">
          <HolderOutlined /> Elevator
        </Button>

        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Cascading menu
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <p className="description">
        Used to call the elevator car from the robot management system. The
        elevator control sequence is started with this publish.
      </p>
    </ChooseTemplateStyles>
  );
};
