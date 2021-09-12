import React, { useState, useEffect } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import { Styles } from '../stylesheet/styles';
import { masterInfo, read } from '../database/asyncDB';

const Login = (props) => {

    const [username, setUser] = useState('')
    const [password, setPass] = useState('')

    return (
        <SafeAreaView style={Styles.container}>
            <Image source={require('../assets/img/flower.png')} style={Styles.bloomLogo} />
            <Text style={Styles.inputHint}>(Pular registro: username: 'root', senha: '1234')</Text>
            <Input placeholder='NOME' placeholderTextColor='#C0F4AB' inputContainerStyle={{ borderBottomWidth: 0 }} style={Styles.input} showSoftInputOnFocus={false} keyboardType="numeric" result={username} onChangeText={(txt) => setUser(txt)} />
            <Input placeholder='SENHA' placeholderTextColor='#C0F4AB' inputContainerStyle={{ borderBottomWidth: 0 }} style={Styles.input} secureTextEntry={true} showSoftInputOnFocus={false} keyboardType="numeric" result={password} onChangeText={(txt) => setPass(txt)} />
            <TouchableOpacity
                onPress={() => {
                    props.navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'SignUp'
                        }]
                    })
                }}>
                <Text style={Styles.registerHint}>Ainda não é usuário? Se registre aqui!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.enterButton} onPress={() => {
                read(username, (error, value) => {
                    if (error) {
                        alert('Erro ao logar..' + console.log)
                    }

                    if (value == password) {
                        props.navigation.reset({
                            index: 0,
                            routes: [{
                                name: 'Home',
                                params: {
                                    username
                                }
                            }]
                        })
                    } else if (username == masterInfo.masterUser && password == masterInfo.masterPass) {
                        props.navigation.reset({
                            index: 0,
                            routes: [{
                                name: 'Home',
                                params: {
                                    username
                                }
                            }]
                        })
                    } else if (username.trim() == '' && password.trim() == '') {
                        alert('Preencha os campos.')
                        return
                    } else if (username.trim() == '') {
                        alert('Preencha o campo de nome.')
                        return
                    } else if (password.trim() == '') {
                        alert('Preencha o campo de senha.')
                        return
                    } else if (password != value) {
                        alert('Senha incorreta.')
                        return
                    }
                })
            }}>
                <Text style={Styles.enterButtonText}> Entrar </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { Login }