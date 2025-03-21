import React from 'react';
import {
    Text,
    ImageBackground,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { HomePageStyle } from '../styles/HomePageStyle';

const HomePageScreen = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    };
    const handleRegister = () => {
        navigation.navigate('RegisterScreen');
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={HomePageStyle.Container}
            blurRadius={2}
        >
            <View style={HomePageStyle.Container}>
                <Image
                    style={HomePageStyle.Logo}
                    source={require('../assets/logo.webp')} />

                {/* Register Button */}
                <TouchableOpacity
                    style={HomePageStyle.RegisterButton}
                    onPress={handleRegister}
                >
                    <Text style={HomePageStyle.RegisterText}>
                        GET STARTED
                    </Text>
                </TouchableOpacity>

                {/* Login Button */}
                <Text style={HomePageStyle.StaticText}>
                Already Have An Account?{" "}
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={HomePageStyle.LoginText}>Login</Text>
                </TouchableOpacity>
            </Text>

            </View>
        </ImageBackground>
    )
}


export default HomePageScreen;