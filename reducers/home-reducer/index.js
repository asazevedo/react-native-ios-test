const initialState = {
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

  export const HomeReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
  
    switch (action.type) {
      case 'CHANGE_INPUT':
        newState[action.payload.name].Value = action.payload.value;
        return newState;
  
      case 'BEGIN_REQUEST_LOGIN':
        newState.Loading = true;
        return newState;
  
      default:
        return newState;
    }
  };
  