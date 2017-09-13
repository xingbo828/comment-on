import styled from 'styled-components';

export const BadgeContainer = styled.span`
  position: relative;
  line-height: 1;
  display: inline-block;
`;


const BadgeSup = styled.sup`
  position: absolute;
  height: 100%;
  border-radius: 100%;
  background-color: ${props => props.theme.dangerActionColor};
  z-index: 10;
  transform-origin: -10% center;
`;

export const BadgeDotSup = BadgeSup.extend`
  width: 100%;
`;

export const BadgeNumSup = BadgeSup.extend`
  font-weight: bold;
  border-radius: 10px;
  top: -10px;
  height: 20px;
  padding: 0 6px;
  min-width: 20px;
  color: white;
  font-size: .75rem;
  line-height: 20px;
  text-align: center;
`;
