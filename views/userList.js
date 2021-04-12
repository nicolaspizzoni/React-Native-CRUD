import React, { useContext } from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default ({navigation}) => {

  const {state, dispatch} = useContext(UsersContext)

  function confirmUserDeletion(u){
    Alert.alert('Deletar usuário', 'Deseja deletar o usuário?', [
      {
        text: 'Sim',
        onPress(){
          dispatch({
            type: 'deleteUser',
            payload: u
          })
        }
      },
      {
        text: 'Não'
      }
    ])
  }
    
  function getUser({item: user}) {

    return (
      <ListItem bottomDivider>
          <Avatar rounded size="medium" title={user.name[0]} source={{uri: user.urlAvatar}}/>
          <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            onPress={() => navigation.navigate('userForm', user)}
            iconProps={{name: "edit"}}
            iconStyle={{fontSize: 25, color: "orange"}}
          />
          <ListItem.Chevron
            onPress={() => confirmUserDeletion(user)}
            iconProps={{name: 'delete'}}
            iconStyle={{fontSize: 25, color: "red"}}
          />
      </ListItem>
    );
  };

  return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUser}
            />
        </View>
  )
};
