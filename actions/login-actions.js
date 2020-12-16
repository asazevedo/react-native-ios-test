import axios from 'axios';
import ExceptionUtils from '../utils/ExceptionUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const userSignUp = async (dispatch, getState) => {
  const {SignUpLogin, SignUpPassword} = getState().LoginState;

  const request = {
    Email: SignUpLogin.Value,
    Password: SignUpPassword.Value,
  };

  dispatch({type: 'BEGIN_REQUEST_LOGIN'});

  try {

    const resp = await axios.post(
      `/api/v1/authentication/signup?Email=${request.Email}&Password=${request.Password}`,
    );

    axios.defaults.headers.common.Authorization = `Bearer ${request}`;

    dispatch({
      type: 'SUCCESS_REQUEST_LOGIN',
      payload: request,
    });

  } catch (err) {
    const msg = new ExceptionUtils().FormatException(err);
    dispatch({type: 'ERROR_REQUEST_LOGIN', payload: msg});
  }

};

export const userLogin = async (dispatch, getState) => {
  console.log('X');
  const {UserLogin, UserPassword} = getState().LoginState;

  const request = {
    Identifier: UserLogin.Value,
    Password: UserPassword.Value,
  };

  dispatch({type: 'BEGIN_REQUEST_LOGIN'});

  try {
    const tokenResponse = await axios.post(
      `/api/v1/authentication/signin?Identifier=${request.Identifier}&Password=${request.Password}`,
    );
    axios.defaults.headers.common.Authorization = `Bearer ${tokenResponse.data}`;
    const userDataResponse = await axios.get(`/api/v1/register/me`);

    await AsyncStorage.setItem('user_info', JSON.stringify(userDataResponse.data));

    dispatch({
      type: 'SUCCESS_REQUEST_LOGIN',
      payload: request,
    });
  } catch (err) {
    console.log(err);
    const msg = new ExceptionUtils().FormatException(err);
    dispatch({type: 'ERROR_REQUEST_LOGIN', payload: msg});
  }
};
