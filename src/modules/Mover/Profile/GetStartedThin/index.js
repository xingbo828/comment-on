import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import GetStartedThin from './GetStartedThin'

const enhance = compose(
  withRouter,
  withProps(props => ({
    handleClick: (e) => {
      e.preventDefault();
      const providerId = props.match.params.moverId;
      props.history.push({
        pathname: `/mover/${providerId}/configuration`
      });
    }
  }))
);

export default enhance(GetStartedThin);
