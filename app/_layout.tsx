import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'CarListingScreen') iconName = 'car';
          else if (route.name === 'ProfileScreen') iconName = 'person';
          else if (route.name === 'AddCarScreen') iconName = 'add-circle';
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#57e8f2",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          backgroundColor: '#1485cf',
          borderTopWidth: 0,
          borderTopColor: '#ccc',
        },
      })}
    >
      <Tabs.Screen name="CarListingScreen" options={{ title: 'Explore' }} />
      <Tabs.Screen name="AddCarScreen" options={{ title: 'Add Car' }} />
      <Tabs.Screen name="ProfileScreen" options={{ title: 'Profile' }} />

      <Tabs.Screen name="AdminDashboardScreen" options={{ href: null }} />
      <Tabs.Screen name="AdminLoginScreen" options={{ href: null }} />
      <Tabs.Screen name="CarDetailScreen" options={{ href: null }} />
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="Login" options={{ href: null }} />
      <Tabs.Screen name="Signup" options={{ href: null }} />
      <Tabs.Screen name="MyListingScreen" options={{ href: null }} />
      <Tabs.Screen name="FavouriteScreen" options={{ href: null }} />
      <Tabs.Screen name="AdminProfileScreen" options={{ href: null }} />
    </Tabs>
  );
};

export default Layout;
