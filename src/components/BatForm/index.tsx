import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import React, { Component, useState } from "react";

import batSignal from "../../images/bat-signal.png";
import { styles } from "./styles";

interface IProps {
  handleDeactivate: (active: boolean) => void;
}

const BatForm = ({ handleDeactivate }: IProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [moreDetails, setMoreDetails] = useState("");

  const handleSend = () => {
    Alert.alert(
      "Message",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nMore Details: ${moreDetails}`,
      [{ text: "OK", onPress: () => handleDeactivate(false) }],
      {
        onDismiss: () => {
          setName("");
          setEmail("");
          setMessage("");
          setMoreDetails("");
        },
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={batSignal} />
      </View>
      <View style={styles.containerData}>
        <Text style={styles.textLabel}>Name</Text>
        <TextInput
          style={styles.text}
          placeholder="Enter the name"
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>
      </View>
      <View style={styles.containerData}>
        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          style={styles.text}
          placeholder="Enter the email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
      </View>
      <View style={styles.containerData}>
        <Text style={styles.textLabel}>Message</Text>
        <TextInput
          style={styles.text}
          placeholder="Enter the message"
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline={true}
          numberOfLines={4}
        ></TextInput>
      </View>
      <View style={styles.containerData}>
        <Text style={styles.textLabel}>More details</Text>
        <TextInput
          style={styles.text}
          placeholder="More details"
          value={moreDetails}
          onChangeText={(text) => setMoreDetails(text)}
          multiline={true}
          numberOfLines={4}
        ></TextInput>
      </View>
      <Pressable style={styles.send} onPress={() => handleSend()}>
        <Text style={styles.buttonText}>SEND</Text>
      </Pressable>
    </View>
  );
};

export default BatForm;
