// title
// category
// http
// connection
// type
// endpoint
// Payload
// resource

export enum CATEGORY {
    AUTO_DOOR = 'Auto Door',
    ELEVATOR = 'Elevator',
    FIRE_ALARM = 'Fire alarm',
    NURSE_CALL_DEVICE = 'Nurse call device',
}

export type ApiConnection = {
    title: string;
    type: CATEGORY;
    mode: 'single' | 'multiple';
    component: 'select' | 'input';
};

export type payload = {
    [id: string]: any;
};

export type ApiResource = {
    [id: string]: ApiConnection;
};

export interface IpiTemplate {}
