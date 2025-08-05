import axios from "axios";
import { router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductListScreen = () => {
    const [cars, setCars] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://taimur101101.github.io/carsdb/carsdb2.json")
                setCars(response.data)
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
            <Stack.Screen
                name='ProductListingScreen'
                options={{
                    headerShown: false,
                }}
            />
            <Text style={styles.header}>All Cars</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10, }}>
                <View>
                    <Text style={styles.smallTitle}>WELCOME BACK</Text>
                    <Text style={styles.userName}>Syed Ali Hassan</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/ProfileScreen')}>
                    <Image source={require('../assets/aliimage.jpg')} style={styles.avatar} />

                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <TextInput style={styles.searchInput} placeholder="Search" value={search} onChangeText={setSearch} />

                <TouchableOpacity style={styles.searchBtn} onPress={() => console.log("Search pressed")}>
                    <Icon name="search" size={24} color="black" />
                </TouchableOpacity>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0EFEF",

    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30,
        backgroundColor: "#1485cf",
        color: "white",
    },
    smallTitle: {
        fontSize: 12,
        color: '#888',

    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 50,
        backgroundColor: "#F0EFEF",
        marginRight: 10,
    },

    searchBtn: {
        padding: 10,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#d1edff",
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        alignItems: "center",
        elevation: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
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
});

export default ProductListScreen;
