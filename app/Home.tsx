import { styles } from "@/src/styles/Home.styles";
import { styles as sharedStyles } from "@/src/styles/shared.styles";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import Logo from "../assets/images/logo/reading_app_logo_light.png";

const Home = () => {
  return (
    <View style={sharedStyles.container}>
      <Image source={Logo} style={styles.logo}/>
      <Text style={sharedStyles.title}>Hello Expo!</Text>
      <Text style={styles.card}>Reading List App</Text>

      <Link href={"/About"} style={[sharedStyles.link, styles.linkContainer]}>About</Link>
    </View>
  );
};

export default Home;
