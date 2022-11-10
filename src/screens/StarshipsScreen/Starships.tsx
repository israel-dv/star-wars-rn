import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Card } from "../../components/Card";
import { HeaderList } from "../../components/HeaderList/HeaderList";
import { useStarships } from "../../hooks/useStarships";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { StarshipsResults } from "../../utils/types/Starships.types";
import { FooterLoading } from "../../components/FooterLoading";
import { ScreenLoading } from "../../components/ScreenLoading";
import { EmptyList } from "../../components/EmptyList";
import { StackParamList } from "../../components/Navigators/AppNavigator";

type StarshipScreenProps = NativeStackScreenProps<
  StackParamList,
  "StarshipDetails"
>;

export const Starships = ({
  navigation,
}: StarshipScreenProps): React.ReactElement => {
  const { navigate } = navigation;

  const [page, setPage] = useState<number>(1);
  const [starshipList, setStarshipList] = useState<StarshipsResults[]>([]);

  const {
    data: starships,
    isLoading,
    isFetching,
    isError,
  } = useStarships(page, { keepPreviousData: true });

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
      {isLoading ? (
        <ScreenLoading />
      ) : (
        <FlatList
          data={starshipList}
          ListHeaderComponent={<HeaderList text="Starships" />}
          ListEmptyComponent={<EmptyList isErrorContentType={isError} />}
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
          ListFooterComponent={isFetching ? <FooterLoading /> : null}
        />
      )}
    </SafeAreaLayout>
  );
};
