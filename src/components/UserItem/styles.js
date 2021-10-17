import styled from 'styled-components';

export const TableRow = styled.tr`
  justify-content: space-around;
`;
export const TableCol = styled.td`
  border-bottom: thin solid #bbb;
  padding: 8px;
  vertical-align: middle;
  &.like:hover {
    color: red;
    cursor: pointer;
  }
`;

