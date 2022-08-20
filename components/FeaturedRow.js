import { Text, View, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ id, title, description, featuredCategorie }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 color-gray-500 text-xs pb-3">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: 15,
        }}
      >
        <ResturantCard
          id={123}
          imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
          title="Pizza"
          rating="4.5"
          genre="Pizza"
          address="Kathmandu"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients"
          dishes="Pizza, Pasta, Burger, Salad"
          lat={27.7172453}
          long={85.3239593}
        />
        <ResturantCard
          id={123}
          imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
          title="Pizza"
          rating="4.5"
          genre="Pizza"
          address="Kathmandu"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients"
          dishes="Pizza, Pasta, Burger, Salad"
          lat={27.7172453}
          long={85.3239593}
        />
        <ResturantCard
          id={123}
          imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
          title="Pizza"
          rating="4.5"
          genre="Pizza"
          address="Kathmandu"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients"
          dishes="Pizza, Pasta, Burger, Salad"
          lat={27.7172453}
          long={85.3239593}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
