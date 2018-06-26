import Logistics from './Logistics';
import has from 'lodash/has';

export default Logistics;

export const validator = (detail) => has(detail, ['pickUpDate']);
