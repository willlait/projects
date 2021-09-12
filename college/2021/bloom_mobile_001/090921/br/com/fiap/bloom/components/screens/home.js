import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { Styles } from "../stylesheet/styles";
import { insertString } from "../database/asyncDB";

const Home = (props) => {

    const { username } = props.route.params;
    const [plant, setPlant] = useState('')
    const [value, setValue] = useState('teste')
    const [select, setSelection] = useState(0)


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
                <Text style={Styles.logoutButtontext}>sair.</Text>
            </TouchableOpacity>
            <Text style={Styles.wellcomeBanner}> Bem vindo, {username}!</Text>
            <Text style={Styles.header}>O que você gostaria de começar a cultivar?</Text>
            <SafeAreaView style={Styles.veggieContainer1}>
                <TouchableOpacity
                    onPress={() => {
                        setSelection(1)
                        setPlant('Alface')
                    }}>
                    <Image style={Styles.veggieIcon} source={require('../assets/ico/cabbage.png')} />
                    <Text style={Styles.veggieText}>Alface</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setSelection(1)
                        setPlant('Alecrim')
                    }}>
                    <Image style={Styles.veggieIcon} source={require('../assets/ico/rosemary.png')} />
                    <Text style={Styles.veggieText}>Alecrim</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={Styles.veggieContainer2}>
                <TouchableOpacity
                    onPress={() => {
                        setSelection(1)
                        setPlant('Camomila')
                    }}>
                    <Image style={Styles.veggieIcon} source={require('../assets/ico/chamomile.png')} />
                    <Text style={Styles.veggieText}>Camomila</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setSelection(1)
                        setPlant('Hortelã')
                    }}>
                    <Image style={Styles.veggieIcon} source={require('../assets/ico/spearmint.png')} />
                    <Text style={Styles.veggieText}>Hortelã</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <TouchableOpacity style={Styles.enterButton}
                onPress={() => {
                    if (select == 1) {
                        insertString(plant, value)
                        props.navigation.reset({
                            index: 0,
                            routes: [{
                                name: 'VeggieInfo',
                                params: {
                                    plant,
                                    username
                                }
                            }]
                        })
                    } else {
                        alert('Por favor, selecione um vegetal.')
                        return
                    }
                }}>
                <Text style={Styles.enterButtonText}>Selecionar</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export { Home }