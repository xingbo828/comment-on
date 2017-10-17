import React from 'react';
import Styled from 'styled-components';

const Pricing = Styled.div`
  font-size: 3.25rem;
  font-weight: bold;
`;

const PricingContainer = Styled.div`
  padding: 0 0 1rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed ${({theme}) => theme.colors.textLight };

  span {
    text-transform: uppercase;
    font-weight: 800;
    color: ${({theme}) => theme.colors.textLight };
    letter-spacing: .03em;
    font-size: .875rem;
  }

  sup {
    vertical-align: sup;
    font-size: .5em;
  }

  sub {
    vertical-align: baseline;
    font-size: .25em;
    font-weight: 800;
  }
`;

const EstimateContainer = Styled.div`
  border-radius: 3px;
  padding: 0 0 1rem;
  background: white;
  width: 100%;
  text-align: center;
`;

const Estimate = () => (
  <EstimateContainer>
    <PricingContainer>
      <span>Estimate</span>
      <Pricing><sup>$</sup>295<sub>CDN</sub></Pricing>
    </PricingContainer>

  </EstimateContainer>
);

export default Estimate;