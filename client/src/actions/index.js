import api from '../apis/streams';

const sign_in = (user_id) => {
  return {
    type: 'SIGN_IN',
    payload: user_id,
  };
};

const sign_out = () => {
  return {
    type: 'SIGN_OUT',
  };
};

const createStream = (formValues) => async (dispatch) => {
  const response = await api.post('/streams', formValues);

  dispatch({
    type: 'CREATE_STREAM',
    payload: response.data,
  });
};

const getStreams = () => async (dispatch) => {
  const response = await api.get('/streams');

  dispatch({
    type: 'GET_STREAMS',
    payload: response.data,
  });
};

const getStream = (id) => async (dispatch) => {
  const response = await api.get(`/streams/${id}`);

  dispatch({
    type: 'GET_STREAM',
    payload: response.data,
  });
};

const updateStream = (id, formValues) => async (dispatch) => {
  const response = await api.put(`/streams/${id}`, formValues);

  dispatch({
    type: 'UPDATE_STREAM',
    payload: response.data,
  });
};

const deleteStream = (id) => async (dispatch) => {
  await api.delete(`/streams/${id}`);

  dispatch({
    type: 'DELETE_STREAM',
    payload: id,
  });
};

export {
  sign_in,
  sign_out,
  createStream,
  getStreams,
  getStream,
  updateStream,
  deleteStream,
};
