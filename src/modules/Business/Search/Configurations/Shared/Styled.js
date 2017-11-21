import styled from 'styled-components';
import { Heading, Paragraph } from '../../../../../globalComponents/Typography';

export const HeadingInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 ${props=>props.theme.spaces.tight} ${props=>props.theme.spaces.base};
  margin: 0 auto;

  ${props=>props.theme.media.greaterThan('md')`
    width: 600px;
  `}
`;

export const HeadingParagraph = Paragraph.extend`
  color:${props=>props.theme.colors.textLight};
`;
