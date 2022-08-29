import {
    CompressOutlined,
    DownOutlined,
    GiftOutlined,
    HolderOutlined,
    InboxOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React, { ReactElement, useEffect } from 'react';
import { ChooseTemplateStyles } from './ChooseTemplate.styles';
import { CATEGORY, TemplateType } from '../Constant';

export interface ChooseTemplateProps {
    data: { [key: string]: TemplateType };
    selectPane: {
        title: string;
        content: TemplateType;
        key: string;
    };
    setPane: (pane: { title: string; content: TemplateType; key: string }) => void;
}

export const ChooseTemplate = (props: ChooseTemplateProps): React.ReactElement => {
    const { data, selectPane, setPane } = props;

    const dataGroupByCategory = Object.values(data).reduce(
        (previousValue: any, currentValue: any) => {
            let key = currentValue['category'];
            if (!previousValue[key]) {
                previousValue[key] = [];
            }
            previousValue[key].push(currentValue);

            return previousValue;
        },
        [],
    );

    const menu = (
        <Menu
            onClick={({ key }) => {
                setPane({ ...selectPane, title: data[key].title.en, content: data[key] });
            }}
        >
            {Object.entries(dataGroupByCategory).map(([key, value]): ReactElement => {
                let temp = value as TemplateType[];
                return (
                    <Menu.ItemGroup
                        title={
                            <>
                                <InboxOutlined />
                                {CATEGORY.ROBOT}
                            </>
                        }
                    >
                        {temp.map((item) => {
                            return <Menu.Item key={item.key}>{item.title.en}</Menu.Item>;
                        })}
                    </Menu.ItemGroup>
                );
            })}
        </Menu>
    );
    console.log(selectPane);
    return (
        <ChooseTemplateStyles>
            <div className="header">
                <Button className="btn" type="primary">
                    <HolderOutlined />
                    {selectPane.content.category}
                </Button>

                <Dropdown overlay={menu} trigger={['click']}>
                    <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                        style={{ color: '#d46b08', fontWeight: 'bold' }}
                    >
                        {selectPane.title}

                        <DownOutlined />
                    </a>
                </Dropdown>
            </div>
            <p className="description">
                Used to call the elevator car from the robot management system. The elevator control
                sequence is started with this publish.
            </p>
        </ChooseTemplateStyles>
    );
};
