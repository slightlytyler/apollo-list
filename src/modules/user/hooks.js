import { getId, getSessionId } from './selectors';

const registerSessionId = sessionId => sessionId;

export const loadToken = (dispatch, getState) => {
  const state = getState();
  const id = getId(state);

  if (id) {
    const sessionId = getSessionId(state);
    if (sessionId) registerSessionId(sessionId);
  }
};
