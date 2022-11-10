import React from "react";
import { FlatList } from "react-native";

import { Card } from "../../components/Card";
import { HeaderList } from "../../components/HeaderList/HeaderList";
import { useFilms } from "../../hooks/useFilms";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";

export const FilmsScreen = (): React.ReactElement => {
  const { data: films } = useFilms();

  const handleClick = () => {
    console.log("handle click");
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
            onPress={handleClick}
          />
        )}
      />
    </SafeAreaLayout>
  );
};
