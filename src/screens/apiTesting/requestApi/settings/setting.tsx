import { Form, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { ReactElement } from 'react';
import { ContentJson } from '../RequestApi';

import { SettingsStyle } from './setting.styles';

export type SettingsProps = {
    setContent: React.Dispatch<
        React.SetStateAction<{
            json: ContentJson;
        }>
    >;
};

export const Settings = (props: SettingsProps): ReactElement => {
    const { setContent } = props;

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <SettingsStyle>
            <Form
                name="basic"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 22 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="facility" label="facility" rules={[{ required: true }]}>
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
                <Form.Item name="elevatorId" label="elevator" rules={[{ required: true }]}>
                    <Select placeholder="Please change elevatorId" allowClear>
                        <Option value="male">elevatorId 1</Option>s
                        <Option value="female">elevatorId 2</Option>
                        <Option value="other">elevatorId 3</Option>
                    </Select>
                </Form.Item>
            </Form>
        </SettingsStyle>
    );
};
