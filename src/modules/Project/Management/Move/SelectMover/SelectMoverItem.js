import React from 'react';
import { withTheme } from 'styled-components';
import Card from '../../../../../globalComponents/Card';
import Icon from '../../../../../globalComponents/Icon';
import { Radio, Button } from '../../../../../globalComponents/Form';
import noLogoImg from './no-logo.jpeg';
import {
  MoverCard,
  InnerCardContainer,
  MoverLogo,
  MoverLogoImg,
  MoverInfoBar,
  MoverName,
  MoverPrice,
  MoverProfileLink,
  IsCheckedIndicator
} from './Styled';

const SelectMoverItem = ({
  value,
  moverInfo,
  checked,
  onCheck,
  history,
  theme
}) => {
  // const goToProfilePage = e => {
  //   e.preventDefault();
  //   history.push({
  //     pathname: `/mover/profile/${moverInfo.provider.id}`
  //   });
  // };

  const chooseMover = e => {
    e.stopPropagation();
  };

  const cardStyle = checked =>
    !!checked ? { boxShadow: `inset 0 0 0 2px ${theme.colors.primary}` } : {};

  const renderPrimaryAction = checked => {
    if (!!checked) return null;

    return (
      <Button small onClick={chooseMover} style={{padding: 0}}>
        <label style={{cursor: 'pointer', display: 'inline-block', padding: '.875rem 1rem'}}>
          <Radio.Radio
            value={value}
            checked={checked}
            onCheck={onCheck}
            style={{ display: 'none' }}
          />
          Choose
        </label>
      </Button>
    );
  };

  return (
    <MoverCard checked={checked}>
      <Card
        style={cardStyle(checked)}
        primaryAction={renderPrimaryAction(checked)}
      >
        <InnerCardContainer>
          <MoverLogo>
            <MoverLogoImg src={moverInfo.provider.logo || noLogoImg} alt="Mover Logo" />
          </MoverLogo>
          <MoverName>{moverInfo.provider.name}</MoverName>
          <MoverInfoBar>
            <MoverPrice>${moverInfo.estimatedPrice}</MoverPrice>
          </MoverInfoBar>
          <MoverInfoBar>
            <MoverProfileLink to={`/mover/profile/${moverInfo.provider.id}`}>View profile</MoverProfileLink>
          </MoverInfoBar>
        </InnerCardContainer>
        {checked && (
          <IsCheckedIndicator>
            <Icon icon="check" />
          </IsCheckedIndicator>
        )}
      </Card>
    </MoverCard>
  );
};

export default withTheme(SelectMoverItem);
