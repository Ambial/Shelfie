import { styles } from "@/src/styles/Home.styles";
import React from "react";
import { Image, Text, View } from "react-native";
import Logo from "../../assets/images/logo/reading_app_logo_light.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      <Text style={styles.title}>Hello Expo!</Text>
      <Text style={styles.card}>Reading List App</Text>
    </View>
  );
};

export default Home;
