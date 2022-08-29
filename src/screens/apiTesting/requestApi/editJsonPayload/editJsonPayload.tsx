import { useEffect, useRef } from 'react';
import { EditJsonPayloadStyle } from './editJsonPayload.styles';
import { JSONEditor, Mode } from 'vanilla-jsoneditor';

export declare interface SvelteComponentConstructor {
    content: {
        json: {
            facilityId: string;
            robotId: string;
            nurseCallDeviceId: string;
            elevatorId: string;
        };
        text: any;
    };
    readOnly?: boolean;
    onChange?: React.Dispatch<
        React.SetStateAction<{
            json: {
                facilityId: string;
                robotId: string;
                nurseCallDeviceId: string;
                elevatorId: string;
            };
            text: any;
        }>
    >;
}

export const EditJsonPayload = (props: SvelteComponentConstructor) => {
    const refContainer = useRef(null);
    const refEditor = useRef(null);

    useEffect(() => {
        refEditor.current = new JSONEditor({
            target: refContainer.current,
            props: {
                mode: Mode.text,
            },
        });

        return () => {
            if (refEditor.current) {
                refEditor.current.destroy();
                refEditor.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (refEditor.current) {
            refEditor.current.updateProps(props);
        }
    }, [props]);

    return <EditJsonPayloadStyle ref={refContainer}></EditJsonPayloadStyle>;
};
