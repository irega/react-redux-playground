import { call, put, takeEvery } from 'redux-saga/effects'
import { incrementAsync, incrementByAmount } from './counterSlice';
import { fetchCount } from './counterAPI';

function* fetchAmount(action) {
    const amount = yield call(fetchCount, action.amount);
    yield put({ type: incrementByAmount.type, payload: amount.data });
}

function* mySaga() {
    yield takeEvery(incrementAsync.type, fetchAmount);
}
export default mySaga;