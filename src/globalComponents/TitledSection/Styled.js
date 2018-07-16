import Styled from 'styled-components'

export const Container = Styled.section`
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

export const Title = Styled.div`
  flex: 1;
`

export const Content = Styled.div`
  flex: 2;
`