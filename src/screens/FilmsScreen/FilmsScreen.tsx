import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";

import { Card } from "../../components/Card";
import { EmptyList } from "../../components/EmptyList";
import { HeaderList } from "../../components/HeaderList/HeaderList";
import { ScreenLoading } from "../../components/ScreenLoading";
import { useFilms } from "../../hooks/useFilms";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { FilmsResults } from "../../utils/types/Films.types";

export const FilmsScreen = (): React.ReactElement => {
  const { data: films, isLoading, isError } = useFilms();
  const { navigate } = useNavigation();

  const handleClick = (film: FilmsResults) => {
    navigate("FilmDetails", {
      film,
    });
  };

  return (
    <SafeAreaLayout>
      {isLoading ? (
        <ScreenLoading />
      ) : (
        <FlatList
          ListHeaderComponent={<HeaderList text="Films" />}
          ListEmptyComponent={<EmptyList isErrorContentType={isError} />}
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
      )}
    </SafeAreaLayout>
  );
};
