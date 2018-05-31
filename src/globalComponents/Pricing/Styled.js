import Styled from 'styled-components'

export const Container = Styled.div`
  text-align: left;
  display: inline-block;

  ${props=>props.inverted && `
    color: white;
  `}
`

export const DollarValue = Styled.div`
  float: left;
  font-size: 2rem;
  line-height: .8;
  font-weight: 800;
  margin-right: 4px;
`

export const CentsValue = Styled.div`
  margin: 0 0 2px;
  font-weight: 600;
  line-height: .8rem;
  font-size: .8rem;
  vertical-align: top;
  text-decoration: underline;
  text-decoration-color: ${props=>props.theme.colors.secondaryLight};
`

export const Sufix = Styled.div`
  vertical-align: bottom;
  font-weight: 600;
  line-height: .8rem;
  font-size: .8rem;
`

export const InnerContainer = Styled.div`
  display: inline-block;
`

export const DollarSign = Styled.span`
  font-size: .5em;
  line-height: .8;
  vertical-align: super;
`