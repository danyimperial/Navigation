import React, { useState, useEffect } from 'react';
import {
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import { LoginPageStyle } from '../styles/LoginPageStyle';

const LoginScreen = ({ route, navigation }) => {
    // Receive registered user data from RegisterScreen
    const { registeredUser } = route.params || {};  // This will be the data passed from RegisterScreen

    // Error Handling => Email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const validEmail = (text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    // Error Handling => Password
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const validPass = (text) => {
        setPassword(text);
        if (text.length < 8) {
            setPassError("Password must at least be 8 characters long.");
        } else {
            setPassError("");
        }
    };

    // Error Handling => Login
    const [inputError, setInputError] = useState("");

    const handleLogin = () => {
        setInputError("");

        if (emailError || passError || !email || !password) {
            if (!password) {
                setInputError("Password is required.");
            }
            if (!email) {
                setInputError("Email is required.");
            }
            return;
        }

        // Check if entered credentials match registered user
        if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
            navigation.navigate('HomePageScreen');
        } else {
            setInputError("Invalid email or password.");
        }
    };

    // Navigation @ HomePageScreen.js
    const handleHome = () => {
        navigation.navigate('HomePageScreen');
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={LoginPageStyle.Container}
            blurRadius={20}
        >
            <View style={LoginPageStyle.Container}>
                <Image
                    style={LoginPageStyle.Logo}
                    source={require('../assets/logo.webp')}
                />

                {/* Email Input */}
                <TextInput
                    style={[
                        LoginPageStyle.InputEmail,
                        emailError ? LoginPageStyle.ErrorHandler : null,
                        { borderColor: emailError ? 'red' : 'black' }
                    ]}
                    placeholder="Email"
                    value={email}
                    onChangeText={validEmail}
                    keyboardType="email-address"
                />
                {emailError ? <Text style={LoginPageStyle.ErrorHandler}>{emailError}</Text> : null}

                {/* Password Input */}
                <TextInput
                    secureTextEntry={true}
                    style={[
                        LoginPageStyle.InputPassword,
                        passError ? LoginPageStyle.ErrorHandler : null,
                        { borderColor: passError ? 'red' : 'black' }
                    ]}
                    placeholder="Password"
                    value={password}
                    onChangeText={validPass}
                    keyboardType="default"
                />
                {passError ? <Text style={LoginPageStyle.ErrorHandler}>{passError}</Text> : null}

                {/* Login Button */}
                <TouchableOpacity
                    style={LoginPageStyle.LoginButton}
                    onPress={handleLogin}
                >
                    <Text style={LoginPageStyle.LoginText}>LOGIN</Text>
                </TouchableOpacity>

                {/* Login Error Message */}
                {inputError ? <Text style={LoginPageStyle.ErrorHandler}>{inputError}</Text> : null}

                {/* Back Button */}
                <TouchableOpacity
                    style={LoginPageStyle.BackButton}
                    onPress={handleHome}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
