import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';

import Move from './Move';

const enhance = compose(
  withRouter,
  withTheme
);

export default enhance(Move);
