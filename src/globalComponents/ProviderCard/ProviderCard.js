import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Estimate,
  ProviderInfo,
  ProviderName,
  Logo,
  LogoContainer,
  SecondaryAction,
  PrimaryAction
} from './Styled'
import Pricing from '../Pricing'


const ProviderCard = ({
  imageSrc,
  estimate,
  name,
  primaryAction,
  secondaryAction
}) => (
  <Container>
    <Estimate>
      <Pricing inverted price={estimate} sufix="estimate"  />
    </Estimate>
    <ProviderInfo>
      <LogoContainer>
        <Logo src={imageSrc} />
      </LogoContainer>
      <ProviderName>{name}</ProviderName>
    </ProviderInfo>
    { secondaryAction && <SecondaryAction>{secondaryAction}</SecondaryAction>}
    { primaryAction && <PrimaryAction>{primaryAction}</PrimaryAction>}
  </Container> 
)

ProviderCard.propTypes = {
  estimate: PropTypes.string.isRequired,
  primaryAction: PropTypes.func.isRequired,
  secondaryAction: PropTypes.func.isRequired
}

export default ProviderCard