import { router, Stack } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !age.trim() || !city.trim() || !password.trim()) {
            Alert.alert("Error", "Please fill in all the fields.");
            return;
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setAge("");
        setCity("");
        setPassword("");

        Alert.alert(
            "Signup Successful",
            "Please Login to Continue",
            [
                {
                    text: "OK",
                    onPress: () => router.push("/Login"),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>

            <Stack.Screen
                name='Signup'
                options={{
                    headerShown: false,
                }} />
            <Text style={styles.header}>SignUp</Text>

            <KeyboardAvoidingView behavior="padding" style={{ width: "100%", alignItems: "center" }}>

                <View style={{ alignItems: "center" }}>
                    <Image source={require("../assets/logo 2.1.png")} style={styles.image} />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TextInput placeholder="Enter Your First Name"
                        style={styles.FirstNameField}
                        value={firstName}
                        onChangeText={setFirstName} />

                    <TextInput placeholder="Enter Your Last Name"
                        style={styles.LastNameField}
                        value={lastName}
                        onChangeText={setLastName} />

                    <TextInput placeholder="Enter Your Email"
                        style={styles.emailField}
                        value={email}
                        onChangeText={setEmail} />

                    <TextInput placeholder="Enter Your Age"
                        style={styles.AgeField}
                        keyboardType="numeric"
                        value={age}
                        onChangeText={setAge} />

                    <TextInput placeholder="Enter Your City"
                        style={styles.CityField}
                        value={city}
                        onChangeText={setCity} />

                    <TextInput placeholder="Set a Password"
                        style={styles.passwordField}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />

                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.signupbtn} activeOpacity={0.2} onPress={handleSubmit}>
                        <Text style={styles.signuptxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",


    },
    header: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30,
        backgroundColor: "#1485cf",
        position: "absolute",
        top: 0,
        width: "100%",



    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 0,

    },
    FirstNameField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,


    },
    LastNameField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,

    },
    AgeField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    CityField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
    },

    emailField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    passwordField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
    },

    signupbtn: {
        backgroundColor: "#1485cf",
        padding: 10,
        width: 100,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    signuptxt: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
});

export default Signup;