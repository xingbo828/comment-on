import { compose, withProps } from 'recompose'
import { auth as firebaseAuth } from '../../../../firebaseClient';
import AccountVerificationPanel from './AccountVerificationPanel';
import message from '../../../../globalComponents/Message';

const enhance = compose(
  withProps((props) => ({
    resend: async () => {
      try {
        const user = firebaseAuth.currentUser;
        await user.sendEmailVerification();
        message.success(`Verification email has been sent to ${props.account.user.email}`, 5);
      } catch (error) {
        console.error(error);
        message.error(error.message, 10);
      }
    }
  }))
)
export default enhance(AccountVerificationPanel);
