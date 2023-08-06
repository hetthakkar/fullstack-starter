import React from "react";
import { useState } from "react";
import { Pressable, TextInput, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { trpc } from "../client";

export default function PostForm() {
  const [postTitle, setPostTitle] = useState<string>();
  const utils = trpc.useContext();
  const mutation = trpc.post.add.useMutation({});

  trpc.post.onAdd.useSubscription(undefined, {
    onData() {
      utils.post.all.invalidate();
    },
  });

  return (
    <View className="my-4 flex h-10 flex-row items-center">
      <TextInput
        className="h-full rounded-lg border p-2"
        onChangeText={setPostTitle}
        value={postTitle}
        placeholder="Enter post title"
      />
      <Pressable
        onPress={() => {
          postTitle != null && mutation.mutate({ title: postTitle });
          setPostTitle("");
        }}
      >
        <View className="ml-3 flex h-full flex-col justify-center rounded-lg border bg-green-200 px-2">
          <Text>📨</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    padding: 12,
    borderWidth: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
