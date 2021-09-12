import React, { useState, useEffect } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import { Styles } from '../stylesheet/styles';
import { insertString, read, clear } from '../database/asyncDB';

const SignUp = (props) => {

    useEffect(() => {
        clear()
    })

    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    const [passVal, setVal] = useState('')

    return (
        <SafeAreaView style={Styles.container}>
            <TouchableOpacity style={Styles.logoutButton}
                onPress={() => {
                    props.navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Login'
                        }]
                    })
                }}>
                <Text style={Styles.logoutButtontext}>Já possui conta?</Text>
            </TouchableOpacity>
            <Text style={Styles.wellcomeBanner}>Área de registro</Text>
            <Text style={Styles.header}>Insira suas informações para continuar:</Text>
            <Text style={Styles.labelStyle}>Nome de usuário:</Text>
            <Input placeholder='Nome de usuário' placeholderTextColor='#C0F4AB' inputContainerStyle={{ borderBottomWidth: 0 }} style={Styles.input2} showSoftInputOnFocus={false} keyboardType="numeric" value={username} onChangeText={(txt) => setUser(txt)} />
            <Text style={Styles.labelStyle}>Insira sua senha:</Text>
            <Input placeholder='Senha' placeholderTextColor='#C0F4AB' inputContainerStyle={{ borderBottomWidth: 0 }} style={Styles.input2} secureTextEntry={true} showSoftInputOnFocus={false} keyboardType="numeric" value={password} onChangeText={(txt) => setPass(txt)} />
            <Text style={Styles.labelStyle}>Confirme sua senha:</Text>
            <Input placeholder='Confirmação de senha' placeholderTextColor='#C0F4AB' inputContainerStyle={{ borderBottomWidth: 0 }} style={Styles.input2} secureTextEntry={true} showSoftInputOnFocus={false} keyboardType="numeric" value={passVal} onChangeText={(txt) => setVal(txt)} />
            <TouchableOpacity style={Styles.enterButton}
                onPress={() => {
                    if (username.trim() == '' && password.trim() == '' && passVal.trim() == '') {
                        alert('Preencha os campos')
                        return
                    } else if (username.trim() == '') {
                        alert('Informe o nome de usuário.')
                        return
                    } else if (password.trim() == '') {
                        alert('Informe a senha.')
                        return
                    } else if (passVal.trim() == '') {
                        alert('Confirme sua senha.')
                        return
                    } else if (username.trim().length > 12) {
                        alert('O nome de usuário não pode ter mais do que 12 caracteres.')
                        return
                    } else if (password.trim().length < 4) {
                        alert('A senha deve conter ao menos 4 caracteres.')
                        return
                    } else if (password != passVal) {
                        alert('As senhas não coincidem.')
                        return
                    } else if (username.trim().length > 0 && password.trim() == passVal.trim()) {
                        insertString(username, password)
                        read(username, (error, value) => {
                            alert(`Você foi registrado! Usuário: ${username}, Senha: ${value}`)
                            return
                        })
                        props.navigation.reset({
                            index: 0,
                            routes: [{
                                name: 'Login',
                                params: {
                                    username,
                                    password
                                }
                            }]
                        })
                    }
                }}>
                <Text style={Styles.enterButtonText}>REGISTRAR</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { SignUp }