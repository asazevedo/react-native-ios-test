import React from 'react';
import {View} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Input, Button, Overlay, Text, Header, ListItem} from 'react-native-elements';

const DrawerContent = () => {
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Titulo Teste</ListItem.Title>
          <ListItem.Subtitle>Subtitulo Teste</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default DrawerContent;
