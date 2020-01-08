import { all } from 'redux-saga/effects';
import rootSaga from './rootSaga';
import querySaga from './sagas/querySaga';
import catalogSaga from './sagas/catalogSaga';

describe('rootSaga', () => {
  it('should test the root saga', () => {
    const gen = rootSaga();

    expect(gen.next().value).toMatchObject(all([querySaga(), catalogSaga()]));
  });
});