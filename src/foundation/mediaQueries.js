import { generateMedia } from 'styled-media-query';

const breakPoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
};

export default generateMedia(breakPoints);