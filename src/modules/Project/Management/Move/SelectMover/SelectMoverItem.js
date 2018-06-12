import React from 'react';
import { withTheme } from 'styled-components';
import Icon from '../../../../../globalComponents/Icon';
import { Radio, Button } from '../../../../../globalComponents/Form';
import ProviderCard from '../../../../../globalComponents/ProviderCard';
import { ReactRouterLink } from '../../../../../globalComponents/Link';
import noLogoImg from './no-logo.jpeg';
import {
  IsCheckedIndicator
} from './Styled';

const SelectMoverItem = ({
  value,
  moverInfo,
  checked,
  onCheck,
  projectId,
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

  // const cardStyle = checked =>
  //   !!checked ? { boxShadow: `inset 0 0 0 2px ${theme.colors.primary}` } : {};

  const renderPrimaryAction = checked => {
    
    if (!!checked) {
      return (
        <IsCheckedIndicator>
          <Icon icon="check" />
        </IsCheckedIndicator>
      )
    }

    return (
      <Button onClick={chooseMover} style={{ padding: 0 }}>
        <label style={{cursor: 'pointer', display: 'inline-block', padding: '1.5rem 2rem'}}>
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

  const renderSecondaryAction = () => {
    return (
      <ReactRouterLink secondary to={`/mover/profile/${moverInfo.provider.id}`} >View profile</ReactRouterLink>
    )
  }

  return (
    <ProviderCard
      estimate={moverInfo.estimatedPrice}
      imageSrc={moverInfo.provider.logo || noLogoImg}
      name={moverInfo.provider.name}
      primaryAction={renderPrimaryAction(checked)}
      secondaryAction={renderSecondaryAction()}
    />
  )

  // return (
  //   <MoverCard checked={checked}>
  //     <Card
  //       style={cardStyle(checked)}
  //       primaryAction={renderPrimaryAction(checked)}
  //     >
  //       <InnerCardContainer>
  //         <MoverLogo>
  //           <MoverLogoImg src={moverInfo.provider.logo || noLogoImg} alt="Mover Logo" />
  //         </MoverLogo>
  //         <MoverName>{moverInfo.provider.name}</MoverName>
  //         <MoverInfoBar>
  //           <MoverPrice>${moverInfo.estimatedPrice}</MoverPrice>
  //         </MoverInfoBar>
  //         <MoverInfoBar>
  //           <MoverProfileLink to={{ 
  //             pathname: `/mover/profile/${moverInfo.provider.id}`,
  //             search: `?project=${projectId}`
  //           }}>View profile</MoverProfileLink>
  //         </MoverInfoBar>
  //       </InnerCardContainer>
  //       {checked && (
  //         <IsCheckedIndicator>
  //           <Icon icon="check" />
  //         </IsCheckedIndicator>
  //       )}
  //     </Card>
  //   </MoverCard>
  // );
};

export default withTheme(SelectMoverItem);
