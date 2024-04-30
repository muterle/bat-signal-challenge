import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

import batSignal from "../../images/bat-signal.png";

interface IProps {
  handleActivate: (active: boolean) => void;
}

const ActiveSignal = ({ handleActivate }: IProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={batSignal} />
      <Pressable style={styles.active} onPress={() => handleActivate(true)}>
        <Text style={styles.buttonText}>Active Bat Signal</Text>
      </Pressable>
      <StatusBar style="dark" />
    </View>
  );
};

export default ActiveSignal;
