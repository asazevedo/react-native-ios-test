import React from 'react';
import {View} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Input, Button, Overlay, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import * as Actions from '../../actions/login-actions';

const SignUpPage = () => {
  const state = useSelector((state) => state.LoginState);
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: {
        name,
        value,
      },
    });
  };

  const handleToggleSignUp = () => {
    dispatch({type: 'TOGGLE_SIGN_UP'});
  };


  const handleSignUp = () => {
    dispatch(Actions.userSignUp);
  };

  return (
    <View>
      <Input
        placeholder="User Name"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={(value) => handleChange('SignUpLogin', value)}
        value={state.SignUpLogin.Value}
      />

      <Input
        placeholder="Password"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        onChangeText={(value) => handleChange('SignUpPassword', value)}
        value={state.SignUpPassword.Value}
        secureTextEntry
      />

      <Button
        buttonStyle={{height: 60, margin: 10}}
        icon={{
          type: 'font-awesome',
          name: 'check',
          color: 'white',
        }}
        title="Save"
        loading={state.Loading}
        onPress={handleSignUp}
      />

      <Button
        buttonStyle={{height: 60, margin: 10}}
        title="Cancel"
        type="outline"
        onPress={handleToggleSignUp}
      />
    </View>
  );
};

export default SignUpPage;
