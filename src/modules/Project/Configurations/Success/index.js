import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import Success from './Success';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';


const enhance = compose(
  withRouter,
  withProps((props)=> ({
    goToProjectManagement: (e) => {
      e.preventDefault();
      const projectId = props.location.state.projectId;
      props.history.push({
        pathname: `/project/${projectId}`
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(Success);
