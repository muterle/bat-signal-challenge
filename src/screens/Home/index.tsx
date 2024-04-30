import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

import batSignal from "../../images/bat-signal.png";
import ActiveSignal from "../../components/ActiveSignal";
import BatForm from "../../components/BatForm";

const Home = () => {
  const [activated, setActivated] = useState(false);

  return (
    <View style={styles.container}>
      {!activated ? (
        <ActiveSignal handleActivate={setActivated} />
      ) : (
        <BatForm handleDeactivate={setActivated} />
      )}
    </View>
  );
};

export default Home;
