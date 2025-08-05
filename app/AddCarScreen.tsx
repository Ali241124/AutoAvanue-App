import * as ImagePicker from "expo-image-picker";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddCar = () => {
    const [model, setModel] = useState("")
    const [make, setMake] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [engineType, setEngineType] = useState("")
    const [engineCapacity, setEngineCapacity] = useState("")
    const [transmission, setTransmission] = useState("")
    const [kilometers, setKilometersDriven] = useState("")
    const [fuelAvg, setFuelAvg] = useState("")
    const [image, setImage] = useState<string | null>(null)

    const handleSubmit = () => {
        if (!make.trim() || !model.trim() || !year.trim() || !engineType.trim() || !price.trim() || !engineCapacity.trim() || !transmission.trim() || !kilometers.trim() || !fuelAvg.trim() || (typeof image === "string" && !image.trim())) {
            Alert.alert("Error", "Please fill in all the fields.")
            return;
        }
        setMake("")
        setPrice("")
        setModel("")
        setYear("")
        setEngineType("")
        setTransmission("")
        setEngineCapacity("")
        setKilometersDriven("")
        setFuelAvg("")
        setImage("")
        Alert.alert("Success", "Product Added Successfully")

    }

    const pickImage = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Permission to access gallery is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container} >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Stack.Screen name="AddCarScreen" options={{ headerShown: false, }} />
                <Text style={styles.header}>Add Car</Text>

                <View style={{ alignItems: "center", marginVertical: 10 }}>
                    {image && (<Image source={{ uri: image }} style={{ width: 200, height: 150, borderRadius: 10 }} />)}
                    <TouchableOpacity onPress={pickImage} style={[styles.imagebtn, { width: 160 }]} >
                        <Text style={styles.btntxt}>
                            {image ? "Change Image" : "Upload Car Image"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={styles.inputHeading}>Make</Text>
                    <TextInput placeholder="Enter Car Make" value={make} onChangeText={setMake} style={styles.input} />
                    <Text style={styles.inputHeading}>Model</Text>
                    <TextInput placeholder="Enter Car Model" value={model} onChangeText={setModel} style={styles.input} />
                    <Text style={styles.inputHeading}>Year</Text>
                    <TextInput placeholder="Enter Car Year" value={year} onChangeText={setYear} style={styles.input} keyboardType="numeric" />
                    <Text style={styles.inputHeading}>CC</Text>
                    <TextInput placeholder="Enter CC" value={engineCapacity} onChangeText={setEngineCapacity} style={styles.input} keyboardType="numeric" />
                    <Text style={styles.inputHeading}>Kilometers</Text>
                    <TextInput placeholder="Enter Kilometers Driven" value={kilometers} onChangeText={setKilometersDriven} style={styles.input} keyboardType="numeric" />
                    <Text style={styles.inputHeading}>Fuel Average</Text>
                    <TextInput placeholder="Enter Fuel Average" value={fuelAvg} onChangeText={setFuelAvg} style={styles.input} keyboardType="numeric" />
                    <Text style={styles.inputHeading}>Price</Text>
                    <TextInput placeholder="Enter Price" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />

                </View>

                <View>
                    <View style={{ flexDirection: "row", gap: 10, marginLeft: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Engine Type:</Text>
                        {["Petrol", "Diesel"].map((type) => (
                            <TouchableOpacity key={type} style={{ flexDirection: "row", marginHorizontal: 10 }} onPress={() => setEngineType(type)}>
                                <View style={{ height: 20, width: 20, marginBottom: 20, borderRadius: 50, borderWidth: 1, borderColor: "#1485cf", backgroundColor: engineType === type ? "#1485cf" : "white", marginRight: 4 }} />
                                <Text>{type}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={{ flexDirection: "row", gap: 10, marginLeft: 10, marginTop: 10 }} >
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Transmission:</Text>
                        {["Automatic", "Manual"].map((type) => (
                            <TouchableOpacity key={type} style={{ flexDirection: "row", marginHorizontal: 10 }} onPress={() => setTransmission(type)}>
                                <View style={{ height: 20, width: 20, borderRadius: 50, borderWidth: 1, borderColor: "#1485cf", backgroundColor: transmission === type ? "#1485cf" : "white", marginRight: 4, }} />
                                <Text>{type}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.addbtn} activeOpacity={0.2} onPress={() => {
                        { handleSubmit }
                        Alert.alert("Car Added Successfully")
                        router.push("/CarListingScreen")


                    }}>
                        <Text style={styles.btntxt}>Add Car</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    inputHeading: {
        fontWeight: "bold"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        width: "90%",
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: "#F0EFEF",
    },
    imagebtn: {
        backgroundColor: "#1485cf",
        padding: 10,
        borderRadius: 30,
        marginTop: 20,

    },
    addbtn: {
        backgroundColor: "#1485cf",
        padding: 15,
        width: 100,
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 50

    },
    btntxt: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default AddCar;