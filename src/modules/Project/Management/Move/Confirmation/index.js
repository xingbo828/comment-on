import { compose } from 'recompose';
import isLoggedIn from '../../../../Common/isLoggedIn';

import Confirmation from './Confirmation';

export default compose(isLoggedIn)(Confirmation);
