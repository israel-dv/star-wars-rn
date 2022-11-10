import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card } from "../../components/Card";
import { HeaderList } from "../../components/HeaderList/HeaderList";
import { useStarships } from "../../hooks/useStarships";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { StarshipsResults } from "../../utils/types/Starships.types";

export const Starships = (): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [starshipList, setStarshipList] = useState<StarshipsResults[]>([]);

  const { navigate } = useNavigation();
  const { data: starships, isLoading, isFetching } = useStarships(page);

  useEffect(() => {
    if (!isLoading && starships?.results)
      setStarshipList([...starshipList, ...starships.results]);
  }, [starships, page]);

  const handleClick = (starship: StarshipsResults) => {
    navigate("StarshipDetails", {
      starship,
    });
  };

  const handleEndReached = () => {
    if (starships?.next) setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaLayout>
      <FlatList
        data={starshipList}
        ListHeaderComponent={<HeaderList text="Starships" />}
        stickyHeaderIndices={[0]}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            primaryText={`Model: ${item.model}`}
            secondayText={`Passengers: ${item.passengers}`}
            onPress={() => handleClick(item)}
          />
        )}
        onEndReached={handleEndReached}
        ListFooterComponent={isFetching ? <Text>isLoadingFucker</Text> : null}
      />
    </SafeAreaLayout>
  );
};
