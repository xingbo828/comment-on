import React from 'react';
import { withTheme } from 'styled-components';
import Badge from '../../../../../globalComponents/Badge';
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
  MoverMsg,
  IsCheckedIndicator
} from './Styled';

const SelectMoverItem = ({
  value,
  moverInfo,
  unreadMsgsCount,
  checked,
  onCheck,
  history,
  theme
}) => {
  const conversationClickHandler = e => {
    e.stopPropagation();
    history.push({
      pathname: `/conversation/${moverInfo.conversation.id}`
    });
  };
  const goToProfilePage = e => {
    e.preventDefault();
    history.push({
      pathname: `/mover/profile/${moverInfo.provider.id}`
    });
  };

  const chooseMover = e => {
    e.stopPropagation();
  };

  const cardStyle = checked =>
    !!checked ? { border: `1px solid ${theme.colors.primary}` } : {};

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
        onClick={goToProfilePage}
        primaryAction={renderPrimaryAction(checked)}
      >
        <InnerCardContainer>
          <MoverLogo>
            <MoverLogoImg src={moverInfo.provider.logo || noLogoImg} alt="Mover Logo" />
          </MoverLogo>
          <MoverName>{moverInfo.provider.businessName}</MoverName>
          <MoverInfoBar>
            <MoverPrice>${moverInfo.estimatedPrice}</MoverPrice>
            <MoverMsg onClick={conversationClickHandler}>
              <Badge
                count={unreadMsgsCount}
                scale={0.8}
                offsetX={12}
                offsetY={5}
              >
                <Icon size="lg" icon="comments" />
              </Badge>
            </MoverMsg>
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
