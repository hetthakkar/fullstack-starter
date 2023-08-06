import React from "react";
import { Text, View } from "react-native";
import Welcome from "../components/Posts";

import { StyleSheet } from "react-native";
import PostForm from "../components/PostForm";

export default function Page() {
  return (
    <View className="flex h-full w-full flex-col items-center justify-center">
      <View className="mt-8 flex h-24 items-center justify-center">
        <Text className="flex items-center justify-center text-3xl font-bold">
          Posts
        </Text>
      </View>
      <Welcome />
      <PostForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
