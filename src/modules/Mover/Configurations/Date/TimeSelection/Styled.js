import styled from 'styled-components';

export const GroupWrapper = styled.div`
  padding: ${props=>props.theme.spaces.base} ${props=>props.theme.spaces.tight};
  ${props => props.theme.media.greaterThan('md')`
    > div > div {
      margin: 0 -15px;
    }
  `}

  > div > label {
    font-size: 1.5rem;
    margin-bottom: ${props => props.theme.spaces.base};
    display: inline-block;
    font-weight: ${props => props.theme.fontWeights.medium};
  }
`;

export const ContainerOutter = styled.div`
  position: relative;
  padding: 0 15px;
  ${props => props.theme.media.lessThan('md')`
    flex: 0 0 100%;
  `} ${props => props.theme.media.greaterThan('md')`
    flex: 0 0 calc(100% / 3);
  `} margin-bottom: 2rem;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: -0.75rem;
  right: 0.25rem;
  border-radius: 50%;
  border: 0.75rem solid ${({ theme }) => theme.colors.primary};
  transition: transform 200ms cubic-bezier(0.72, -0.6, 0.37, 1.65);
  transform: scale(0);

  &:before {
    font-family: FontAwesome;
    content: '\f00c';
    color: white;
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
  }

  ${props => {
    if (props.checked) {
      return `
        transform: scale(1);
      `;
    }
  }};
`;

export const Img = styled.img`width: 100%;`;

export const Container = styled.label`
  display: block;
  cursor: pointer;
  padding: ${props => props.theme.spaces.tight};
  border-radius: 3px;
  border: 1px solid;
  height: 90px;
  border-color: ${props => props.theme.colors.textLight};
  text-align: center;
  ${props => {
    if (props.checked) {
      return `
        border-color: ${props.theme.colors.primary};
      `;
    }
  }};
`;

export const ParagraphWrapper = styled.div`
  font-weight: ${props => props.theme.fontWeights.medium};
  ${props => {
    if (props.checked) {
      return `
        color: ${props.theme.colors.primary};
      `;
    }
  }};
`;
