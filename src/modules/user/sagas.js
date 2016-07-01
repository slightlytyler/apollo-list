import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as service from './service';
import { actions as notificationActions } from 'modules/notifications';

function* fetchRecord() {
  try {
    const record = yield call(service.fetchRecord);

    yield put(actions.fetchRecord.success(record));
  } catch (error) {
    yield put(actions.fetchRecord.failure(error));

    yield put(notificationActions.push({
      message: `Could not fetch user record. ${error}`,
      level: 'error',
    }));
  }
}

function* login({ payload: credentials }) {
  try {
    const record = yield call(service.login, credentials);

    yield put(actions.login.success(record));
  } catch (error) {
    yield put(actions.login.failure(error));

    yield put(notificationActions.push({
      message: `Could not login. ${error}`,
      level: 'error',
    }));
  }
}

function* logout() {
  try {
    yield call(service.logout);

    yield put(actions.logout.success());
  } catch (error) {
    yield put(actions.logout.failure(error));

    yield put(notificationActions.push({
      message: `Could not logout. ${error}`,
      level: 'error',
    }));
  }
}

function* signUp({ payload: attrs }) {
  try {
    const record = yield call(service.signUp, attrs);

    yield put(actions.signUp.success(record));
  } catch (error) {
    yield put(actions.signUp.failure(error));

    yield put(notificationActions.push({
      message: `Could not sign up. ${error}`,
      level: 'error',
    }));
  }
}

export default function* sagas() {
  yield [
    takeLatest(actionTypes.FETCH_RECORD.pending, fetchRecord),
    takeLatest(actionTypes.LOGIN.pending, login),
    takeLatest(actionTypes.LOGOUT.pending, logout),
    takeLatest(actionTypes.SIGN_UP.pending, signUp),
  ];
}
