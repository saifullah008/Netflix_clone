export const Login = (data) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: data,
    });
  };
};

export const Logout = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
    });
  };
};
