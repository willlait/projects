import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#8BF461',
        height: '100%'
    },
    bloomLogo: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        marginBottom: 20,
        marginTop: 15
    },
    inputHint: {
        alignSelf: 'flex-start',
        fontSize: 10,
        color: '#696969',
        marginTop: 12,
        marginBottom: -10,
        marginLeft: '8%'
    },
    input: {
        margin: 15,
        height: 20,
        borderColor: "#C0F4AB",
        borderWidth: 1,
        backgroundColor: '#59A839',
        color: '#C0F4AB'
    },
    input2: {
        margin: 5,
        height: 5,
        borderColor: "#C0F4AB",
        borderWidth: 1,
        backgroundColor: '#59A839',
        color: '#C0F4AB',
        marginBottom: '-2%'
    },
    enterButton: {
        backgroundColor: "#C0F4AB",
        borderColor: "#59A839",
        borderWidth: 1,
        padding: 10,
        margin: 15,
        alignItems: "center",
        height: 40,
        width: '85%'
    },
    enterButtonText: {
        color: '#5A7350'
    },
    logoutButton: {
        alignSelf: 'flex-end',
        marginRight: '3%',
    },
    logoutButtontext: {
        color: '#5A7350',
        fontSize: 14,
    },
    wellcomeBanner: {
        color: '#5A7350',
        fontSize: 20,
        alignSelf: 'center'
    },
    header: {
        color: '#5A7350',
        fontSize: 16,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#5A7350'
    },
    veggieContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: '18%'
    },
    veggieContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: '16%'
    },
    veggieIcon: {
        height: 60,
        width: 60,
    },
    veggieText: {
        color: '#5A7350',
        alignSelf: 'center',
    },
    selected: {
        color: '#5A7350',
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },
    vegSpecifics: {
        color: '#427835',
        alignSelf: 'center',
        marginTop: 5
    },
    descHeader: {
        alignSelf: 'flex-start',
        color: '#427835',
        marginTop: 5,
        marginLeft: 5
    },
    descText: {
        marginLeft: 5,
        marginRight: 5,
        color: '#427835',
        marginBottom: '13%'
    },
    registerHint: {
        alignSelf: 'center',
        color: '#696969',
        marginTop: 12,
        marginBottom: -10,
    },
    labelStyle: {
        color: '#5A7350',
        fontSize: 14,
        marginTop: 12,
        marginLeft: '5%'
    }
})

export { Styles }