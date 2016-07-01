export default moduleActionTypes => (state = {}, { type, payload }) => {
  switch (type) {
    case moduleActionTypes.fetchCollection.pending:
      return payload.query;

    default:
      return state;
  }
};
