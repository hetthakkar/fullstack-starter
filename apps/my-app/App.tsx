import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Welcome from "./components/Posts";
import { TrpcProvider } from "./trpc-utils/TrpcProvider";

export default function Native() {
  return (
    <TrpcProvider>
      <View style={styles.container}>
        <Text style={styles.header}>Native</Text>
        <StatusBar style="auto" />
        <Welcome />
      </View>
    </TrpcProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
