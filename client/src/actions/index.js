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

export { sign_in, sign_out, createStream };
