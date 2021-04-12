import React, { useContext, useState } from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)

    return(
        <View style={styles.container}>
            <Text>Nome:</Text>
            <TextInput
                style={styles.input}
                value={user.name}
                onChangeText={name => setUser({...user, name})}
                placeholder="Escreva seu nome"
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser({...user, email})}
                value={user.email}
                placeholder="Informe seu email"
            />
            <Text>Avatar URL:</Text>
            <TextInput
                style={styles.input}
                value={user.urlAvatar}
                onChangeText={urlAvatar => setUser({...user, urlAvatar})}
                placeholder="Insira o URL da imagem do seu avatar"
            />
            <Button
                title="Salvar"
                type="clear"
                buttonStyle={styles.button}
                titleStyle={{color: 'white'}}
                onPress = {() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'snow',
    },
    input: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 15,
        marginTop: 80
    }
})