import Styled from 'styled-components';
import Grid from '../../../globalComponents/Grid';

export const EnhancedGridCol = Styled(Grid.Col)`
  ${props=>props.theme.media.greaterThan('sm')`
    border-radius: 4px;
    background: white;
  `};
`

export default {
  EnhancedGridCol
}