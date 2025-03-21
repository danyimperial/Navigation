import { StyleSheet } from "react-native";

export const RegisterPageStyle = StyleSheet.create({
    Container: {
        justifyContent: "center",
        flex: 1, 
        alignItems: 'center',
        width: '100%',
    },
    Logo: {
        width: 356,
        height: 300,
        marginBottom: 10
    },
    BackButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'black',
        width: "60%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        position: 'absolute',
        bottom: 10,
        alignItems: 'center'
    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        width: "60%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        alignItems: 'center'
    },
    RegisterText: {
        color: 'white'
    },
    InputEmail: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'black',
        width: "60%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        alignItems: 'center'
    },
    InputPassword: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'black',
        width: "60%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        alignItems: 'center'
    },
    ErrorHandler: {
        color: 'red',
        marginBottom: 8,
    }
})