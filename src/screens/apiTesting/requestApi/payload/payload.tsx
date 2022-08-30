import React, { ReactElement } from 'react';
import { EditJsonPayload } from '../editJsonPayload';
import { ContentJson } from '../RequestApi';
import { PayloadStyle } from './payload.styles';

export type PayloadProps = {
    content: { json: ContentJson };
    setContent: React.Dispatch<
        React.SetStateAction<{
            json: ContentJson;
        }>
    >;
};

export const Payload = (props: PayloadProps): ReactElement => {
    const { content, setContent } = props;
    return (
        <PayloadStyle>
            <EditJsonPayload content={content} onChange={setContent} />
        </PayloadStyle>
    );
};
