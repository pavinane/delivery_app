import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import React, { Component } from "react";

const CategoriesCard = ({ imgurl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgurl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold ">
        {title}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant Cards */}
      </ScrollView>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
