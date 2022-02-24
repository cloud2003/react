import styled from 'styled-components';

export const MainBox = styled.div`
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const FlexCol = styled.div`
  &:first-child {
    flex: 0 1 150px;
  }
  &:last-child {
    flex: 1 1 auto;
  }
`;
