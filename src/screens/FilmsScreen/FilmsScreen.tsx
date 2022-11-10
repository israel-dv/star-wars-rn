import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";

import { Card } from "../../components/Card";
import { FooterLoading } from "../../components/FooterLoading";
import { HeaderList } from "../../components/HeaderList/HeaderList";
import { useFilms } from "../../hooks/useFilms";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { FilmsResults } from "../../utils/types/Films.types";

export const FilmsScreen = (): React.ReactElement => {
  const { data: films } = useFilms();
  const { navigate } = useNavigation();

  const handleClick = (film: FilmsResults) => {
    navigate("FilmDetails", {
      film,
    });
  };

  return (
    <SafeAreaLayout>
      <FlatList
        ListHeaderComponent={<HeaderList text="Films" />}
        stickyHeaderIndices={[0]}
        data={films?.results}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            primaryText={`Director: ${item.director}`}
            secondayText={`Date: ${item.release_date}`}
            onPress={() => handleClick(item)}
          />
        )}
      />
    </SafeAreaLayout>
  );
};
