import React, {useEffect} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Input, Button, Overlay, Text} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import {useDispatch, useSelector} from 'react-redux';
import * as LoginActions from '../../actions/login-actions';
import SignUpPage from './SignUpPage';

const LoginPage = () => {
  const state = useSelector((state) => state.LoginState);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      Actions.home();
    };
  }, [state.LoginSuccess]);

  const handleChange = (name, value) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: {
        name,
        value,
      },
    });
  };

  const handleLogin = () => {
    dispatch(LoginActions.userLogin);
  };

  const handleToggleOverlay = () => {
    dispatch({type: 'CLEAR_ERRORS'});
  };

  const handleToggleSignUp = () => {
    dispatch({type: 'TOGGLE_SIGN_UP'});
  };

  return (
    <Grid>
      <Overlay
        isVisible={state.ShowError}
        onBackdropPress={handleToggleOverlay}
        animationType="fade">
        <Text>{state.ErrorMessage}</Text>
      </Overlay>

      <Overlay
        isVisible={state.ShowSignUp}
        onBackdropPress={handleToggleSignUp}
        animationType="fade"
        overlayStyle={{
          height: '30%',
          width: '80%',
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20,
          paddingTop: 35,
        }}>
        <SignUpPage />
      </Overlay>

      <Row size={2}></Row>
      <Row size={1}>
        <Col size={1}></Col>
        <Col size={9}>
          <Row>
            <Input
              placeholder="User Name"
              leftIcon={{type: 'font-awesome', name: 'user'}}
              onChangeText={(value) => handleChange('UserLogin', value)}
              value={state.UserLogin.Value}
            />
          </Row>

          <Row>
            <Input
              placeholder="Password"
              leftIcon={{type: 'font-awesome', name: 'lock'}}
              onChangeText={(value) => handleChange('UserPassword', value)}
              value={state.UserPassword.Value}
              secureTextEntry
            />
          </Row>

          <Row>
            <Col>
              <Button
                buttonStyle={{height: 60}}
                icon={{
                  type: 'font-awesome',
                  name: 'sign-in',
                  color: 'white',
                }}
                title="Sign In"
                loading={state.Loading}
                onPress={handleLogin}
              />
            </Col>
            <Col></Col>
            <Col>
              <Button
                buttonStyle={{height: 60}}
                icon={{
                  type: 'font-awesome',
                  name: 'user-plus',
                }}
                title="Sign Up"
                type="outline"
                onPress={handleToggleSignUp}
                raised
              />
            </Col>
          </Row>
        </Col>
        <Col size={1}></Col>
      </Row>
      <Row size={2}></Row>
    </Grid>
  );
};

export default LoginPage;
