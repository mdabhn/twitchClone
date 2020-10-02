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

export { sign_in, sign_out };
