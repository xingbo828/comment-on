import styled from 'styled-components';
import { Paragraph } from '../../../../globalComponents/Typography';

export const HeadingInfo = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: ${props=>props.theme.spaces.wide};
  margin: 0 auto;

  ${props=>props.theme.media.greaterThan('md')`
    width: 600px;
  `}
`;

export const HeadingParagraph = Paragraph.extend`
  color:${props=>props.theme.colors.textLight};
`;
