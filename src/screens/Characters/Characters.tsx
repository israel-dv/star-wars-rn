import React from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "../../components/Card";

import { usePeople } from "../../hooks/usePeople";
import { SafeAreaLayout } from "../../layouts";
import { charactersStyles } from "./CharactersStyles";

export const Characters = () => {
  const { data: people } = usePeople();

  const handleClick = () => {
    console.log("here");
  };

  return (
    <SafeAreaLayout>
      <View style={charactersStyles.container}>
        <FlatList
          data={people?.results}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              birth_year={item.birth_year}
              gender={item.gender}
              onPress={handleClick}
            />
          )}
        />
      </View>
    </SafeAreaLayout>
  );
};
