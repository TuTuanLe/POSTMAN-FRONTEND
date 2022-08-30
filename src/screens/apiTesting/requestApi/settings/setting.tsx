import { Form, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { ReactElement } from 'react';
import { ContentJson } from '../RequestApi';

import { SettingsStyle } from './setting.styles';

export type SettingsProps = {
    content: {
        json: ContentJson;
    };
    setContent: React.Dispatch<
        React.SetStateAction<{
            json: ContentJson;
        }>
    >;
};

export const Settings = (props: SettingsProps): ReactElement => {
    const { content, setContent } = props;

    return (
        <SettingsStyle>
            <Form labelCol={{ span: 2 }} wrapperCol={{ span: 22 }}>
                <Form.Item name="facility" label="facility" rules={[{ required: true }]}>
                    <Select
                        onChange={(value) => {
                            setContent({
                                // ...content,
                                json: {
                                    ...content.json,
                                    facility: value,
                                },
                            });
                        }}
                        placeholder="Please change facilityId"
                    >
                        <Option value="facilityId1">facilityId 1</Option>
                        <Option value="facilityId2">facilityId 2</Option>
                        <Option value="facilityId3">facilityId 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="robotId" label="robot" rules={[{ required: true }]}>
                    <Select
                        onChange={(value) => {
                            setContent({
                                // ...content,
                                json: {
                                    ...content.json,
                                    robot: value,
                                },
                            });
                        }}
                        placeholder="Please change robotId"
                    >
                        <Option value="robotId1">robotId 1</Option>
                        <Option value="robotId2">robotId 2</Option>
                        <Option value="robotId3">robotId 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="elevatorId" label="elevator" rules={[{ required: true }]}>
                    <Select
                        onChange={(value) => {
                            setContent({
                                // ...content,
                                json: {
                                    ...content.json,
                                    elevator: value,
                                },
                            });
                        }}
                        placeholder="Please change elevatorId"
                    >
                        <Option value="elevatorId1">elevatorId 1</Option>
                        <Option value="elevatorId2">elevatorId 2</Option>
                        <Option value="elevatorId3">elevatorId 3</Option>
                    </Select>
                </Form.Item>
            </Form>
        </SettingsStyle>
    );
};
