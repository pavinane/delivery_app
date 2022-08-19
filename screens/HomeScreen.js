import React, { useLayoutEffect } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://www.boredpanda.com/blog/wp-content/uploads/2016/01/16-year-old-artist-dimitra-milan-fb-png__700.jpg",
          }}
          className="w-14 h-14 bg-gray-50 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={24} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-3 p-3 flex-1 bg-gray-200 rounded-xl">
          <SearchIcon color="grey" size={20} />
          <TextInput
            placeholder="Resturant and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* categories */}
        <Categories />
        <FeaturedRow
          title="Featured"
          description="Paid placement for our partners"
        />
        <FeaturedRow
          title="Tasty Discount"
          description="Everyone been enjoy these juicy discount"
        />
        <FeaturedRow
          title="Offers Near You"
          description="Why not support local resturant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
