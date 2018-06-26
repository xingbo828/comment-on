import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

import { addProject } from '../../projectAction';
import mapImmutablePropsToPlainProps from '../../../Common/mapImmutablePropsToPlainProps';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

import DynamicBuildConfigurations from './DynamicBuildConfigurations'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addProject
    },
    dispatch
  );

const enhance = compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  ),

  mapImmutablePropsToPlainProps,
  scrollToTopOnMount
);

export default enhance(DynamicBuildConfigurations);
