//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { catalogActions } from '../../../catalog/actions';

export function* changeRoute ({ payload: {
    firstName, lastName,
}}) {
    try {


        yield put(profileActions.fillProfile({firstName, lastName }));
    } catch (error) {
        yield put(profileActions.emitError(error, 'updateName'));
    } finally {

    }
}
