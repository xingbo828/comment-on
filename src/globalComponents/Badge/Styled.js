import styled from 'styled-components';

export const BadgeContainer = styled.span`
  position: relative;
  display: inline-block;
`;


const BadgeSup = styled.sup`
  position: absolute;
  height: 100%;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.danger};
  z-index: 10;
  transform: translateX(-50%);
`;

export const BadgeDotSup = BadgeSup.extend`
  width: 100%;
`;

export const BadgeNumSup = BadgeSup.extend`
  font-weight: bold;
  border-radius: 10px;
  top: -5px;
  height: 20px;
  padding: 0 6px;
  min-width: 20px;
  color: white;
  font-size: .75rem;
  line-height: 20px;
  text-align: center;
`;
