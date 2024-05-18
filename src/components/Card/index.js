import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

export default function Card() {
  return (
    <View style={styles.container}>
      <Image style={styles.gambar} source={
        require("./../../assets/img/maul.jpg")
        } />
      <Text style={styles.textProduct}>Maul</Text>
      <Text style={styles.textPrice}>Jempol</Text>
      <Text style={styles.textLocation}>SIDOARJO</Text>
      <Button title="BELI" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 350,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 15,
    padding: 30,
  },
  gambar: {
    width: 250,
    height: 166,
    alignSelf: "center",
    borderRadius: 15,
  },
  textProduct: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  textPrice: {
    color: "#F23B3B",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  textLocation: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
});
