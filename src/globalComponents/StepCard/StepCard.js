import React from 'react'
import Box from '../Box'
import {
  Container,
  Image,
  Heading,
  Paragraph,
  Eyebrow,
  CTA
} from './Styled'


const StepCard = ({ type, src, eyebrow, title, body, number, handleClick }) => {
  return (
    <Container number={number} type={type}>
      <Image src={src} />
      <Box horizontal={4} between={4} vertical={6}>
        <Eyebrow type={type}>{eyebrow}</Eyebrow>
        <Heading>{title}</Heading>
        <Paragraph>{body}</Paragraph>
        <div>
          <CTA onClick={handleClick} type={type}>Get started</CTA>
        </div>
      </Box>
    </Container>
  )
}

export default StepCard