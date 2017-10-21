import styled from 'styled-components';

export const GroupWrapper = styled.div`
  > div > div {
    margin: 0 -15px;
  }
`;

export const ContainerOutter = styled.div`
  position: relative;
  padding: 0 15px;
  ${props=>props.theme.media.lessThan('xs')`
    flex: 0 0 100%;
  `}
  ${props=>props.theme.media.between('xs', 'lg')`
    flex: 0 0 50%;
  `}
  ${props=>props.theme.media.greaterThan('lg')`
    flex: 0 0 25%;
  `}
  margin-bottom: 2rem;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: -0.75rem;
  right: 0.25rem;
  border-radius: 50%;
  border: .75rem solid ${({theme}) => theme.colors.primary};
  transition: transform 200ms cubic-bezier(0.720, -0.600, 0.370, 1.650);
  transform: scale(0);

  &:before {
    font-family: FontAwesome;
    content: "\f00c";
    color: white;
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
  }

  ${props=>{
    if(props.checked) {
      return `
        transform: scale(1);
      `;
    }
  }}
`;

export const Img = styled.img`
  width: 100%;
`;

export const Container = styled.label`
  display: block;
  cursor: pointer;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${props=>props.theme.colors.textLight};
  text-align: center;
  ${props=>{
    if(props.checked) {
      return `
        border-color: ${props.theme.colors.primary};
      `;
    }
  }}
`;

export const ParagraphWrapper = styled.div`
  font-weight: ${props=>props.theme.fontWeights.medium};
  ${props=>{
    if(props.checked) {
      return `
        color: ${props.theme.colors.primary};
      `;
    }
  }}
`;

