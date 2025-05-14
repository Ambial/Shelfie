import { styles as sharedStyles } from "@/src/styles/shared.styles";
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const About = () => {
  return (
    <View style={sharedStyles.container}>
      <Text>About Page</Text>

      <Link href={"/"} style={sharedStyles.link}>Go Back</Link>
    </View>
  )
}

export default About