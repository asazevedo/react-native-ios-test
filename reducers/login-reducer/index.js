const initialState = {
  LoginSuccess: false,
  Loading: false,
  ErrorMessage: '',
  ShowError: false,
  ShowSignUp: false,
  UserLogin: {
    Value: '',
    ErrorMessage: '',
  },
  UserPassword: {
    Value: '',
    ErrorMessage: '',
  },
  SignUpLogin: {
    Value: '',
    ErrorMessage: ''
  },
  SignUpPassword: {
    Value: '',
    ErrorMessage: ''
  }
};

export const LoginReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'CHANGE_INPUT':
      newState[action.payload.name].Value = action.payload.value;
      return newState;

    case 'BEGIN_REQUEST_LOGIN':
      newState.Loading = true;
      return newState;

    case 'ERROR_REQUEST_LOGIN':
        newState.ShowError = true;
        newState.ErrorMessage = action.payload;
        newState.Loading = false;
        return newState;

    case 'CLEAR_ERRORS':
        newState.ShowError = false;
        newState.ErrorMessage = '';
        return newState;

    case 'SUCCESS_REQUEST_LOGIN':
        newState.LoginSuccess = true;
        newState.Loading = false;
      return newState;

    case 'TOGGLE_SIGN_UP':
        newState.ShowSignUp = !newState.ShowSignUp;
      return newState;

    default:
      return newState;
  }
};
