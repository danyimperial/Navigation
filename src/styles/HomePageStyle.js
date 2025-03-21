import { StyleSheet } from "react-native";

export const HomePageStyle = StyleSheet.create({
    Container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    Logo: {
        width: 356,
        height: 300,
        margin: 10,
        // position: 'absolute',
        // bottom: 125,
    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        width: '70%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        position: 'absolute',
        bottom: 65,
        alignItems: 'center'
    },
    RegisterText: {
        color: 'white',
    },
    // LoginButton: {
    //     borderWidth: 1,
    //     borderColor: '1D1616',
    //     width: '40%',
    //     paddingTop: 10,
    //     paddingBottom: 10,
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     margin: 5,
    //     position: 'absolute',
    //     bottom: 10,
    //     alignItems: 'center'
    // },
    LoginText: {
        fontSize: 16, 
        textDecorationLine: 'underline',  
    }, 
    StaticText: {
        fontSize: 16,
        position: 'absolute',
        bottom: 30,
    },
})