import React from 'react';
import {View} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  Input,
  Button,
  Overlay,
  Text,
  Icon,
  Header,
} from 'react-native-elements';
import {Router, Scene, Drawer, Tabs, Stack, Actions} from 'react-native-router-flux';

import DrawerContent from '../../components/DrawerContent';

import {useDispatch, useSelector} from 'react-redux';

import MyProfilePage from '../MyProfile';
import MenuIcon from '../../images/menu_burger.png';

const HomePage = () => {

  const handleDrawer = () => {
    Actions.drawerOpen();
  }

  return (
    <Header
      leftComponent={{icon: 'menu', color: '#fff', onPress: handleDrawer}}
      centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
  );
};

export default HomePage;
