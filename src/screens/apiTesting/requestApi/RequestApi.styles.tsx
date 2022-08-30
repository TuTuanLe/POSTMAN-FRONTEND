import styled from 'styled-components';

export const RequestApiStyles = styled.div`
    padding: 20px;
    border: 1px solid #f0f0f0;
    border-bottom: 0px;
    .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        .input-group {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
    .header-tab {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > :nth-child(1) {
            flex: 1;
        }
    }
    .content {
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        padding: 10px;
        height: 300px;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
`;
