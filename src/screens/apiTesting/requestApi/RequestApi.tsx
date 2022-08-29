import { SendOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Tabs } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { ReactElement, useRef, useState } from 'react';
import { METHOD } from '../Constant';
import { JSONEditor } from 'svelte-jsoneditor';

import { RequestApiStyles } from './RequestApi.styles';
import JsonEditor from 'svelte-jsoneditor/components/JSONEditor.svelte';
import { connect } from 'http2';
import { EditJsonPayload } from './editJsonPayload';
const initialPanes = [
    { title: 'Settings', key: '1' },
    { title: 'Payload', key: '2' },
];

const enum PANES {
    SETTINGS = '1',
    PAYLOAD = '2',
}

export const RequestApi = (): React.ReactElement => {
    const [activeKey, setActiveKey] = useState(initialPanes[0].key);
    const [panes] = useState(initialPanes);
    const { TabPane } = Tabs;
    const newTabIndex = useRef(0);

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

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const renderContentForRequest = (painKey: string): ReactElement => {
        switch (painKey) {
            case PANES.SETTINGS:
                return (
                    <div className="content">
                        <div className="my-editor">
                            <EditJsonPayload
                                content={content}
                                readOnly={readOnly}
                                onChange={setContent}
                            />
                        </div>
                    </div>
                );
            case PANES.PAYLOAD:
                return (
                    <div className="content">
                        <Form
                            name="basic"
                            labelCol={{ span: 2 }}
                            wrapperCol={{ span: 22 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="facility"
                                label="facility"
                                rules={[{ required: true }]}
                            >
                                <Select placeholder="Please change facilityId" allowClear>
                                    <Option value="male">facilityId 1</Option>
                                    <Option value="female">facilityId 2</Option>
                                    <Option value="other">facilityId 3</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="robotId" label="robot" rules={[{ required: true }]}>
                                <Select placeholder="Please change robotId" allowClear>
                                    <Option value="male">robotId 1</Option>
                                    <Option value="female">robotId 2</Option>
                                    <Option value="other">robotId 3</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="elevatorId"
                                label="elevator"
                                rules={[{ required: true }]}
                            >
                                <Select placeholder="Please change elevatorId" allowClear>
                                    <Option value="male">elevatorId 1</Option>s
                                    <Option value="female">elevatorId 2</Option>
                                    <Option value="other">elevatorId 3</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </div>
                );

            default:
                return <></>;
        }
    };

    const [content, setContent] = useState({
        json: {
            facilityId: 'string',
            robotId: 'string',
            nurseCallDeviceId: 'string',
            elevatorId: 'string',
        },
        text: undefined,
    });

    const [showEditor, setShowEditor] = useState<boolean>(true);
    const [readOnly, setReadOnly] = useState<boolean>(false);

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
            {renderContentForRequest(activeKey)}
        </RequestApiStyles>
    );
};
