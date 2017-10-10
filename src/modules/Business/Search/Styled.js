import styled from 'styled-components';
import { colors } from '../../../foundation/variables';

export const BusinessCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  color: ${colors.textDark};
`;

export const BusinessCard = styled.li`
  list-style: none;
  width: 100%;
  border-top: 1px solid ${colors.borderPrimary};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 150px;
  padding: 20px 0;
`;

export const BusinessCardLogo = styled.div`
  width: 20%;
  padding-right: 50px;
`;

export const BusinessCardName = styled.div`
  width: 20%;
`;

export const BusinessCardLogoImg = styled.img`
  width: 100%;
  max-height: 100%;
`;
