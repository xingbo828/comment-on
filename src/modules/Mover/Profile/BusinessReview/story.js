import React from 'react';

import { storiesOf } from '@storybook/react';
import BusinessReview from './';



const BusinessReviewDemo = () =>
  <BusinessReview
    type="google"
    title="ABC Moving inc."
    id="VxFjN7bkMrENUyttWIZf"
  />



const BusinessReviewStory = storiesOf('Mover/profile/businessReview', module)
.add('Usage', BusinessReviewDemo);


export default BusinessReviewStory;
