import { all, call, takeLatest, put } from 'redux-saga/effects';

import { clearCart } from './actions';
import {SIGN_OUT_SUCCESS} from "../user/actions";

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}