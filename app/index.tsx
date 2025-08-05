import { router, Stack } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  return (

    <ImageBackground
      source={require("../assets/back image.png")}
      style={styles.background}
      resizeMode="cover"    >
      <View style={styles.container}>

        <Stack.Screen
          name='index'
          options={{
            headerShown: false,
          }}
        />


        <View style={{ position: "absolute", top: 20, right: 20, alignItems: "center", zIndex: 10 }}>
          <TouchableOpacity
            style={styles.Adminbtn}
            activeOpacity={0.2}
            onPress={() => router.push("/AdminLoginScreen")}
          >
            <Image source={require("../assets/admin2.jpg")} style={styles.AdminImg} />
          </TouchableOpacity>
          <Text style={styles.AdminTxt}>Admin</Text>
        </View>

        <Animatable.View
          animation="fadeInUp"
          duration={1000}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Image source={require("../assets/logo 1.png")} style={styles.image} />
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.mainText}>Welcome!</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.2}
              onPress={() => router.push("/Login")}
            >
              <Text style={styles.btntxt}>Find Your Dream Car</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  backImage: {
    width: 500,
    height: 500,
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
  Adminbtn: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    marginTop: 60,
    marginLeft: 0,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1

  },
  AdminImg: {
    width: 30,
    height: 30
  },
  AdminTxt: {
    color: "#1485cf",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center"
  },
  mainText: {
    fontSize: 29,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: "#1485cf",
    marginVertical: 0
  },
  image: {
    width: 230,
    height: 100,
    marginBottom: 10,
    paddingHorizontal: 50,

  },
  btn: {
    backgroundColor: "#1485cf",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,

  },
  btntxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",

  }
})
export default HomeScreen;