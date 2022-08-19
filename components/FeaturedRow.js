import { Text, View } from "react-native";
import React, { Component } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({ id, title, description, featuredCategorie }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 color-gray-500 text-xs">{description}</Text>
    </View>
  );
};

export default FeaturedRow;
