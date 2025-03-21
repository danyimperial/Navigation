import React, { useState } from 'react';
import {
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import { LoginPageStyle } from '../styles/LoginPageStyle';

const LoginScreen = ({ navigation }) => {
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

    // Sample Data 
    const userLogin = [
        {
            // User 
            email: "user@email.com",
            password: "password123",
            role: "user"
        },
        {
            // Admin
            email: "admin@email.com",
            password: "password456",
            role: "admin"
        }
    ];

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
        
        const user = userLogin.find(user => user.email === email && user.password === password);

        if (user) {
            if (user.role === "admin") {
                navigation.navigate('HomePageScreen'); 
            } else {
                navigation.navigate('RegisterScreen');
            }
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
                    source={require('../assets/logo.webp')} />

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

