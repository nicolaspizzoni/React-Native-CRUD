import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import userForm from '../views/userForm';
import userList from '../views/userList';
import {UsersProvider} from '../context/UsersContext';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="userList"
            component={userList}
            options={({navigation}) => {
              return {
                title: 'Lista de usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('userForm')}
                    type="clear"
                    icon={
                      <Icon name="add-circle-outline" size={25} color="white" />
                    }
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="userForm"
            component={userForm}
            options={({navigation}) => {
              return {
                title: 'Cadastro',
                headerLeft: (props) => (
                  <Button
                    {...props}
                    onPress={() => navigation.goBack()}
                    type="clear"
                    icon={
                      <Icon name="arrow-back" size={25} color="white" />
                    }
                  />
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#000',
  },
  // headerShown: false
  headerTitleStyle: {
    color: 'white',
  },
};
