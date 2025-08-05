import { Link, Stack, router } from "expo-router";
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileScreen = () => {
    return (
        <View style={styles.container}>

            <Stack.Screen name='ProfileScreen' options={{ headerShown: false, }} />


            <View>
                <Text style={styles.header}>Admin Profile</Text>
            </View>

            <View style={styles.cardContainer}>

                <View style={styles.imageConatiner}>
                    <Image source={require("../assets/aliimage.jpg")} style={styles.Image} />

                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Syed Ali Hassan</Text>
                        <Text style={styles.locationTxt}>Lahore, Pakistan</Text>
                        <Text style={styles.managertxxt}>Manager</Text>
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Text style={styles.phoneTxt}>📞      0313 4756033</Text>
                    <Link href="https://gmail.com" style={styles.emailTxt}>📧      alihassan@gmail.com</Link>
                </View>
            </View>
            <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, marginVertical: 10 }}></View>

            <View>
                <View style={styles.profileContainer}>
                    <Icon name="user" size={24} color="darkorange" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Manage Users</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="pencil" size={24} color="#C49729" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Manage Posts</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="bar-chart" size={24} color="#4CAF50" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => router.push("/AdminDashboardScreen")}>
                        <Text style={styles.profileTxt}>View Reports</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="exclamation-circle" size={24} color="red" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>User Complaints</Text>
                    </TouchableOpacity>
                </View >
                <View style={styles.profileContainer}>
                    <Icon name="bell" size={24} color="#E8D63A" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Send Notification</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="bug" size={24} color="#78909C" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Bug Report</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="life-ring" size={24} color="#C7577D" />
                    <TouchableOpacity onPress={() => { Alert.alert("Contact Support Team on Email") }}>
                        <Text style={styles.profileTxt}>Support Team</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, marginVertical: 10 }}></View>
                <View style={styles.profileContainer}>
                    <Icon name="sign-out" size={24} color="red" />
                    <Link href="/AdminLoginScreen" style={styles.profileTxt} >Log out</Link>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0EFEF"

    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 0,
        backgroundColor: "#1485cf",
        color: "white",
    },
    cardContainer: {
        margin: 5,
        marginTop: 10,
        borderRadius: 10,

    },
    imageConatiner: {
        margin: 0,
        borderRadius: 10,
        width: 100,
        flexDirection: "row",
        paddingLeft: 7

    },
    Image: {
        width: 100,
        height: 100,
        borderRadius: 60,

    },
    nameContainer: {
        justifyContent: "center",
        width: 200

    },
    nameTxt: {
        textAlign: "center",
        color: "#1485cf",
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 0
    },
    locationTxt: {
        color: "grey",
        fontWeight: "500",
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 30

    },
    managertxxt: {
        color: "#1485cf",
        fontWeight: "500",
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 30

    },
    cardInfo: {
        paddingTop: 20,

    },
    phoneTxt: {
        color: "grey",
        fontWeight: "500",
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 7

    },
    emailTxt: {
        color: "#0000FF",
        fontWeight: "500",
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 7
    },
    profileContainer: {
        flexDirection: "row",
        padding: 18



    },
    profileTxt: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#1485cf",





    },

})
export default ProfileScreen