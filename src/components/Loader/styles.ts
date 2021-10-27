import styled, {keyframes} from 'styled-components';
// eslint-disable-next-line no-unused-vars
interface Props {
    long?: boolean,
    short?: boolean
}

const long = keyframes`
  0% {left: -35%;right: 100%}
  60% {left: 100%;right: -90%}
  100% {left: 100%;right: -90%}
`;

const short = keyframes`
  0% {left: -200%;right: 100%}
  60% {left: 107%;right: -8%}
  100% {left: 107%;right: -8%}
`;

export const Line = styled.span<Props>`
  position: absolute;
  height: 4px;
  overflow: hidden;
  background-color: rgb(219, 112, 147);
  background-clip: padding-box;
  display: block;
  border-radius: 2px;
  will-change: left, right;
  animation-fill-mode: forwards;
  animation: ${(props) => props.long ? long : short} ${2.1}s ${(props) => props.short ? `${1.15}s` : ''}
    ${(props) => props.long ? 'cubic-bezier(0.65, 0.815, 0.735, 0.395)' : 'cubic-bezier(0.165, 0.84, 0.44, 1)'} infinite;
`;

export const Wrapper = styled.span`
  position: relative;
  width: 100px};
  height: 4px;
  overflow: hidden;
  background-color: rgba(219, 112, 147, 0.2)};
  background-clip: padding-box;
`;
