import { styles } from "@/src/styles/Home.styles";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Expo!</Text>
      <Text style={styles.card}>Reading List App</Text>
    </View>
  );
};

export default Home;
