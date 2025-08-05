import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



const CarDetail = () => {
    const { title, desc, price, image, engine_type, engine_capacity, transmission, kilometers_driven, fuel_avg_kmpl, year } = useLocalSearchParams<{
        title?: string;
        desc?: string;
        price?: string;
        engine_type?: string;
        engine_capacity?: string;
        transmission?: string;
        kilometers_driven?: string;
        fuel_avg_kmpl?: string;
        year?: string;
        image?: string;
    }>();

    return (


        <View style={styles.containertwo}>
            <Stack.Screen name='ProductListingScreen' options={{ headerShown: false, }} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>


                <ScrollView contentContainerStyle={styles.container}>


                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <Text style={styles.price}>Price:      {price}</Text>
                    <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, width: "90%" }}></View>


                    <View style={{ flex: 1, alignItems: "flex-start", width: "100%", paddingLeft: 15, flexDirection: "row", justifyContent: "space-between", paddingRight: 15 }}>
                        <Text style={styles.descHeading}>Description</Text>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={() => alert("Added to Favourites")}>
                                <Icon name="heart" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.desc}>{desc}</Text>


                    <View style={{ flex: 1, alignItems: "flex-start", width: "100%", paddingLeft: 15 }}>
                        <Text style={styles.descHeading}>Features</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: "flex-start", width: "100%", paddingLeft: 15 }}>
                        <Text style={styles.misc}>Year                                                         {year}</Text>
                        <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, width: "90%" }}></View>

                        <Text style={styles.misc}>Engine Type                                          {engine_type}</Text>
                        <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, width: "90%" }}></View>

                        <Text style={styles.misc}>Engine Capacity                                   {engine_capacity} CC</Text>
                        <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, width: "90%" }}></View>

                        <Text style={styles.misc}>Transmission                                       {transmission}</Text>
                        <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, width: "90%" }}></View>

                        <Text style={styles.misc}>Kilometers Driven                               {kilometers_driven} km</Text>
                        <View style={{ borderBottomColor: "lightgrey", borderBottomWidth: 1, width: "90%" }}></View>

                        <Text style={styles.misc}>Fuel Avg (kmpl)                                   {fuel_avg_kmpl}</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: "flex-start", width: "100%" }}>
                        <Image source={require('../assets/promo banner.png')} style={styles.promobanner} />
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start", width: "100%", paddingLeft: 15 }}>
                        <Text style={styles.descHeading}>Seller Details</Text>
                        <View style={{ marginBottom: 30 }}>
                            <Text style={styles.sellerName}>Qasim Khan</Text>
                            <Text>Lahore, Pakistan</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", gap: 10, marginBottom: 50, }}>
                            <TouchableOpacity style={styles.callbtn} onPress={() => alert("Make a Call from WhatsApp")} >
                                <Text style={styles.btntxt}>📞  Call Seller</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.msgbtn} onPress={() => alert("Message Seller on WhatsApp")} >
                                <Text style={styles.btntxt}>📧  Msg Seller</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    containertwo: {
        flex: 1,
        backgroundColor: "#F0EFEF",


    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 0,
        marginBottom: 0,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 40,
        backgroundColor: "#1485cf",
        color: "white"
    },
    descHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1485cf",
        marginTop: 20,
        textAlign: "left"

    },
    misc: {
        fontSize: 14,
        fontWeight: "600",
        color: "grey",
        padding: 10,
        borderRadius: 30,
        marginRight: 10,
        textAlign: "left"
    },
    desc: {
        fontSize: 16,
        lineHeight: 24,
        backgroundColor: "#F0EFEF",
        padding: 15,
        marginBottom: 0,
        color: "black",
    },
    price: {
        fontSize: 20,
        color: "#1485cf",
        fontWeight: "600",
        marginTop: 20,

    },
    promobanner: {
        width: "100%",
        height: 100,
        marginTop: 20
    },
    sellerName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginBottom: 0,
    },
    msgbtn: {
        backgroundColor: "#55afd4",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginLeft: 15,


    },
    callbtn: {
        backgroundColor: "green",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginLeft: 15,


    },

    btntxt: {
        color: "#fff",
        fontSize: 14,
    }
});

export default CarDetail;
