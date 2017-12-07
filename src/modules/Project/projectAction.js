import {
  auth,
  database
} from '../../firebaseClient';
import { updateUserLeadIds } from '../Account/accountAction';

const leadDbRef = database.ref().child('leads');

export const LEAD_CREATED = 'LEAD_CREATED';

export const addLead = (configuration) => async dispatch => {
    const uid = auth.currentUser.uid;
    const leadId = leadDbRef.push().key;
    const leadRef = leadDbRef.child(leadId);
    const lead = Object.assign({}, { configuration, owner: uid });
    await leadRef.set(lead);
    await updateUserLeadIds(leadId, uid)(dispatch);
    return leadId;
};
