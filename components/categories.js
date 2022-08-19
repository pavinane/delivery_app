import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoriesCard  */}
      <CategoriesCard
        imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
        title="Offer"
      />
      <CategoriesCard
        imgurl="https://thumbs.dreamstime.com/b/pizza-salami-arugula-wooden-board-36924315.jpg"
        title="Pizza"
      />
      <CategoriesCard
        imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
        title="Testing3"
      />
      <CategoriesCard
        imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
        title="Testing1"
      />
      <CategoriesCard
        imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
        title="Testing2"
      />
      <CategoriesCard
        imgurl="https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg?w=2000"
        title="Testing3"
      />
    </ScrollView>
  );
};

export default Categories;
