import styled from 'styled-components';

export default styled.div`
  flex-basis: 100%;
  padding: 0 15px;

  ${props=>props.theme.media.lessThan('xs')`
    flex-basis: ${props=> props.xs ? (props.xs*100/24) : 100}%;
  `}

  ${props=>props.theme.media.between('xs', 'sm')`
    flex-basis: ${props=> props.sm ? (props.sm*100/24) : 100}%;
  `}

  ${props=>props.theme.media.between('sm', 'md')`
    flex-basis: ${props=> props.md ? (props.md*100/24) : 100}%;
  `}

  ${props=>props.theme.media.greaterThan('md')`
    flex-basis: ${props=> props.lg ? (props.lg*100/24) : 100}%;
  `}
`;
