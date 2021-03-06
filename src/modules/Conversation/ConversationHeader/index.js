import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';

import ConversationHeader from './ConversationHeader';


const enhance = compose(
  withRouter,
  withProps((props) => ({
    goBack: e => {
      e.preventDefault();
      props.history.goBack();
    }
  }))
);

export default enhance(ConversationHeader);
