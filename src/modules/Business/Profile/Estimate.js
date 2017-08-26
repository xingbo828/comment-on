import React from 'react';
import Styled from 'styled-components';

const Pricing = Styled.div`
  font-size: 3.25rem;
  font-weight: bold;
`;

const PricingContainer = Styled.div`
  background: ${({theme}) => theme.brandPrimary };
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 120px;
  //border-bottom: 1px solid ${({theme}) => theme.borderPrimary };
  color: white;

  span {
    text-transform: uppercase;
    font-weight: 800;
    color: ${({theme}) => theme.textDarkest };
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
  // border: ${({theme}) => theme.borderPrimary } 1px solid;
  padding: 0 0 1rem;
  background: white;
  width: 100%;
  height: 500px;
  transform: translateY(-120px);
  text-align: center;
  // box-shadow: 0px 0px 15px rgba(0,0,0,.08);
  // border-radius: 3px;
  // overflow: hidden;
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