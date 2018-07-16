import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import GetStartedThin from './GetStartedThin'

const enhance = compose(
  withRouter,
  withProps(props => ({
    handleClick: (e) => {
      e.preventDefault();
      const slug = props.match.params.slug;
      props.history.push({
        pathname: `/configuration/move/${slug}`
      });
    }
  }))
);

export default enhance(GetStartedThin);
