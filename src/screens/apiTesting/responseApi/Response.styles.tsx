import styled from 'styled-components';

export const ResponseApiStyles = styled.div`
  padding: 20px;
  border: 1px solid #f0f0f0;
  .content {
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    padding: 10px;
    height: 300px;
    overflow-y: scroll;
    scroll-behavior: smooth;

    .error {
      color: red;
    }
    .info {
      color: gray;
    }
    .warn {
      color: yellow;
    }
  }
`;
