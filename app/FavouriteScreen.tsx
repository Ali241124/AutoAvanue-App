import axios from "axios";
import { Stack, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FavouriteCar = () => {
    const [cars, setcars] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://taimur101101.github.io/carsdb/carsdb2.json")
                const limit = response.data.slice(0, 3)
                setcars(limit)
            } catch (err) {
                setError("Failed to load Products.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        };

        fetchProducts()
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#ed9537" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Stack.Screen name='ProfileScreen' options={{ headerShown: false, }} />
            <View>
                <Text style={styles.header}>Your Favourites</Text>
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