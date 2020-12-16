import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';
import {Provider} from 'react-redux';
import axios from 'axios';

import configureStore from './store/configureStore';
import {Router, Scene, Drawer, Tabs, Stack} from 'react-native-router-flux';
import DrawerContent from './components/DrawerContent';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import MyProfilePage from './pages/MyProfile';

const initialState = window.initialReduxState;

const store = configureStore(initialState);

axios.defaults.baseURL = 'http://192.168.1.87:5000';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Scene key="root">
            <Stack hideNavBar>

              <Scene
                key="login"
                component={LoginPage}
                title="Login"
                initial={true}
              />

              <Drawer
                hideNavBar
                key="home"
                style={{marginTop: 10, paddingTop: 10}}
                contentComponent={DrawerContent}>
                <Scene
                  key="drawer1"
                  component={HomePage}
                  title="Home"
                  hideNavBar
                />
              </Drawer>
              
            </Stack>
          </Scene>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
