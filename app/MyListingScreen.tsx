import { Stack, router } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FavouriteCar = () => {
    const cars = [
        {
            id: "1",
            title: "Suzuki Alto",
            year: 2020,
            price: 11000,
            engine_type: "Petrol",
            description: "The 2020 Suzuki Alto AGS is a compact and fuel-efficient hatchback, ideal for city driving.Equipped with Suzuki’s Auto Gear Shift(AGS) technology, it offers the convenience of automatic transmission with the economy of manual.Its lightweight design makes it highly maneuverable in tight traffic conditions.The Alto AGS delivers an impressive fuel average of around 20–22 km / l.Despite its small size, the interior is decently spacious for daily commuting.It features basic modern comforts like air conditioning, power steering, and airbags.Affordable maintenance and reliable resale value make it a top choice for budget - conscious buyers.",
            engine_capacity: 660,
            transmission: "AGS",
            kilometers_driven: 55000,
            fuel_avg_kmpl: 23,
            image: "https://i.ytimg.com/vi/lDfwDQaTN_Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCctOOpme1QKfH9v8UYkmSgVsIoBQ"
        },
        {
            id: "2",
            title: "Toyota Corolla",
            year: 2005,
            price: 2000,
            engine_type: "Petrol",
            description: "The 2005 Toyota Corolla Automatic is a well-built sedan known for its durability and comfort.Powered by a reliable engine and automatic transmission, it offers smooth performance for both city and highway drives.The spacious cabin and generous legroom make it ideal for families and long trips.It includes standard features like power windows, ABS brakes, and air conditioning.Despite its age, it maintains a strong presence on Pakistani roads due to its long- lasting engine.The Corolla’s suspension system handles bumps and rough roads with ease.With its solid build and low running costs, it's still a dependable daily driver.",
            engine_capacity: 1800,
            transmission: "Automatic",
            kilometers_driven: 121000,
            fuel_avg_kmpl: 11.8,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Corolla_2005%2C_Pakistan.jpg"
        },
    ]


    return (
        <View style={styles.container}>
            <Stack.Screen name='ProfileScreen' options={{ headerShown: false, }} />
            <View>
                <Text style={styles.header}>Your Listings</Text>
            </View>

            <FlatList
                data={cars}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => router.push({
                        pathname: "/CarDetailScreen",
                        params: {
                            title: item.title,
                            desc: item.description,
                            year: item.year,
                            price: `$ ${item.price}`,
                            engine_type: item.engine_type,
                            engine_capacity: item.engine_capacity,
                            transmission: item.transmission,
                            kilometers_driven: item.kilometers_driven,
                            fuel_avg_kmpl: item.fuel_avg_kmpl,
                            image: item.image,


                        },
                    })
                    }
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.title}>$ {item.price}</Text>
                            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 20, }}>
                                <Text style={styles.misc}>{item.year}</Text>
                                <Text style={styles.misc}>{item.kilometers_driven} km</Text>
                                <Text style={styles.misc}>{item.engine_capacity} CC </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )}
            />



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
    card: {
        backgroundColor: "#d1edff",
        marginBottom: 15,
        alignItems: "flex-start",
        justifyContent: "space-between",
        elevation: 3,
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 0,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,


    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    misc: {
        fontSize: 12,
        fontWeight: "600",
        color: "#1485cf",

    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

})
export default FavouriteCar