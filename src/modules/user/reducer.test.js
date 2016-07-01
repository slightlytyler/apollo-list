import * as actionTypes from './actionTypes';
import reducer from './reducer';

describe('user reducer', () => {
  const initialState = { id: '1', name: 'before' };

  it('returns the initial state by default', () => {
    reducer(initialState, {}).should.deep.equal(initialState);
  });

  it('should handle FETCH_RECORD.success', () => {
    const nextState = reducer(initialState, {
      type: actionTypes.FETCH_RECORD.success,
      payload: { name: 'after' },
    });

    nextState.should.deep.equal({
      id: '1',
      name: 'after',
    });
  });

  it('should handle LOGIN.success', () => {
    const nextState = reducer(initialState, {
      type: actionTypes.LOGIN.success,
      payload: { name: 'after' },
    });

    nextState.should.deep.equal({
      id: '1',
      name: 'after',
    });
  });

  it('should handle SIGN_UP.success', () => {
    const nextState = reducer(initialState, {
      type: actionTypes.SIGN_UP.success,
      payload: { name: 'after' },
    });

    nextState.should.deep.equal({
      id: '1',
      name: 'after',
    });
  });

  it('should handle LOGOUT.success', () => {
    const nextState = reducer(initialState, {
      type: actionTypes.LOGOUT.success,
    });

    nextState.should.deep.equal({});
  });
});
