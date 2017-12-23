import React from 'react';
import { string, oneOfType, node, oneOf, number } from 'prop-types';
import Icon from '../../Icon';
import { availableStatus } from '../constants';
import {
  PanelContainer,
  PanelHeader,
  PanelHeaderTitleDeco,
  PanelHeaderTitle,
  PanelHeaderTertiaryText,
  PanelBody
} from './Styled';
const ProgressPanel = ({
  status,
  stepIndex,
  header,
  tertiaryText,
  children,
  inProgressIndexReplacement
}) => {
  const renderTitleIcon = (status, stepIndex, inProgressIndexReplacement) => {
    if (status === 'finished') {
      return <Icon icon="check" />;
    } else if (status === 'inProgress' && inProgressIndexReplacement) {
      return inProgressIndexReplacement;
    }
    return stepIndex + '. ';
  };

  return (
    <PanelContainer status={status}>
      <PanelHeader>
        <PanelHeaderTitle status={status}>
          <PanelHeaderTitleDeco>
            {renderTitleIcon(status, stepIndex, inProgressIndexReplacement)}
          </PanelHeaderTitleDeco>
          {header}
        </PanelHeaderTitle>
        {status === 'inProgress' && tertiaryText && (
          <PanelHeaderTertiaryText>{tertiaryText}</PanelHeaderTertiaryText>
        )}
      </PanelHeader>
      {children && status === 'inProgress' && <PanelBody>{children}</PanelBody>}
    </PanelContainer>
  );
};

ProgressPanel.propTypes = {
  header: string.isRequired,
  tertiaryText: oneOfType([string, node]),
  children: node,
  inProgressIndexReplacement: oneOfType([string, node]),
  status: oneOf([availableStatus.finished, availableStatus.inProgress, availableStatus.waiting]),
  stepIndex: number
};

export default ProgressPanel;
