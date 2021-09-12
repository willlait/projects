import React from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
} from "react-native";
import { Styles } from "../stylesheet/styles";


const VeggieInfo = (props) => {

    const { username } = props.route.params;
    const { plant } = props.route.params;

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.wellcomeBanner}>{plant}</Text>
            <Text style={Styles.vegSpecifics}>Nome Científico: Genus Species</Text>
            <Text style={Styles.vegSpecifics}>Período de germinação: ~~</Text>
            <Text style={Styles.vegSpecifics}>Dificuldade relativa do cultivo: YY</Text>
            <Text style={Styles.descHeader}>Descrição: </Text>
            <Text style={Styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <TouchableOpacity style={Styles.enterButton} onPress={() => {
                props.navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'Home',
                        params: {
                            username
                        }
                    }]
                })
            }}>
                <Text style={Styles.enterButtonText}>Retornar para seleção</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { VeggieInfo }