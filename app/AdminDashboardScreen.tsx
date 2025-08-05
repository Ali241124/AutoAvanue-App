import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DashboardScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
            name='ProfileScreen'
            options={{
                headerShown: false,
                }} />
                
                <View>
                    <Text style={styles.header2}>Dashboard</Text>
                    </View>

            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.smallTitle}>WELCOME BACK</Text>
                        <Text style={styles.userName}>Syed Ali Hassan</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/AdminProfileScreen')}>
                        <Image
                            source={require('../assets/aliimage.jpg')}
                            style={styles.avatar}
                        />

                    </TouchableOpacity>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statCard1}>
                        <Text style={styles.statTitle}>Active Projects</Text>
                        <Text style={styles.statValue}>23</Text>
                        <Text style={styles.statSubtitle}>+3 New in 7 Days</Text>
                    </View>
                    <View style={styles.statCard2}>
                        <Text style={styles.statTitle}>Overdue</Text>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statSubtitle}>+1 Late in last 7 Days</Text>
                    </View>
                </View>
                <View style={styles.statsRow}>
                    <View style={styles.statCard3}>
                        <Text style={styles.statTitle}>Pending</Text>
                        <Text style={styles.statValue}>35</Text>
                        <Text style={styles.statSubtitle}>+1 Late in last 7 Days</Text>
                    </View>
                    <View style={styles.statCard4}>
                        <Text style={styles.statTitle}>Meetings</Text>
                        <Text style={styles.statValue}>None</Text>
                        <Text style={styles.statSubtitle}>+1 Late in last 7 Days</Text>
                    </View>
                </View>

                <View style={styles.projectsHeader}>
                    <Text style={styles.sectionTitle}>Your Projects</Text>
                    <Text style={styles.viewAll}>View All</Text>
                </View>

                <View style={styles.projectItem}>
                    <Ionicons name="rocket" size={24} color="#2196F3" />
                    <View style={styles.projectInfo}>
                        <Text style={styles.projectTitle}>Website Launch</Text>
                        <Text style={styles.progressText}>2/5</Text>
                    </View>
                </View>

                <View style={styles.projectItem}>
                    <Ionicons name="construct" size={24} color="#4CAF50" />
                    <View style={styles.projectInfo}>
                        <Text style={styles.projectTitle}>Application Update</Text>
                        <Text style={styles.progressText}>3/10</Text>
                    </View>
                </View>

                <View style={styles.projectItem}>
                    <Ionicons name="server" size={24} color="#F44336" />
                    <View style={styles.projectInfo}>
                        <Text style={styles.projectTitle}>Server Data Transfer</Text>
                        <Text style={styles.progressText}>5/5</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header2: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 0,
        backgroundColor: "#1485cf",
        color: "white",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
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
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    statCard1: {
        flex: 1,
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 12,
        marginRight: 10,
    },
    statCard2: {
        flex: 1,
        backgroundColor: 'red',
        padding: 16,
        borderRadius: 12,
        marginRight: 10,
    },
    statCard3: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 16,
        borderRadius: 12,
        marginRight: 10,
    },
    statCard4: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 12,
        marginRight: 10,
    },
    statTitle: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 6,
    },
    statValue: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    statSubtitle: {
        color: '#fff',
        fontSize: 12,
        marginTop: 4,
    },
    projectsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        color: '#007BFF',
        fontSize: 14,
    },
    projectItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    },
    projectInfo: {
        marginLeft: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    projectTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    progressText: {
        fontSize: 14,
        color: '#666',
    },
});

export default DashboardScreen;

