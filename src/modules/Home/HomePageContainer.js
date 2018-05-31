import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import HomePage from './HomePage';

const enhance = compose(
  withRouter,
  withProps(props => ({
    navToGetStarted: () => {
      props.history.push({
        pathname: '/projects/configurations/move/address'
      });
    }
  }))
);

export default enhance(HomePage);
