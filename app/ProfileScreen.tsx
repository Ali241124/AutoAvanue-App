import { Link, Stack, router } from "expo-router";
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const ProfileScreen = () => {
    return (
        <View style={styles.container}>

            <Stack.Screen
                name='ProfileScreen'
                options={{
                    headerShown: false,
                }} />


            <View>
                <Text style={styles.header}>Your Profile</Text>
            </View>

            <View style={styles.cardContainer}>

                <View style={styles.imageConatiner}>
                    <Image source={require("../assets/aliimage.jpg")} style={styles.Image} />

                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Syed Ali Hassan</Text>
                        <Text style={styles.locationTxt}>Lahore, Pakistan</Text>
                    </View>
                </View>

                <View style={styles.cardInfo}>
                    <Text style={styles.phoneTxt}>📞      0300 8459613</Text>
                    <Link href="https://gmail.com" style={styles.emailTxt}>📧      alihassan@gmail.com</Link>
                </View>
            </View>
            <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, marginVertical: 10 }}></View>

            <View>
                <View style={styles.profileContainer}>
                    <Icon name="heart" size={24} color="red" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => router.push("/FavouriteScreen")}>
                        <Text style={styles.profileTxt}>Your Favourite</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="car" size={24} color="#29B6F6" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => router.push("/MyListingScreen")}>
                        <Text style={styles.profileTxt}>Your Listings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="ticket" size={24} color="#E04F01" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("You Currently Have No Vouchers")}>
                        <Text style={styles.profileTxt}>Vouchers</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="search" size={24} color="#815BAD" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Search History</Text>
                    </TouchableOpacity>
                </View >
                <View style={styles.profileContainer}>
                    <Icon name="sun-o" size={24} color="#E4D559" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Theme</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="cog" size={24} color="#388E3C" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <Icon name="pencil" size={24} color="#0b4a73" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => Alert.alert("Under Construction")}>
                        <Text style={styles.profileTxt}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, marginVertical: 10 }}></View>
                <View style={styles.profileContainer}>
                    <Icon name="sign-out" size={24} color="red" />
                    <TouchableOpacity activeOpacity={0.2} onPress={() => router.push("/")}>
                        <Text style={styles.profileTxt}>Log Out</Text>
                    </TouchableOpacity>
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