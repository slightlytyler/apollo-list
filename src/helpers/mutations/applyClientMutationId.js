import uuid from 'uuid';

export default variable => Object.assign({}, variable, { clientMutationId: uuid() });
