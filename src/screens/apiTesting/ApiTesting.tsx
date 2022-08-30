import { ExperimentOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { ApiTestingStyles } from './ApiTesting.styles';
import { ChooseTemplate } from './chooseTemplate';
import { TemplateType } from './Constant';
import { RequestApi } from './requestApi';
import { ResponseApi } from './responseApi';
import { ApiTestingProps } from './withApiTesting';

const initialPanes = [
    {
        title: 'Car call request',
        content: {
            key: 'xxx1',
            title: {
                en: 'Elevator status',
                jp: '挙筋状態',
            },
            description: {
                en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
                jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
            },
            category: 'ELEVATOR',
            connection: {
                type: 'HTTP',
                http: {
                    method: 'POST',
                    endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                    payload: {
                        facilityId: 'facilityId',
                        robotId: 'robot',
                    },
                    resource: {
                        facilityId: 'FACILITY',
                        robotId: 'ROBOT',
                    },
                },
            },
        },
        key: '1',
    },
    {
        title: 'Ride request',
        content: {
            key: 'xxx2',
            title: {
                en: 'Elevator test 1',
                jp: '挙筋状態',
            },
            description: {
                en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
                jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
            },
            category: 'ELEVATOR',
            connection: {
                type: 'HTTP',
                http: {
                    method: 'POST',
                    endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                    payload: {
                        facilityId: 'facilityId',
                        robotId: 'robot',
                    },
                    resource: {
                        facilityId: 'FACILITY',
                        robotId: 'ROBOT',
                    },
                },
            },
        },
        key: '2',
    },
    {
        title: 'Boarding request response',
        content: {
            key: 'xxx3',
            title: {
                en: 'Elevator test 2',
                jp: '挙筋状態',
            },
            description: {
                en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
                jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
            },
            category: 'ELEVATOR',
            connection: {
                type: 'HTTP',
                http: {
                    method: 'POST',
                    endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                    payload: {
                        facilityId: 'facilityId',
                        robotId: 'robot',
                    },
                    resource: {
                        facilityId: 'FACILITY',
                        robotId: 'ROBOT',
                    },
                },
            },
        },
        key: '3',
    },
    {
        title: 'Get off request',
        content: {
            key: 'xxx4',
            title: {
                en: 'Elevator test 3',
                jp: '挙筋状態',
            },
            description: {
                en: 'Used to call the elevator car from the robot management system. The elevator control sequence is started with this publish.',
                jp: 'ロボット管理システムからかごを呼び出すために使用します。 エレベーター制御シーケンスは、このパブリッシュで開始されます。',
            },
            category: 'ELEVATOR',
            connection: {
                type: 'HTTP',
                http: {
                    method: 'POST',
                    endpoint: 'https://api.rfis.jp/iot-commands/elevator/elevator-request',
                    payload: {
                        facilityId: 'facilityId',
                        robotId: 'robot',
                    },
                    resource: {
                        facilityId: 'FACILITY',
                        robotId: 'ROBOT',
                    },
                },
            },
        },
        key: '4',
    },
];

export const ApiTestingDesktop = (props: ApiTestingProps): React.ReactElement => {
    const {
        data: { template },
        dispatch,
    } = props;

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
            title: template['xxx1'].title.en,
            content: template['xxx1'] as any,
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
            <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit as any}>
                {panes.map((pane, index) => (
                    <TabPane tab={pane.title} key={pane.key}>
                        {renderContent(index)}
                    </TabPane>
                ))}
            </Tabs>
        );
    };

    const renderContent = (index: number): ReactElement => {
        return (
            <>
                <ChooseTemplate data={template} selectPane={panes[index] as any} setPane={setPaneTemp} />
                <RequestApi />
                <ResponseApi />
            </>
        );
    };

    const setPaneTemp = (pane: { title: string; content: TemplateType; key: string }) => {
        const newPanes: any = panes.map((item) => {
            if (item.key === pane.key) {
                return pane;
            }
            return item;
        });

        setPanes(newPanes);
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
