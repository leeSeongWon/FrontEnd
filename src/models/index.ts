import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { authSaga } from './saga/reducers/auth';
import seller, { sellerSaga } from './saga/reducers/seller';
import reservation, { reservationSaga } from './saga/reducers/reservation';
import performance, { performanceSaga } from './saga/reducers/performance';
import theme, { themeSaga } from './saga/reducers/theme';
import booking, { bookingSaga } from './saga/reducers/booking';

export function* rootSaga() {
  yield all([
    authSaga(),
    sellerSaga(),
    reservationSaga(),
    performanceSaga(),
    themeSaga(),
    bookingSaga(),
  ]);
}

const rootReducer = combineReducers({
  auth,
  seller,
  reservation,
  performance,
  theme,
  booking,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
