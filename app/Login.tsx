import { router, Stack } from "expo-router";
import React from "react";
import { Alert, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Error", "Please fill in all the fields.");
            return;
        }

        setEmail("");
        setPassword("");
        router.push("/CarListingScreen");
    }
    return (
        <View style={styles.container} >

            <Stack.Screen
                name='login'
                options={{
                    headerShown: false,
                }}
            />
            <Text style={styles.header}>Login</Text>

            <KeyboardAvoidingView behavior="padding" style={{ width: "100%", alignItems: "center" }}>

                <View style={{ alignItems: "center", }}>
                    <Image source={require("../assets/logo 2.1.png")} style={styles.image} />
                </View>

                <View style={{ alignItems: "center", }}>
                    <TextInput
                        placeholder="Email"
                        style={styles.emailField}
                        value={email}
                        onChangeText={setEmail} />
                    <TextInput
                        placeholder="Password"
                        style={styles.passwordField}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry />
                </View>

                <View style={styles.btnview}>
                    <TouchableOpacity style={styles.loginbtn} activeOpacity={0.2} onPress={handleSubmit}>
                        <Text style={styles.logintxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupbtn} activeOpacity={0.2} onPress={() => router.push("/Signup")}>
                        <Text style={styles.signuptxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
}


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

    signupbtn: {
        backgroundColor: "#1485cf",
        padding: 10,
        width: 100,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },
    signuptxt: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    emailField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10
    },
    passwordField: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10

    },
    loginbtn: {
        backgroundColor: "#1485cf",
        padding: 10,
        width: 100,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20
    },
    logintxt: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    btnview: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 250,
        marginBottom: 20,
        alignItems: "center"

    }
})
export default Login