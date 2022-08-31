import { SendOutlined } from '@ant-design/icons';
import { Button, Input, Select, Tabs } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { ReactElement, useRef, useState } from 'react';
import { METHOD } from '../Constant';

import { RequestApiStyles } from './RequestApi.styles';
import { Settings } from './settings';
import { Payload } from './payload';
const initialPanes = [
    { title: 'Settings', key: '1' },
    { title: 'Payload', key: '2' },
];

const enum PANES {
    SETTINGS = '1',
    PAYLOAD = '2',
}

export type ContentJson = {
    [id: string]: any;
};

export const RequestApi = (): React.ReactElement => {
    const [activeKey, setActiveKey] = useState(initialPanes[0].key);
    const [panes] = useState(initialPanes);
    const { TabPane } = Tabs;
    const newTabIndex = useRef<number>(0);

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
    };

    const renderTabs = (): ReactElement => {
        return (
            <Tabs onChange={onChange} activeKey={activeKey}>
                {panes.map((pane) => (
                    <TabPane tab={pane.title} key={pane.key} />
                ))}
            </Tabs>
        );
    };

    const [content, setContent] = useState<{ json: ContentJson }>({ json: {} });

    const renderContentForRequest = (painKey: string): ReactElement => {
        switch (painKey) {
            case PANES.SETTINGS:
                return <Settings content={content} setContent={setContent} />;
            case PANES.PAYLOAD:
                return <Payload content={content} setContent={setContent} />;
            default:
                return <></>;
        }
    };

    return (
        <RequestApiStyles>
            <div className="input">
                <Input.Group compact className="input-group">
                    <Select defaultValue={METHOD.POST}>
                        {Object.entries(METHOD).map(([key, value]) => {
                            return <Option value={key}>{value}</Option>;
                        })}
                    </Select>
                    <Input defaultValue="https://translate.google.com/?sl=en&tl=vi&op=translate" />
                </Input.Group>

                <Button type="primary">
                    <SendOutlined />
                    send
                </Button>
            </div>

            <div className="header-tab">
                {renderTabs()}
                <Button type="text">Restore</Button>
            </div>
            <div className="content">{renderContentForRequest(activeKey)}</div>
        </RequestApiStyles>
    );
};
