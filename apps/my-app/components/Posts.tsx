import { trpc } from "../client";
import { View, Text, StyleSheet } from "react-native";
import React from "react";

function Posts() {
  const posts = trpc.post.all.useQuery();

  return (
    <View className="= flex w-40 flex-1 flex-col">
      {posts.data?.map((post) => (
        <View
          key={post.id}
          className="my-2 rounded-lg border bg-blue-50 p-2 text-center"
        >
          <View className="flex flex-row">
            <Text className="font-bold ">id: </Text>
            <Text>{post.id}</Text>
          </View>
          <View className="flex flex-row">
            <Text className="font-bold ">title: </Text>
            <Text selectable>{post.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default Posts;
