import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import AccountNav from './AccountNav';

const user = {
    isAnonymous: false,
    emailVerified: true,
    apiKey: 'AIzaSyD-_qTEnH7-6KSLKtCPHLgdodwBTS45xus',
    displayName: 'Bo Xing',
    businesses: {
      '-KskLDP5EOPt0mi66xqU': true
    },
    hasProfile: true,
    uid: 'rcW09q1KdZeDnlM2FuBGZnnQptp2',
    email: 'bo.xing@telus.com',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/comment-on-85597.appspot.com/o/images%2Fprofile%2FrcW09q1KdZeDnlM2FuBGZnnQptp2%2F41a26d175f91f3c8f12c394d4e5548a8%2009-59-09-824.jpg?alt=media&token=420a7463-7a3f-4207-bf4e-93a27a1c4eb3'
};

const AccountNavDemo = withInfo('Account Nav')(() =>
<div style={{width: '500px', padding: '25px'}}>
  <AccountNav user={user} loginStatus="AUTHENTICATED" logout={action('Logout action triggered')}/>
</div>
);


const AccountNavStory = storiesOf('Common/AccountNav', module)
.addDecorator(withKnobs)
.add('Usage', AccountNavDemo);


export default AccountNavStory;
