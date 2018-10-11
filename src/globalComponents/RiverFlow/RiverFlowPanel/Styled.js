import Styled from 'styled-components'

export const Container = Styled.div`
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1.5rem;

  ${props=>props.flipped && `
    background-color: ${props.theme.colors.offWhite};
  `}

  ${props=>props.theme.media.greaterThan('sm')`
    padding: 0 3rem;

    ${props=>!props.flipped && `
      & > div:last-of-type {
        order: 1;
      }

      & > div:first-of-type {
        order: 2;
      }
    `}
  `};
`
export const PrimaryWrapper = Styled.div`
  width: 100%;
  padding: 3rem 0;

  ${props=>props.theme.media.greaterThan('sm')`
    width: 47.75%;
    padding: 4rem 0;
  `}

  ${props=>props.theme.media.greaterThan('lg')`
    padding: 8rem 0;
  `}
`
export const SecondaryWrapper = Styled.div`
  width: 100%;
  padding: 3rem 0;
  position: relative;
  min-height: 300px;

  ${props=>props.theme.media.greaterThan('sm')`
    height: auto;
    width: 47.75%;
    padding: 4rem 0;
  `}

  ${props=>props.theme.media.greaterThan('lg')`
    padding: 8rem 0;
  `}
`
