export default getState => (nextState, replace) => {
  const { user: { sessionId } } = getState();

  if (!sessionId) replace({ pathname: '/login' });
};
