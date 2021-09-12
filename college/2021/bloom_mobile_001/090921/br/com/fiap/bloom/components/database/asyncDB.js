import AsyncStorage from "@react-native-community/async-storage";

const masterInfo = { masterUser: 'root', masterPass: '1234' }

const insertString = async (key, value, callback = null) => {
    try {
        await AsyncStorage.setItem(key, value, callback)
    } catch (error) {
        throw new Error('Não foi possível inserir os dados.')
    }
}

const read = async (key, callback = null) => {
    try {
        await AsyncStorage.getItem(key, callback)
    } catch (error) {
        throw new Error('Não foi possível recuperar os dados da chave:' + key)
    }
}

const remove = async (key, callback = null) => {
    try {
        await AsyncStorage.removeItem(key, callback)
    } catch (error) {
        throw new Error('Não foi possível apagar os dados da chave:' + key)
    }
}

const allKeys = async (callback = null) => {
    try {
        await AsyncStorage.getAllKeys(callback)
    } catch (error) {
        throw new Error('Não foi possível recuperar todos os dados.')
    }
}

const clear = async (callback = null) => {
    try {
        await AsyncStorage.clear(callback)
    } catch (error) {
        throw new Error('Não foi possível limpar a base de dados.')
    }
}

export { masterInfo }
export { insertString }
export { read }
export { remove }
export { allKeys }
export { clear }